var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  profileImage: DS.attr('string'),
  followers: DS.hasMany('User'),
  following: DS.hasMany('User')
  //user is put there because you are inputting the user object

});



export default User;