var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  profileImage: DS.attr('string'),
  follower: DS.hasMany('user'),
  posts: DS.hasMany('post'),
  following: DS.hasMany('user')
  //user is put there because you are inputting the user object

});

User.reopenClass({
  FIXTURES: [
  {
    id: "emily",
    name: "Emily Lam",
    password: '1234',
    profileImage: '/img/profile1.jpg',
    follower: 'maggie',
    posts: '1',
    following: 'cece'
  }
  ,
  {
    id: "maggie",
    name: "Maggie Lam",
    password: '1234',
    profileImage: '/img/profile2.jpg',
    follower: 'emily',
    posts: '1',
    following: 'cece'
  }

]});

export default User;