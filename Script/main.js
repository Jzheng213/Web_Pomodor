var app = angular.module('PomodoroTimer', []);
app.controller('MainCtrl', function($scope) {
    $scope.breakLength = secondsToHms(300);
    $scope.sessionLength = secondsToHms(1500);
    $scope.fillHeight = '30%';
    $scope.sessionName = 'WORK MUSH MUSH';
    $scope.sessionTime = $scope.sessionLength;
    
	$scope.timeChange = function(time, sessionName){
    	var secondsSession = HmstoSeconds($scope[sessionName]);
    	secondsSession += time;
    	$scope[sessionName] = secondsToHms(secondsSession);
    	if(secondsSession < 60){
    		secondsSession = 60;
    		$scope[sessionName] = secondsToHms(secondsSession);}

    	if(sessionName === 'sessionLength'){
    		$scope.sessionTime = $scope[sessionName];
    	}
    };

    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
        return (h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    function HmstoSeconds(hms){
    	var a = hms.split(':');
    	return seconds = (+a[0]) * 60^2 + (a[1]) * 60 + (+a[2]);
    }

    $scope.triggerTimer = function(){
    	updateTimer();
    	runTimer = $interval(updateTimer,1000);
    };
    function updateTimer(){
    	seconds -= 1;
    	if(seconds < 0){
    		console.write("timerDone");
    	}

    }	
    

});	