var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/movies", function(req, res){
  getData("http://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=7d56016af89a3bbbc31a762e9e198b78%3A19%3A72545161", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/critics", function(req, res){
  getData("https://api.myjson.com/bins/4yc8q", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/dvd", function(req, res){
  getData("https://api.myjson.com/bins/33w9m", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/nytop", function(req, res){
  getData("https://api.myjson.com/bins/wlbu", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/classics", function(req, res){
  getData("https://api.myjson.com/bins/41z4a", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/random", function(req, res){
  getData("https://api.myjson.com/bins/1jydm", function(err,result){
    if(err) res.status(500).json(err);
    else res.status(200).json(result);
  });
});

router.get("/reviewers", function(req, res){
  getData("https://api.myjson.com/bins/56p62", function(err,result){
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
