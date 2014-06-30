export default Ember.View.extend({
  templateName: 'user',
  didInsertElement: function() {
    $('body').addClass('dashboard')
  },
  willClearRender: function() {
    $('body').removeClass('dashboard')
  }
});