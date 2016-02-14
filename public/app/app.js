/*
 Things to get done:
 overall, better angular code por favor.
 angular code seems repetitive
 UI design
 */

var app = angular.module("app", []);

app.controller("mainCtrl", function($scope){
    $scope.title = "MovieRev'U"
});

app.controller("mainCallCtrl", function(mainCall, $scope){
    mainCall.get().then(function(config){
        $scope.results = config.data.results;
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5critics", function(top5critics, $scope){
    top5critics.get().then(function(config){
        $scope.results = config.data.results;
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5dvd", function(top5dvd, $scope){
    top5dvd.get().then(function(config){
        $scope.results = config.data.results;
        console.log($scope.results)
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5nytop", function(top5nytop, $scope){
    top5nytop.get().then(function(config){
        $scope.results = config.data.results;
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5criticNy", function(top5criticNy, $scope){
    top5criticNy.get().then(function(config){
        $scope.results = config.data.results;
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5random", function(top5random, $scope){
    top5random.get().then(function(config){
        $scope.results = config.data.results;
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5randomReviewers", function(top5randomReviewers, $scope){
    top5randomReviewers.get().then(function(config){
        $scope.results = config.data.results;
        $scope.random = Math.floor((Math.random() * 15) + 1);
    }, function(config){
        console.log("error: ", config);
    });
});



/*****************
 Angular Factories
*****************/

app.factory("mainCall", function($http){
    return {
        get: function(){
            return $http.get("/movies");
        }
    }
});

app.factory("top5critics", function($http){
    return {
        get: function(){
            return $http.get("/critics");
        }
    }
});

app.factory("top5dvd", function($http){
    return {
        get: function(){
            return $http.get("/dvd");
        }
    }
});

app.factory("top5nytop", function($http){
    return {
        get: function(){
            return $http.get("/nytop");
        }
    }
});

app.factory("top5criticNy", function($http){
    return {
        get: function(){
            return $http.get("/randomCriticNy");
        }
    }
});

app.factory("top5random", function($http){
    return {
        get: function(){
            return $http.get("/random");
        }
    }
});

app.factory("top5randomReviewers", function($http){
    return {
        get: function(){
            return $http.get("/reviewers");
        }
    }
});