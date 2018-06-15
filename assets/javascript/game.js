$( document ).ready(function(){

//VARS

let Random = Math.floor(Math.random()*101+19)

$('#RNS').text(Random);

//FOOD TAB RANDOM VALUE GEN
let num1= Math.floor(Math.random()*11+1)
let num2= Math.floor(Math.random()*11+1)
let num3= Math.floor(Math.random()*11+1)
let num4= Math.floor(Math.random()*11+1)


//SCORE VALUE VARS
          // Initial Score Value
let userTotal = 0;
let wins = 0;
let losses = 0;

            //Running Score Value
 $('#numberWins').text(wins);
 $('#numberLosses').text(losses);
 
 
 //Game Reset

 function reset(){
   Random = Math.floor(Math.random()*101+19);
   console.log(Random)
   $('#RNS').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal = 0;
      $('#PB').text(userTotal);
 }
 
 // func that adds wins userTotal
 function wintotal (){
    alert ("You Won, CONGRATS!");
    wins++;
    $('#numberWins').text(wins);
    reset();
 }

 //Func that calc total losses
 
 function losstotal(){
   alert ("You Lost...toooooo bad. Hopefully next time");
    losses++;
    $('#numberLosses').text(losses);
    reset();
 }

 // Click events for food

$('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal=" + userTotal); 
    $('#PB').text(userTotal);
      if (userTotal == Random){
        wintotal();
      }
      else if ( userTotal > Random ){
        losstotal();
      }

      })

      $('#two').on ('click', function(){
        userTotal = userTotal + num2;
        console.log("New userTotal=" + userTotal); 
        $('#PB').text(userTotal);
          if (userTotal == Random){
            wintotal();
          }
          else if ( userTotal > Random ){
            losstotal();
          }
    
          })   
          
   $('#three').on ('click', function(){
            userTotal = userTotal + num3;
            console.log("New userTotal=" + userTotal); 
            $('#PB').text(userTotal);
              if (userTotal == Random){
                wintotal();
              }
              else if ( userTotal > Random ){
                losstotal();
              }
        
              })  
              
              $('#four').on ('click', function(){
                userTotal = userTotal + num4;
                console.log("New userTotal=" + userTotal); 
                $('#PB').text(userTotal);
                  if (userTotal == Random){
                    wintotal();
                  }
                  else if ( userTotal > Random ){
                    losstotal();
                  }
                });
            
              });          

 
  


