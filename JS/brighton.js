//business logic
var pings= [];

function pingPong (number){
    for (var index = 1; index <= number; index++){
        if(index % 15 === 0){
            pings.push("pingpong");
        }
        else if(index % 5 === 0){
            pings.push("pong");
        }
        else if(index % 3 === 0){
            pings.push("ping");
        }
        else{
            pings.push(index);
        }
    }
}


//user interface logic

$(document).ready(function(){
   $("form#ping-pong").submit(function(){
      event.preventDefault();
      var number = parseInt($("input#number").val());
       
      pingPong(number);
       
      pings.forEach(function(number){
         $("#output").append('<li>' + number + "</li>"); 
      });
   }); 
});

