var Post = DS.Model.extend({
  author: DS.belongsTo('User'),
  body: DS.attr('string'),
  date: DS.attr('date'),

  prettydate: function(){
        return moment(this.get('date')).fromNow();
      }.property('date')

});



Post.reopenClass({
  FIXTURES: [
  {
    id: "1",
    author: 'emily',
    body: 'Hello World!',
    date: new Date(2014,5,14,12,56,55) 
  }, {
    id: "2",
    author: 'maggie',
    body: 'Hello Maggie!',
    date: new Date(2014,5,14,12,56,55) 
  }
]});

export default Post;