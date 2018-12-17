var Product = require('../models/products');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true});

var products = [
    new Product({
        imagepath: 'https://www.loake.co.uk/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/1/8/1880_edward_tan_single_ret.jpg',
        title: 'Shoes',
        description: 'Casual shoes',
        price: 20
    }),
    new Product({
        imagepath: 'https://d37yhijnre9fza.cloudfront.net/media/catalog/product/p/e/petite1_1.png',
        title: 'Bag',
        description: 'Backpack',
        price: 40
    }),
    new Product({
        imagepath: 'https://images-na.ssl-images-amazon.com/images/I/91z8l7GDr2L._SX425_.jpg',
        title: 'Digital camera',
        description: 'Nikon coolpix camera 6000X',
        price: 500
    }),
    new Product({
        imagepath: 'http://blogs.windows.com/uploads/sites/2/2014/04/p55t_5F00_488B697C.jpg',
        title: 'Laptop',
        description: 'Dell Inspiron 7560',
        price: 1000
    }),
    new Product({
        imagepath: 'https://images-na.ssl-images-amazon.com/images/I/517Relow1OL._UX562_.jpg',
        title: 'Sun glasses',
        description: 'Rayban Shades',
        price: 300
    }),
    new Product({
        imagepath: 'https://images-na.ssl-images-amazon.com/images/I/71Smu3dhj1L._SY550_.jpg',
        title: 'Smartphone',
        description: 'Nokia 7 plus',
        price: 250
    }),
]
var done =0;
for(i=0;i<products.length;i++)
{
    products[i].save(function(er, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}