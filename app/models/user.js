var User = DS.Model.extend({
  password: DS.attr('string'),
  profile_image: DS.attr('string'),
  follower: DS.hasMany('user')
  //user is put there because you are inputting the user object

});

User.reopenClass({
  FIXTURES: [
  {
    id: "emily",
    password: '1234',
    profile_image: '/img/profile.jpg',
    follower: 'maggie'
  }
]});

export default User;