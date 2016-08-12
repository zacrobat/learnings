$(document).ready(function() {
  //Most DRY
  $('#tab-section div:first-child').siblings().hide();
  $('.tabs a').on('click', function() {
    $('ul.tabs li a').removeClass('active-tab');
    var completeName = '[name="' + $(this).attr('for') + '"]';
    $(completeName).show().siblings().hide();
  });
  //more DRY
  $('.tabs a').on('click', function() {
    $('ul.tabs li a').removeClass('active-tab');
    var completeName = '[name="' + $(this).attr('for') + '"]';
    $(completeName).removeClass('invisible').addClass('visible').siblings().removeClass('visible').addClass('invisible');
  });
  //getting DRY
  $('.tabs a').on('click', function() {
    $('ul.tabs li a').removeClass('active-tab');
    var name = $(this).attr('for');
    console.log(name);
    var completeName = '[name="' + name + '"]';
    console.log(completeName);
    $(completeName).removeClass('invisible').addClass('visible').siblings().removeClass('visible').addClass('invisible');
  });
  // four tabs made with jQuery addClass
  $('#tab01').click(function() {
    $('#tabcontent01').siblings().addClass('invisible');
    $('#tabcontent01').removeClass('invisible').addClass('visible');
  });
  $('#tab02').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('#tabcontent02').siblings().addClass('invisible');
    $('#tabcontent02').removeClass('invisible').addClass('visible');
  });
  $('#tab03').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('.tab').siblings().addClass('inactive-tab');
    $('#tabcontent03').siblings().addClass('invisible');
    $('#tabcontent03').removeClass('invisible').addClass('visible');
  });
  $('#tab04').click(function() {
    $('ul.tabs li a').removeClass('active-tab');
    $('.tab').siblings().addClass('inactive-tab');
    $('#tabcontent04').siblings().addClass('invisible');
    $('#tabcontent04').removeClass('invisible').addClass('visible');
  });

  //four tabs, not superdry, made with jQuery .show and .hide
  $('#tab01').click(function() {
    $('#tabcontent01').show();
    $('#tabcontent02').hide();
    $('#tabcontent03').hide();
    $('#tabcontent04').hide();
  });
  $('#tab02').click(function() {
    $('#tabcontent01').hide();
    $('#tabcontent02').show();
    $('#tabcontent03').hide();
    $('#tabcontent04').hide();
  });
  $('#tab03').click(function() {
    $('#tabcontent01').hide();
    $('#tabcontent02').hide();
    $('#tabcontent03').show();
    $('#tabcontent04').hide();
  });
  $('#tab04').click(function() {
    $('#tabcontent01').hide();
    $('#tabcontent02').hide();
    $('#tabcontent03').hide();
    $('#tabcontent04').show();
  });
});
