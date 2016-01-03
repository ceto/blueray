$(document).foundation();
$(document).ready( function() {

  new WOW({
     callback:     function(box) {
      //alert(box);
    },
  }).init();

  var circle = new Array;

  $('.fact__ill').each( function(index) {
    $(this).css('color', $(this).attr('data-color'));
    circle['index'] = new ProgressBar.Circle('#f'+index, {
      color: $('#f'+index).attr('data-color'),
      strokeWidth: 3,
      trailColor:'#fff',
      fill: '#fff',
      easing: 'easeInOut',
      duration: 1500
    });
    circle['index'].animate($('#f'+index).attr('data-meter'));
  });

});