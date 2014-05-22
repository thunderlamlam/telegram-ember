var Post = DS.Model.extend({
  user: DS.belongsTo('User'),
  post_content: DS.attr('string')

});

Post.reopenClass({
  FIXTURES: [
  {
    id: "1",
    user_id: '1',
    post_content: 'Hello World!'
  }, {
    id: "2",
    user_id: '2',
    post_content: 'Hello Maggie!'
  }
]});

export default Post;