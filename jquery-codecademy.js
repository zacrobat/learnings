$(document).ready(function() {
  $('div').mouseenter(function() {
    $('div').fadeTo('fast', 1);
  });
  $('div').mouseleave(function() {
    $('div').fadeTo('fast', 0.5);
  });
  $('div').click(function() {
    $('div').fadeOut('slow');
  });
  $('div').click(function() {
    $('div').fadeOut('slow');
  });
  $(document).ready(function() {
    var $target = $('li:last-child');
    $target.fadeOut('fast');
  });
  // var $div = $('div');
  $('button').click(function() {
    $('.vanish').fadeOut('slow');
  });
  $('button').click(function() {
    $('#blue').fadeOut('slow');
  });
  $('div').click(function() {
    $(this).fadeOut('slow');
  });
  $('.pull-me').click(function() {
    $('.panel').slideToggle('slow');
  });
  // var $h1 = $('<h1>Hello</h1>');
  $('body').append('<p>I\'m a paragraph!</p>');
  $('#one').after('<p>Lorem ipsum</p>');
  $('p').remove();
  //from freecodecamp:
  $("#target1").css("color", "red"); // apply css ex color: red;
  $("#target1").prop("disabled", true); // change property
  $("#target4").html("<em>#target4</em>"); // replace html
  $("#target4").remove(); // remove an element
  $("#target4").appendTo("#left-well"); // move elements to a new location
  $("#target2").appendTo("#right-well");
  $("#target2").clone().appendTo("#right-well"); // clone it - check out the function chaining
  $("#left-well").parent().css("background-color", "blue"); /* .parent() applies the subsequent functions to the parent alement */
  $("#left-well").children().css("color", "blue");
  $(".target:nth-child(3)").addClass("animated bounce"); //.target is the class
  //...end from freecodecamp
  // addClass
  $('selector').addClass('className');
  $('selector').removeClass('className'); /* where 'selector' is the HTML element you want and 'className' is the class name you want to add or remove. */
  $('#text').click(function() {
    $(this).addClass('highlighted');
  });
  $('#text').click(function() {
    $(this).toggleClass('highlighted');
  });
  $('div').height("200px").width("200px").css("border-radius", "10px");
  $('div').html("I love jQuery!");
  $('input:checkbox:checked').val();
  /* This is the most common scenario, where "thing to touch" is the HTML element you'll click on, hover over, or otherwise interact with, and "thing to affect" is the HTML element that fades away, changes size, or undergoes some other transformation. */
  $('thingToTouch').event(function() {
    $('thingToAffect').effect();
  });
  /* Sometimes if you want an effect to occur right away, without an event like .click() or .hover(), you'll skip the second line in the above: */
  $('thingToAffect').effect();
  //more jQuery:
  $('div').click(function() {
    $(this).fadeOut('fast');
  });
  $('div').hover(function() {
    $(this).addClass('red');
  });
  $('div').dblclick(function() {
    $(this).fadeOut('fast');
  });
  $('div').hover(
    function() {
      $(this).addClass('active');
    },
    function() {
      $(this).removeClass('active');
    }
  );
  $('div').focus(
    function() {
      $('input').css('outline-style', 'solid'); //firefox
      $('input').css('outline-color', '#FF0000');
    });
  //animate:
  $('div').animate({
    left: '+=10px'
  }, 500);
  $(document).keydown(function() {
    $('div').animate({
      left: '+=10px'
    }, 500);
  });
  $(document).keydown(function(key) {
    switch (parseInt(key.which, 10)) {
      // Left arrow key pressed
      case 37:
        $('img').animate({
          left: "-=10px"
        }, 'fast');
        break;
        // Up Arrow Pressed
      case 38:
        // Put our code here
        $('img').animate({
          top: "-=10px"
        }, 'fast');
        break;
        // Right Arrow Pressed
      case 39:
        // Put our code here
        $('img').animate({
          left: "+=10px"
        }, 'fast');
        break;
        // Down Arrow Pressed
      case 40:
        // Put our code here
        $('img').animate({
          top: "+=10px"
        }, 'fast');
        break;
    }
  });
  //jQuery UI:
  $('div').click(function() {
    $(this).effect('explode');
  });
  $('div').click(function() {
    $(this).effect('bounce', {
      times: 3
    }, 500);
  });
  $('div').click(function() {
    $(this).effect('slide');
  });
  $("#menu").accordion({
    collapsible: true,
    active: false
  });
  $('#car').draggable();
  $('ol').selectable();
  $('ol').sortable();
});
