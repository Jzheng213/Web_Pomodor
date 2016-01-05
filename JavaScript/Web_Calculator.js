$(document).ready(function(){
    'use strict';
    console.log('JS Started');
    var input = "";
    var runningNumber = 0;
    var newEntry = false;
    var currOperation = "";

    
    //numbers
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#decimal').click(function(){
        if(newEntry){$('#answer').val('');}

        input = $(this).text();
        $('#answer').val($('#answer').val() + input);
        newEntry = false;
    });

    //clears
    $('#AC').click(function() {
       console.log('function clear excecuted');
       $('#answer').val('');
       runningNumber = 0;
    });

    $('#CE').click(function() {
        console.log('function clear excecuted');
       $('#answer').val(runningNumber);
       newEntry = true;
    });

    //operations

    $('#plus').click(function() {
        console.log('function plus excecuted');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "+";
        newEntry = true;
    });

    $('#subtract').click(function() {
        console.log('function subtract called');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "-";
        newEntry = true;
    });

    $('#multiply').click(function() {
        console.log('function multiplication called');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "x";
        newEntry = true;
    });

    $('#divide').click(function() {
        console.log('function divide called');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "/";
        newEntry = true;
    });

    $('#percent').click(function() {
        console.log('function percent called');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "%";
        $('#equal').trigger('click');
        newEntry = true;
    });

    //equal
    $('#equal').click(function() {
        if(currOperation === "="){runningNumber = $('#answer').val();}
        console.log('function equal called');
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        $('#answer').val(runningNumber);
        currOperation = "=";
        newEntry = true;
    });

});

function evaluate(currOperation, runningNumber, newNumber){
    switch(currOperation){
        case "+":
        runningNumber += newNumber;
        return runningNumber;
        case "x":
        runningNumber *= newNumber;
        return runningNumber;
        case "-":
        runningNumber -= newNumber;
        return runningNumber;
        case "/":
        runningNumber /= newNumber;
        return runningNumber;
        case "%":
        runningNumber /= 100;
        return runningNumber;

        default:
        return runningNumber;
    }
}
