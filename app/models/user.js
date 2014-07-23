var User = DS.Model.extend({
  password: DS.attr('string'),
  name: DS.attr('string'),
  profileImage: DS.attr('string')
  //posts: DS.hasMany('Post'),
  //followers: DS.hasMany('user'),
  //following: DS.hasMany('user')
  //user is put there because you are inputting the user object

});

User.reopenClass({
  FIXTURES: [
  {
    id: "emily",
    name: "Emily Lam",
    //posts: ['1'],
    password: '1234',
    profileImage: 'profile1.jpg',
    //followers: ['maggie', 'cece'],
    //has many needs to take an array
    //following: ['cece']
  },
  {
    id: "maggie",
    name: "Maggie Lam",
    //posts: ['2'],
    password: '1234',
    profileImage: 'profile2.jpg',
    //followers: ['emily'],
    //following: ['cece']
  },
  {
    id: "cece",
    name: "Cecilia Lam",
    password: '1234',
    profileImage: 'profile3.jpg',
    //followers: ['maggie'],
    //following: ['emily']
  }

]});

export default User;