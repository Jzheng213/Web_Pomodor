var app = angular.module('PomodoroTimer', []);
app.controller('MainCtrl', function($scope, $interval) {
    $scope.breakLength = secondsToHms(300);
    $scope.sessionLength = secondsToHms(1500);
   var totalTime = 0;
    var seconds = 0;
    var timeOn = false;

	$scope.timeChange = function(time, sessionType){
    	seconds = HmstoSeconds($scope[sessionType]);
    	seconds += time;
    	$scope[sessionType] = secondsToHms(seconds);
    	if(seconds < 60){
    		seconds = 60;
    		$scope[sessionType] = secondsToHms(seconds);}
            $scope.newTimer();
    };

    $scope.newTimer = function(){
        $scope.sessionTime = $scope.sessionLength;
        seconds = HmstoSeconds($scope.sessionLength);
        totalTime = seconds;       
        $scope.sessionName = 'SESSION';
        $scope.fillHeight = '0%';
        $scope.fillColor = '#111';
        $interval.cancel(timeOn);
        timeOn = false;
    };

    //Convert seconds to String format
    function secondsToHms(sec) {
        sec = Number(sec);
        var h = Math.floor(sec / 3600);
        var m = Math.floor(sec % 3600 / 60);
        var s = Math.floor(sec % 3600 % 60);
        return (h > 0 ? h + ':' + (m < 10 ? '0' : '') : '') + m + ':' + (s < 10 ? '0' : '') + s;
    }

    //Convert String format to seconds
    function HmstoSeconds(hms){
    	var a = hms.split(':');
    	return (a[0]) * 60^2 + (a[1]) * 60 + (a[2]);
    }

    $scope.triggerTimer = function(){
    	
    	if(!timeOn){
    	updateTimer();
    	timeOn = $interval(updateTimer,1000);
    	}else{
    		$interval.cancel(timeOn); 
    		timeOn = false;
    	}
    };

    function updateTimer(){
    	seconds -= 1;
    	if(seconds < 0){
    		console.log("timerDone Start Break");
    		if($scope.sessionName === 'SESSION'){
    			$scope.sessionName = 'BREAK';
    			seconds = HmstoSeconds($scope.breakLength);
    			totalTime = seconds;
    			$scope.fillColor = 'RED';
    	}else{	
    		$scope.sessionName = 'SESSION';
    		seconds = HmstoSeconds($scope.sessionLength);
    		totalTime = seconds;
    			$scope.fillColor = '#111';
    	}
    	}else{
    		//console.log((Math.floor(seconds/totalTime * 100) / 100) + '%');

    		$scope.fillHeight = (100 - Math.floor(seconds/totalTime * 100)) + '%';
    		$scope.sessionTime = secondsToHms(seconds);
    	}
    }	
});	