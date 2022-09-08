const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>{
        console.log("Mongo Connection open!!");
    } )
    .catch(err => {
        console.log("Ohh noo mongo connection error error")
        console.log(err)
    })


/*onst p = new Product({
    name: 'Ruby Grapefruit',
    price : 1.99,
    category:'fruit'
})*/


const seedProducts = [
   
    {
        name: 'Mango',
        price: 50,
        category: 'fruit'
    },
    {
        name: 'Bell Paper',
        price: 70,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
    .then(res =>{
        console.log(res);
    })
    .catch(e =>{
        console.log(e);
    })



/*p.save().then(p => {
    console.log(p);
})
    .catch(e =>{
        console.log(e);
    })*/