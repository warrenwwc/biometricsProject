angular.module('app.controllers', [])
  
.controller('staffStatusCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var database = firebase.database();
	database.ref("/staffs/").on('value', function(data) {
	   $scope.staffs = data.val();
		if(!$scope.$$phase) {
		  $scope.$digest();
		}
	});


}])
   
.controller('staffListCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $rootScope) {
	var database = firebase.database();
	database.ref("/staffs/").on('value', function(data) {
	   $scope.staffList = data.val();
		if(!$scope.$$phase) {
		  $scope.$digest();
		}
	});

	$scope.ChangeMode = function(mode, key, value) {
		$rootScope.mode = mode;
		if (mode == 'manage') {
			$rootScope.sid = key;
			$rootScope.sname = value.sname;
			$rootScope.sdept = value.sdept;
			$rootScope.salary = value.salary;
		}
		else {
			$rootScope.sid = "";
			$rootScope.sname = "";
			$rootScope.sdept = "";
			$rootScope.salary = "";
		}

	}
	//$state.transitionTo('staff');

}])
   
.controller('recordCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	var database = firebase.database();
	database.ref("/staffs/").on('value', function(data) {
	   $scope.staffs = data.val();
		if(!$scope.$$phase) {
		  $scope.$digest();
		}
	});

}])
   
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('staffCtrl', ['$scope', '$stateParams', '$state', '$rootScope', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $rootScope) {
	if ($rootScope.mode == undefined) {
		alert("Mode Error");
		$state.transitionTo('menu.staffList');
	}

	var database = firebase.database();
	database.ref("/staffs/").on('value', function(data) {
	   $scope.sList = Object.keys(data.val());
	});



	$scope.UpdateStaff = function(sid, sname, sdept, salary) {
		if ($rootScope.mode == 'create') {
			if ($scope.sList.includes(sid)) {
				alert("sid Existed");
			}
			else {
				firebase.database().ref('staffs/' + sid).set({
				  "sname": sname,
				  "sdept": sdept,
				  "salary": salary,
				  "isWorking": false,
				  "whours": 0,
				  "last": Date()
				});
			}
		}
		else if ($rootScope.mode == 'manage') {
			firebase.database().ref('staffs/' + sid).update({
			  "sname": sname,
			  "sdept": sdept,
			  "salary" : salary
			});
		}
		else {
			alert("Mode Error");
			$state.transitionTo('menu.staffList');
		}
		$state.transitionTo('menu.staffStatus');

	}

}])
 