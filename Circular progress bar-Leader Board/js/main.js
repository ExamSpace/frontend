// First Circle

  $('.first.circle').circleProgress({
  value: 0.25,
  fill: {
      gradient: ["#0266FF"]
    }
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(25 * progress) );
});

// Second Circle
$('.second.circle').circleProgress({
  value: 0.5,
  fill: {
      gradient: ["#30D2D6"]
    }
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(50 * progress) );
});

// Third Circle
$('.third.circle').circleProgress({
  value: 0.65,
  fill: {
      gradient: ["#24395B"]
    }
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(65 * progress) );
});

// Fourth Circle
$('.forth.circle').circleProgress({
  value: 0.75,
  fill: {
      gradient: ["#4988A6"]
    }
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(75 * progress) );
});

