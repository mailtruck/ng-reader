/*
Frist we need to set up our module. 
We need to do this so we can pass our resource into our controller
*/
angular.module('Counter',['ngResource']); 



/*
This is our controller.
We automatically get a new child scope extending rootScope
*/
function CounterCtrl($scope, $resource) {

/*
Configure our resource: 
We are getting articles from an rss powered yahoo pipe returning JSONP 
*/
$scope.counter = $resource('http://pipes.yahoo.com/pipes/pipe.run', {_id:'258813c41e7498b33dd6b016e2afdca9',_render:'json',_callback:'JSON_CALLBACK'}, {'get':{method:'JSONP', params:{isArray:true}} });

/*
Our data will be returned to counterResult. 
We immediately get an empty promise object that is automatically updated when the async call returns.
*/
$scope.counterResult = $scope.counter.get();
}
	


jQuery(document).ready(function ($) {
  
  
  
  console.log($('.category'));
	
	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */
	$('input, textarea').placeholder();

});