export default Ember.ObjectController.extend({
	isSelf: function(){
		return this.get('author') === this.session.user;
	}.property('author')
});