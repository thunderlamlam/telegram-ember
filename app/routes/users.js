export default Ember.Route.extend({

  model: function(params, transition) {
    return { user: params.user_id };
  },
  serialize: function(model) {
    return { user: model.get('user_id') };
  } 
});