var User = DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  profile_image: DS.attr('string'),
  follower: DS.attr('string')

});

User.reopenClass({
  FIXTURES: [
  {
    id: "1",
    username: 'emily',
    password: '1234',
    profile_image: '/img/profile.jpg',
    follower: 'maggie'
  }
]});

export default User;