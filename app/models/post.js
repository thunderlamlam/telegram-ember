var Post = DS.Model.extend({
  author: DS.belongsTo('User'),
  body: DS.attr('string')

});

Post.reopenClass({
  FIXTURES: [
  {
    id: "1",
    author: 'emily',
    body: 'Hello World!'
  }, {
    id: "2",
    author: 'maggie',
    body: 'Hello Maggie!'
  }
]});

export default Post;