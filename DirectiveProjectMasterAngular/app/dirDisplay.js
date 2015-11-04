angular.module('directivePractice')

// 1 //
/*Create your directive. You'll use the directive method on your 
angular module. It takes two arguments, the name string and the 
callback function, which will return the object that represents 
your directive. 
When naming your directive give it a name with two words; 
dirDisplay would be nice, but anything works. Just remember it's 
best practice to give a directive a camel case name so that it's 
clear in your html what it is.*/

.directive('dirDisplay', function () {
	return {
		
		templateUrl: 'app/dirTmpl.html'
	}
})