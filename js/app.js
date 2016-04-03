$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    /*alert('mouse entered .ryu div');*/

    $('#ryu-still').hide();
    $('#ryu-ready').show();
  })

  .mouseleave(function() {
    // alert('mouse left');

    $('#ryu-ready').hide();
    $('#ryu-still').show();
  })

  .mousedown(function() {
    console.log('mousedown');
    //play hadouken sound

    $('#ryu-ready').hide();
    $('#ryu-throwing').show();
    $('.hadouken').show();
    // show hadouken image and animate to right
  })

  .mouseup(function() {
    console.log('mouseup');

    $('#ryu-throwing').hide();
    $('#ryu-ready').show();
    // ryu goes back to ready position
  })
});