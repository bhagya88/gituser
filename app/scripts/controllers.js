'use strict';

/**
 * @ngdoc overview
 * @name gitUserApp
 * @description
 * # gitUserApp
 *
 * Main module of the application.
 */
var mod = angular.module('controllers', []);

mod.controller('UserController', function ($scope, dataService) {
  $scope.userInfo ={};
  $scope.userRepos =[];
  $scope.userFollowers =[];
  $scope.getUserDetails = function () {


        dataService.getUserInfo($scope.userName).success(function (response) {
          $scope.userInfo = response.data;
          console.log($scope.userInfo);
        });
        dataService.getUserRepos($scope.userName).success(function (response) {
          $scope.userRepos = response.data;
          console.log($scope.userRepos);
        });
         dataService.getUserFollowers($scope.userName).success(function (response) {
          $scope.userFollowers = response.data;
          console.log($scope.userFollowers);
        });
        
    
  };

});


/*
{
login: "bhagya88",
id: 16168886,
avatar_url: "https://avatars.githubusercontent.com/u/16168886?v=3",
gravatar_id: "",
url: "https://api.github.com/users/bhagya88",
html_url: "https://github.com/bhagya88",
followers_url: "https://api.github.com/users/bhagya88/followers",
following_url: "https://api.github.com/users/bhagya88/following{/other_user}",
gists_url: "https://api.github.com/users/bhagya88/gists{/gist_id}",
starred_url: "https://api.github.com/users/bhagya88/starred{/owner}{/repo}",
subscriptions_url: "https://api.github.com/users/bhagya88/subscriptions",
organizations_url: "https://api.github.com/users/bhagya88/orgs",
repos_url: "https://api.github.com/users/bhagya88/repos",
events_url: "https://api.github.com/users/bhagya88/events{/privacy}",
received_events_url: "https://api.github.com/users/bhagya88/received_events",
type: "User",
site_admin: false,
name: null,
company: null,
blog: null,
location: null,
email: null,
hireable: null,
bio: null,
public_repos: 6,
public_gists: 0,
followers: 0,
following: 0,
created_at: "2015-12-05T18:41:24Z",
updated_at: "2016-02-10T03:27:53Z"
}
*/