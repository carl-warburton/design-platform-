var Profile = require('../models/profile');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var profiles = [
  new Profile({
      imageProf:'https://yt3.ggpht.com/-zfUc8DPpBWs/AAAAAAAAAAI/AAAAAAAAAAA/DyRp7GoSxbo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      name:'Carl',
      hometown: 'Mollymook',
      instagram: 'https://www.instagram.com/trump/',
      twitter: 'https://twitter.com/CarlWarbs'
    }),
    new Profile({
        imageProf:'https://yt3.ggpht.com/-zfUc8DPpBWs/AAAAAAAAAAI/AAAAAAAAAAA/DyRp7GoSxbo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
        name:'Robert',
        hometown: 'Sydney',
        instagram: 'https://www.instagram.com/stabmag/',
        twitter: 'https://twitter.com/CarlWarbs'
      }),
      new Profile({
          imageProf:'https://yt3.ggpht.com/-zfUc8DPpBWs/AAAAAAAAAAI/AAAAAAAAAAA/DyRp7GoSxbo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
          name:'Jack',
          hometown: 'Milton',
          instagram: 'https://www.instagram.com/kanye/',
          twitter: 'https://twitter.com/CarlWarbs'
        }),
        new Profile({
            imageProf:'https://yt3.ggpht.com/-zfUc8DPpBWs/AAAAAAAAAAI/AAAAAAAAAAA/DyRp7GoSxbo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
            name:'Charles',
            hometown: 'Arley',
            instagram: 'https://www.instagram.com/carlos/',
            twitter: 'https://twitter.com/CarlWarbs'
          }),

];

var done = 0;
for (var i = 0; i < profiles.length; i++) {
  profiles[i].save(function(err, result){
    done++;
    if (done === profiles.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
