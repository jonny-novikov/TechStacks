export const POSTS_PER_PAGE = 30;

export const postKarma = (post) =>  Math.max(1 + post.upVotes - post.downVotes, 0);

export const commentKarma = (comment) => 1 + comment.upVotes - comment.downVotes;

export const commentKarmaLabel = (comment) => {
  const points = commentKarma(comment);
  return `${commentKarma(comment)} point${points != 1 ? 's' : ''}`;
};

export const postCommentsLink = (post) => {
  return `/news/comments/${post.id}/${post.slug}`;
};

export function votedClass(postId) {
  if (this.userPostActivity != null) {
      if (this.userPostActivity.upVoted.indexOf(postId) >= 0)
          return 'up-voted';
      if (this.userPostActivity.downVoted.indexOf(postId) >= 0)
          return 'down-voted';
  }
  return '';
}

export function votedCommentClass(commentId) {
  if (this.userPostCommentVotes != null) {
      if (this.userPostCommentVotes.upVoted.indexOf(commentId) >= 0)
          return 'up-voted';
      if (this.userPostCommentVotes.downVoted.indexOf(commentId) >= 0)
          return 'down-voted';
  }
  return '';
}

export function user(){ return this.$store.getters.user; }
export function userId(){ return this.$store.getters.userId; }
export function userName(){ return this.$store.getters.user && this.$store.getters.user.userName; }
export function organization(org){ return org || this.organization || this.$store.getters.organization; }
export function organizationMember(org) { 
  const o = organization.call(this,org), uid = userId.call(this);
  const ret = uid != null && o && o.members && o.members.find(x => x.userId === uid);
  return ret;
}
export function isOrganizationMember(org) { return organizationMember.call(this,org) != null; }
export function isOrganizationModerator(org) { 
  const member = organizationMember.call(this,org);
  return this.$store.getters.isAdmin || (member && (member.isOwner || member.isModerator));
}
export function isOrganizationLocked(org) { return (org || organization.call(this) || {}).locked != null; }

export function memberCannotComment(org){ 
  const member = organizationMember.call(this,org);
  const ret = member && (member.denyComments || member.denyAll)
  return ret;
}

export function memberCannotPost(org){ 
  const member = organizationMember.call(this,org);
  return member && (member.denyPosts || member.denyAll)
}

export function memberDenyAll(org){ 
  const member = organizationMember.call(this,org);
  return member && member.denyAll;
}

export function hasOrganizationAndUser(org) {
  const ret = !!(organization.call(this,org) && user.call(this));
  return ret;
}

export function canManageOrganization(org) {
  const ret = hasOrganizationAndUser.call(this,org)
    && isOrganizationModerator.call(this,org);
  return ret;
}

export function canViewOrganization(org) {
  const ret = hasOrganizationAndUser.call(this,org)
    && (organization.call(this,org).deleted == null || isOrganizationModerator.call(this,org));
  return ret;
}

export function canPostToOrganization(org) {
  const ret = canViewOrganization.call(this,org)
    && (!isOrganizationLocked.call(this,org) || isOrganizationMember.call(this,org))
    && !memberCannotPost.call(this); 
  return ret;
}

export function canAnnotatePost(post,org) {
  const ret = canViewOrganization.call(this,org)
    && !memberDenyAll.call(this,org)
    && (!isOrganizationLocked.call(this,org) || isOrganizationMember.call(this,org))
    && post != null 
    && !post.archived
    && (post.deleted == null || isOrganizationModerator.call(this,org));
  return ret;
}

export function canContributeToPost(post,org) {
  const ret = canAnnotatePost.call(this,post,org)
    && (post.locked == null || isOrganizationModerator.call(this,org));
  return ret;
}

export function canUpdatePost(post,org) {
  const ret = canContributeToPost.call(this,post,org)
    && !memberCannotPost.call(this,org)
    && (post.userId == userId.call(this) || isOrganizationModerator.call(this,org));
  return ret;
}

export function canVotePost(post,org) {
  return canAnnotatePost.call(this, post,org)
    && userId.call(this) != post.userId;
}

export function canFavoritePost(post,org) {
  return canAnnotatePost.call(this, post,org);
}

export function canReportPost(post,org) {
  return canAnnotatePost.call(this, post,org)
    && userId.call(this) != post.userId;
}

export function canCommentPost(post,org) { 
  const ret = canContributeToPost.call(this,post,org)
    && !memberCannotComment.call(this); 
  return ret;
}

export function canUpdateComment(post,comment) {
  return canCommentPost.call(this,post)
    && comment != null
    && (!comment.deleted || isOrganizationModerator.call(this))
    && (comment.userId === userId.call(this) || isOrganizationModerator.call(this)); 
}

export function canPinComment(post,comment) {
  return canContributeToPost.call(this, post)
    && comment != null
    && (!comment.deleted || isOrganizationModerator.call(this))
    && (post.userId === userId.call(this) || isOrganizationModerator.call(this));
}

export function canReplyComment(post,comment) { 
  return canCommentPost.call(this, post) 
    && comment != null
    && !comment.deleted;
}

export function canAnnotateComment(post,comment) {
  return canAnnotatePost.call(this, post) 
    && comment != null
    && !comment.deleted;
}

export function canVoteComment(post,comment) { 
  return canAnnotateComment.call(this, post, comment) 
    && comment.userId !== userId.call(this);
}

export function canReportComment(post,comment) { 
  return canAnnotateComment.call(this, post, comment) 
    && comment.userId !== userId.call(this);
}

export function votePost(post, weight) {
  const prevVote = this.votedClass(post.id);
  if (prevVote === 'up-voted' && weight === 1 || prevVote === 'down-voted' && weight === -1)
      weight = 0;
  return this.$store.dispatch('votePost', { postId:post.id, weight });
}

export function votePostComment(postId, comment, weight) {
  const prevVote = this.votedCommentClass(comment.id);
  if (prevVote === 'up-voted' && weight === 1 || prevVote === 'down-voted' && weight === -1)
      weight = 0;
  return this.$store.dispatch('votePostComment', { postId, commentId:comment.id, weight });
}

export function favoritePost(post) {
  return this.$store.dispatch('favoritePost', { postId:post.id });
}

export function favoriteLabel(post) {
  return ((this.$store.getters.userPostActivity || {}).favorited || []).indexOf(post.id) >= 0
    ? 'un-favorite'
    : 'favorite';
}

export function hidePost(postId) {
  this.$store.commit('hidePost', postId);
}

export const sortComments = (comments) => {
  const now = new Date();
  const msPerMinute = 60 * 1000;
  return comments.sort((a,b) => {
    // show comments posted within 1min first, then revert to points,age ranking
    const aCreated = new Date(a.created);
    const bCreated = new Date(b.created);
    return now - aCreated < msPerMinute || now - bCreated < msPerMinute ? 
        (aCreated > bCreated ? -1 :  1)
      : commentKarma(a) > commentKarma(b) ?
        -1
      : commentKarma(a) < commentKarma(b) ?
        1
      : aCreated > bCreated ? 
        -1 : 
        1;
  });
};