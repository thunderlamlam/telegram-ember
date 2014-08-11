var Post = DS.Model.extend({
  author: DS.belongsTo('User'),
  body: DS.attr('string'),
  date: DS.attr('date'),
  prettydate: function(){
        return moment(this.get('date')).fromNow();
      }.property('date')

});




export default Post;