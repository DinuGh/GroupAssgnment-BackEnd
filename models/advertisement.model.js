const mongoose = require('mongoose');

const advertisementModel = mongoose.Schema(
    {
        category: String,
        title: String,
        description: String,
        condition: String,
        imageURL: [String],
        price: Number,
        sold: Boolean,
        enable: Boolean,
        deliveryMethod: String,
        creationDate: Date,
        publishedDate: Date,
        expiryDate: Date,
        userName: String,
        questionAnswer: [ {question: String, answer: String} ]
    },
    {
        collection: "advertisement"
    }
);

module.exports = mongoose.model('advertisementList', advertisementModel);
//
