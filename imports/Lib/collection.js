import {Mongo} from 'meteor/mongo'
export const Movie = new Mongo.collection('movie');




Meteor.methods({
    'movie.insert'(text) {
        Movie.insert({
            ID: text,
            createdAt: new Date(),
        });
    },
});

