var Post = DS.Model.extend({
  user: DS.belongsTo('User'),
  post_content: DS.attr('string')

});

Post.reopenClass({
  FIXTURES: [
  {
    id: "1",
    user_id: 'emily',
    post_content: 'Hello World!'
  }, {
    id: "2",
    user_id: 'maggie',
    post_content: 'Hello Maggie!'
  }
]});

export default Post;