export default Ember.View.extend({
  templateName: 'dashboard',
  didInsertElement: function() {
    $('body').addClass('dashboard');
  },
  willClearRender: function() {
    $('body').removeClass('dashboard');
  }
});