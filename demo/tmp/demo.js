
var app = angular.module("JohnnyFiveDemo", []);
window.app = app;

function Component(type, pin) {
	
	this.type = type ? type : Component.prototype.types[0];

	if (pin) {
		this.pin = pin;		
	} else {
		this.pin = Component.prototype.lastPin++;		
	}
}

Component.prototype = {
	constructor: Component,
	types : [
		{name: 'Led', value: 'Led'},
		{name: 'Servo', value: 'Servo'},
		{name: 'Button', value: 'Button'},
	],

	type : null,
	pin : 0,
	lastPin : 13,


	isLed : function() {	return this.type.value == "Led"; 		},
	isServo : function() {	return this.type == "Servo"; 	},
	isButton : function() {	return this.type == "Button";	},
};

app.controller("DemoCtrl", function($scope) {
	window.$scope = $scope;

	$scope.data = {
		componentTypes: Component.prototype.types
	}

	$scope.isConnected = true;
	$scope.newComponent = new Component($scope.data.componentTypes[0]);
	$scope.components = [];


	$scope.addComponent = function() {
		$scope.components.push($scope.newComponent);
		$scope.newComponent = new Component($scope.data.componentTypes[0]);
	};

	$scope.toggle = function(component) {
		console.log("TOGGLE", component)
	};



});