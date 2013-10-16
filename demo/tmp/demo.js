
var app = angular.module("JohnnyFiveDemo", []);
window.app = app;

app.controller("DemoCtrl", function($scope) {
	window.$scope = $scope;

	$scope.data = {
		componentTypes: [
			{name: 'Led', value: 'Led'},
			{name: 'Servo', value: 'Servo'},
			{name: 'Button', value: 'Button'},
		]
	}

	$scope.isConnected = true;
	$scope.newComponent = {
		type : $scope.data.componentTypes[0],
		pin : 13
	};
	$scope.components = [];


	$scope.addComponent = function() {
		$scope.components.push($scope.newComponent);
		$scope.newComponent = {
			type : $scope.newComponent.type,
			pin : $scope.newComponent.pin + 1
		};
	};

	$scope.toggle = function(component) {
		console.log("TOGGLE", component)
	};



});