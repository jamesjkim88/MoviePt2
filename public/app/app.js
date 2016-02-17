var app = angular.module("app", []);

app.controller("mainCtrl", function($scope){
    $scope.title = "MovieRev'U"
});

app.controller("mainCallCtrl", function($scope, http){
    http.get("/movies").then(function(config){
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function(config){
        console.log("error: " , config);
    })
});

app.controller("top5critics", function($scope, http) {
    http.get("/critics").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});

app.controller("top5dvd", function(http, $scope){
    http.get("/dvd").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});

app.controller("top5nytop", function(http, $scope){
    http.get("/nytop").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});

app.controller("top5criticNy", function(http, $scope){
    http.get("/randomCriticNy").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});

app.controller("top5random", function(http, $scope){
    http.get("/random").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});

app.controller("top5randomReviewers", function(http, $scope){
    http.get("/reviewers").then(function (config) {
        $scope.results = config.results;
        console.log("$scope.data: ", $scope.data);
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function (config) {
        console.log("error: ", config);
    });
});


/*****************
 Angular Factorie
*****************/

//go with having one factory
app.factory("http", function($q){
    return {
        get: function(url){
            return $q(function(resolve,reject){
                var xhr = new XMLHttpRequest();
                xhr.open("get", url);
                xhr.addEventListener("readystatechange", function(){
                    if(xhr.readyState === 4){
                        if(xhr.status === 200){
                            var obj = JSON.parse(xhr.responseText);
                            console.log("successful call", obj);
                            resolve(obj);
                        }else{
                            reject(xhr);
                        }
                    }
                });
                xhr.send();
            })

        }
    }
});
