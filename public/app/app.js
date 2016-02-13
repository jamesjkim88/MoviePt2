/*
 Things to get done:
 overall, better angular code por favor.
 angular service for each api calls? or think of something better.
 UI design
 */

var app = angular.module("app", []);

app.controller("mainCtrl", function(top5, $scope){
    $scope.title = "MovieRev'U"
});

app.controller("top5Ctrl", function(top5, $scope){
    top5.get().then(function(config){
        $scope.results = config.data.results;
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

app.controller("top5classics", function(top5classics, $scope){
    top5classics.get().then(function(config){
        $scope.results = config.data.results;
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5random", function(top5random, $scope){
    top5random.get().then(function(config){
        $scope.results = config.data.results;
    }, function(config){
        console.log("error: ", config);
    });
});

app.controller("top5randomreviewers", function(top5randomreviewers, $scope){
    top5randomreviewers.get().then(function(config){
        $scope.results = config.data.results;
    }, function(config){
        console.log("error: ", config);
    });
});

/*****************
 Angular Factories
 ****************/

app.factory("top5", function($http){
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

app.factory("top5classics", function($http){
    return {
        get: function(){
            return $http.get("/classics");
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

app.factory("top5randomreviewers", function($http){
    return {
        get: function(){
            return $http.get("/reviewers");
        }
    }
});