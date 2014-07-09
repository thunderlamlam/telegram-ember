var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  profileImage: DS.attr('string'),
  //followers: DS.attr('string'),
  followers: DS.hasMany('user'),
  //posts: DS.hasMany('post'),
  //following: DS.attr('string')
  following: DS.hasMany('user')
  //user is put there because you are inputting the user object

});

User.reopenClass({
  FIXTURES: [
  {
    id: "emily",
    name: "Emily Lam",
    password: '1234',
    profileImage: 'profile1.jpg',
    followers: ['maggie', 'cece'],
    //has many needs to take an array
    //posts: '1',
    following: ['cece']
  },
  {
    id: "maggie",
    name: "Maggie Lam",
    password: '1234',
    profileImage: 'profile2.jpg',
    followers: ['emily'],
    //posts: '1',
    following: ['cece']
  },
  {
    id: "cece",
    name: "Cecilia Lam",
    password: '1234',
    profileImage: 'profile3.jpg',
    followers: ['maggie'],
    //posts: '1',
    following: ['emily']
  }

]});

export default User;