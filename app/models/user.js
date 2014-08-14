var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  profileImage: DS.attr('string'),

  //user is put there because you are inputting the user object

});



export default User;