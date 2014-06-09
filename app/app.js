import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'telegram', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'telegram');

//App.register('session:main', Session);
//App.inject('controller', 'session', 'session:main');
//App.IndexController = Ember.Controller.extend({
//  isLoggedIn: Ember.computed.alias('session.isAuthenticated')
//});

export default App;
