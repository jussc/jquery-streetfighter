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

    playHadouken();
    //play hadouken sound

    $('#ryu-ready').hide();
    $('#ryu-throwing').show();
    $('.hadouken').finish().show().animate({'left': '1000px'}, 500, function() {
      $(this).hide();
      $(this).css('left', '520px');
    });
    // show hadouken image and animate to right
  })

  .mouseup(function() {
    console.log('mouseup');

    $('#ryu-throwing').hide();
    $('#ryu-ready').show();
    // ryu goes back to ready position
  })

  function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }

  $('html').keydown(function(e) {
    if (e.keyCode == 88) {
      $('.ryu').hide();
      $('.ryu-test').show();
    }
  })

  $('html').keyup(function(e) {
    $('.ryu-test').hide();
    $('.ryu').show();
  })

});