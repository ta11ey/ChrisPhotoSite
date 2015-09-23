angular.module('myApp')
.directive('hover', function(){
	return{
		restrict:'A',
		scope: {
			toggle:'@',
			toggleOff:'@'
		},
		link: function (scope, elem, attrs){
			elem.on('mouseover', function(){
				elem.addClass(scope.toggle)
			});
			elem.on('mouseout', function(){
				elem.removeClass(scope.toggle)
			})
		}
	}
})

