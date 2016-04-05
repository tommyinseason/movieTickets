// Business interface logic//
function Ticket (age, time, release) {
  this.ageTotal = age;
  this.timeShow = time;
  this.movieRelease = release;
}

  Ticket.prototype.price = function() {

    var price = 0;
debugger;
   if (this.ageTotal <= 12 || this.ageTotal >= 65) {
    price = 5;
  } else if (this.ageTotal > 12 && this.ageTotal < 65) {
     price = 6;
   }

   if (this.timeShow === 1) {
     price += 0;
   }
   if (this.timeShow === 2) {
     price += 1;
   }
   if (this.timeShow === 3) {
     price += 2
   }
   if (this.movieRelease === 1) {
     price += 1
   }
   if (this.movieRelease === 2) {
     price += 2
   }
   return price;
 }

    // return price;



// User Interface Locic//
$(function(){
  $("#movies").submit(function(event){
    event.preventDefault();
    var inputName =$("input#name").val();
    var inputAge = parseInt($("input#age").val());
    var inputTime = parseInt($("#showTime option:selected").val());
    var inputMoviesOut = parseInt($("#moviesOut option:selected").val());
    var newTicket = new Ticket(inputAge, inputTime, inputMoviesOut);

    var result = newTicket.price();

    $("#showTickets").submit(function() {
      $("#showTickets").show();
      $(".showName").text(inputName);
      $(".showPrice").text(result);
    });


  });
});
