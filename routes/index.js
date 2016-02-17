var express = require('express');
var router = express.Router();
var request = require('request');
var config = require("../config.json");

router.get("/movies", function(req, res){
    getData(config.movies, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/critics", function(req, res){
    getData(config.critics, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/dvd", function(req, res){
    getData(config.dvd, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/nytop", function(req, res){
    getData(config.nytop, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/randomCriticNy", function(req, res){
    getData(config.randomCriticNy, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/random", function(req, res){
    getData(config.random, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

router.get("/reviewers", function(req, res){
    getData(config.reviewers, function(err,result){
        if(err) res.status(500).json(err);
        else res.status(200).json(result);
    });
});

getData.cache = {
    // key: url, value: body of the response
};

function getData(url, callback){
    if(getData.cache[url]){
        callback(null, getData.cache[url]);
    }else{
        request({
            url: url,
            headers: {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36",
                'Content-Type': 'application/json'
            }
        }, function(err,res,body){
            if(err) callback(err,null);
            else{
                getData.cache[url] = JSON.parse(body);
                callback(null, getData.cache[url]);
            }
        });
    }
}

module.exports = router;