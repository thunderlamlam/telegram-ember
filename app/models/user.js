var User = DS.Model.extend({
  password: DS.attr('string'),
  profile_image: DS.attr('string'),
  follower: DS.hasMany('user'),
  posts: DS.hasMany('post'),
  following: DS.hasMany('user')
  //user is put there because you are inputting the user object

});

User.reopenClass({
  FIXTURES: [
  {
    id: "emily",
    password: '1234',
    profileImage: '/img/profile.jpg',
    follower: 'maggie',
    posts: '1',
    following: 'cece'
  },
  {
    id: "maggie",
    password: '1234',
    profileImage: '/img/profile.jpg',
    follower: 'emily',
    posts: '1',
    following: 'cece'
  }

]});

export default User;