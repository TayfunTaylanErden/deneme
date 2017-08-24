
const MovieDB = require('moviedb')('0041e961aa65354434459ab23adf585d');



var xgenreid;
var ygenreid;
var z = [];
var x;
var y;
var uc;
var q =0;
var idx;
var idy;
var imdbidx;
var imdbidy;
var ids = [];

Meteor.methods({
    'getID': function (x, y ) {
        MovieDB.searchMovie({query: x}, function(err, res) {
            if (res) {
                idx = res.results[0].id;   ///sor 1 undefined veriyor
                console.log("Tmdb id is" + idx);
                MovieDB.searchMovie({query: y}, (err, res) => {
                    if (res) {
                        idy = res.results[0].id;
                        console.log("Tmdb id is" + idy);
                        ids = idx +',' +idy;
                        return callback(ids);
                    }
                    else {
                        console.log(err);
                    }
                });
            }
            else {
                console.log(err);
            }
        });
    },

    'getIMDBID': function(idx, idy){
            MovieDB.movieInfo({movie_id: idx}, (err, res) =>{
                if (res) {
            imdbidx = res.result[0].imdb_id;
            console.log(imdbidx)
                }
         else{console.log(err)}


            MovieDB.movieInfo({movie_id: idy}, (err, res) => {
                if (res) {
                    imdbidy = res.result[0].imdb_id;
                console.log(imdbidy);
                }

        else{console.log(err)}            }); });


},


'GetGenreID': function(x,y) {
    MovieDB.searchMovie({query: x}, (err, res) => {
        if (res) {
            xgenreid = res.results[0].genre_ids;
            console.log(xgenreid);
        }
        else{
            console.log(err);}
        if (res) {
            MovieDB.searchMovie({query: y}, (err, res) => {
                ygenreid = res.results[0].genre_ids;
                console.log(ygenreid);
                if (res) {
                    for (var i = 0; i < xgenreid.length; i++) {
                        for (var j = 0; j < ygenreid.length; j++) {
                            if (xgenreid[i] === ygenreid[j]) {
                                z = z + xgenreid[i] + ",";
                            }
                        }
                    }
                }
                console.log(z);
                q++
                console.log(q);
                if (q === 2) {
                    console.log("iki kez bastın hıyar");
                }
            });
        }
    });
},


'DiscoverMovie': function (z) {
    MovieDB.discoverMovie({'sort_by': 'popularity.desc', with_genres: z}, function (err, res) {
        for (var q = 0; q < res.results.length; q++) {

            uc = res.results[q].original_title;
        }
        console.log(uc);

});
    },

});




