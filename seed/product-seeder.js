var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
      imagePath:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUC3xHevEjTtSQVsF_MxtRzr467n1ZnxRYD3li13t5cwqkFP9MYw',
      title: 'Sparkle',
      description: 'Sparkle Lighter by tourist!!!!!!!!!',
      price: 10
    }),
    new Product({
        imagePath:'https://i.ytimg.com/vi/VYpikHTm-5o/maxresdefault.jpg',
        title: 'Sparkle',
        description: 'Sparkle Lighter by tourist!!!!!!!!!',
        price: 20
      }),
      new Product({
          imagePath:'https://thumbs.dreamstime.com/z/alphabet-sparkler-1459197.jpg',
          title: 'Sparkle',
          description: 'Sparkle Lighter by tourist!!!!!!!!!',
          price: 40
        }),
        new Product({
            imagePath:'https://d3ui957tjb5bqd.cloudfront.net/images/screenshots/products/56/567/567281/il_fullxfull-f.jpg?1436963029',
            title: 'Sparkle',
            description: 'Sparkle Lighter by tourist!!!!!!!!!',
            price: 12
          }),
          new Product({
              imagePath:'https://s-media-cache-ak0.pinimg.com/564x/8b/5d/2b/8b5d2b0876435408c3cd0b7760d0d990.jpg',
              title: 'Sparkle',
              description: 'Sparkle Lighter by tourist!!!!!!!!!',
              price: 15
            }),
            new Product({
                imagePath:'http://sr.photos1.fotosearch.com/bthumb/CSP/CSP647/k6470060.jpg',
                title: 'Sparkle',
                description: 'Sparkle Lighter by tourist!!!!!!!!!',
                price: 11
              })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result){
    done++;
    if (done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
