$(document).ready(function(){
  
  var firstEquationValue = 0,
      secondEquationValue = 0,
      answer = 0,
      counterRightAnswer = 0,
      counterWrongAnswer = 0;    
    
  $('input[type=checkbox]').click(equationChecking);
  
  $('input[type=checkbox]').change(function(){
    $('input[name=' + $(this).attr('name')+']').removeAttr('checked');
    $(this).prop('checked',true);
  });
  
  function equationChecking(){
    firstEquationValue =  Math.floor(10*Math.random());
    secondEquationValue =  Math.floor(10*Math.random());
    
    var math = {
      'sum' : [' + ', (firstEquationValue+secondEquationValue)],
      'substraction' : [' - ', (firstEquationValue-secondEquationValue)],
      'multiplication' : [' * ', (firstEquationValue*secondEquationValue)],
      'division' : [' / ', Math.ceil(firstEquationValue/secondEquationValue)]
    };
    
    var checkedInput = $('input:checked');
    var checkedInputId = checkedInput.attr('id');
         
    console.log(checkedInputId);  
    
    if (checkedInput.length > 0) {     
      if(firstEquationValue===0 || secondEquationValue===0 && $('#division').is(':checked')){
        equationChecking();
      }else {
        answer=math[checkedInputId][1];
      }
      generateEquation(math[checkedInputId][0]);
    }else{
      $('#equation').empty(); 
    }
    
  }
  
  
  function generateEquation(sign){
    $('#generatedEquation').html( firstEquationValue + sign + (secondEquationValue) + (" = ") ); 
  }
  
  $('input[name=submitbutton]').click(function(){ 
    answerChecking(parseInt($('#answer').val()));
  });
  
  function answerChecking(value){
    if(answer === value)      
      $('#counterr').html(++counterRightAnswer);
    else 
      $('#counterw').html(++counterWrongAnswer);      
    equationChecking();
  }
  
});


/*  some old code
   function onCheckboxChanged(){
    var idsToSigns = {
      'sum' : ' + ',
      'substraction' : ' - ',
      'multiplication' : ' * ',
      'division' : ' / ',
    };
    
    var checkedInput = $('.page input:checked');
    if (checkedInput.length > 0) {
      var checkedInputId = checkedInput.attr('id');
      generateEquation(idsToSigns[checkedInputId]); 
    } else {
      $('#equation').empty(); 
    }
  }
    
  function generateEquation(sign){
    firstEquationValue =  Math.floor(100*Math.random());
    secondEquationValue =  Math.floor(100*Math.random());
    $('#equation').html( (firstEquationValue) + sign + (secondEquationValue) + " = " );
    equationChecking(firstEquationValue,secondEquationValue);
  }
    
  function equationChecking(firstEquationValue,secondEquationValue){
    var math = {
      'sum' : (firstEquationValue+secondEquationValue),
      'substraction' : (firstEquationValue-secondEquationValue),
      'multiplication' : (firstEquationValue*secondEquationValue),
      'division' : Math.ceil(firstEquationValue/secondEquationValue)
    };
    var checkedInput = $('.page input:checked');
    if((secondEquationValue===0 && $('#division').is(':checked')) || 
            (firstEquationValue===0 && $('#division').is(':checked')) || 
            (firstEquationValue===0 && secondEquationValue===0 && $('#division').is(':checked'))){
       onCheckboxChanged();
    }else {
      var checkedInputId = checkedInput.attr('id');
      answer=math[checkedInputId];
    }
  }
  */

/*************************************used to generate new funct***********************************  
function onCheckboxChanged(){
  var idsToSigns = {
    'sum' : ' + ',
    'substraction' : ' - ',
    'multiplication' : ' * ',
    'division' : ' / ',
  };

  var checkedInput = $('.page input:checked');

  if (checkedInput.length > 0) {
    var checkedInputId = checkedInput.attr('id');
    generateEquation(idsToSigns[checkedInputId]); 
  } else {
    $('#equation').empty(); 
  }
}


function generateEquation(sign){
  firstEquationValue =  Math.floor(100*Math.random());
  secondEquationValue =  Math.floor(100*Math.random());
  $('#equation').html( (firstEquationValue) + sign + (secondEquationValue) + " = " );
  equationChecking(firstEquationValue,secondEquationValue);
}
*/
/************************************************************************************************** 
function equationChecking(firstEquationValue,secondEquationValue){
  var math = {
    'sum' : [' + ', (firstEquationValue+secondEquationValue)],
    'substraction' : [' - ', (firstEquationValue-secondEquationValue)],
    'multiplication' : [' * ', (firstEquationValue*secondEquationValue)],
    'division' : [' / ', Math.ceil(firstEquationValue/secondEquationValue)]
  };

  var checkedInput = $('.page input:checked');
  
  if (checkedInput.length > 0) {
    var checkedInputId = checkedInput.attr('id');
    console.log(checkedInputId[0]);
    console.log(checkedInputId[1]);
    generateEquation(idsToSigns[checkedInputId[0]]);
    if((secondEquationValue===0 && $('#division').is(':checked')) || 
            (firstEquationValue===0 && $('#division').is(':checked')) || 
            (firstEquationValue===0 && secondEquationValue===0 && $('#division').is(':checked'))){
       onCheckboxChanged();
    }else {
      answer=math[checkedInputId[1]];
    }
  }else{
    $('#equation').empty(); 
  }
}
*/
