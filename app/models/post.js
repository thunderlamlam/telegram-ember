var Post = DS.Model.extend({
  user: DS.belongsTo('User'),
  body: DS.attr('string')

});

Post.reopenClass({
  FIXTURES: [
  {
    id: "1",
    user: 'emily',
    body: 'Hello World!'
  }, {
    id: "2",
    user: 'maggie',
    body: 'Hello Maggie!'
  }
]});

export default Post;