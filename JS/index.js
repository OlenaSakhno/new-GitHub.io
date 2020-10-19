/*var message="Global";

var x = function(){
    var message= "Local";
    console.log("message x:" + message);
   
    function z () {  
        console.log("message z:" + message);
    }
    z();
    y();

}

function y () {  
    console.log("message y:" + message);
}

x();
y();


var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}

var hotel={
rooms : 40,
booked : 18,
available : function(){
    return this.rooms - this.booked;
}
};
var numb = document.getElementById('availableRooms');
numb.textContent  = hotel.available();*/


var weekFromToday = new Data(today.getTime());
console.log('weekFromToday ' + weekFromToday);