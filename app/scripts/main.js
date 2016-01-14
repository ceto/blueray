'use strict';

$(document).foundation();
$(document).ready( function() {
  new WOW().init();

  var circle = [];
  $('.fact__ill').each( function(index) {
    $(this).css('color', $(this).attr('data-color'));
    circle[index] = new ProgressBar.Circle('#f' + index, {
      color: $('#f' + index).attr('data-color'),
      strokeWidth: 3,
      trailColor: '#fff',
      fill: '#fff',
      easing: 'easeInOut',
      duration: 2000
    });
    //circle[index].animate($('#f' + index).attr('data-meter'));
  });

  var progrwow = new WOW(
    {
      boxClass:     'progrwow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       300,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        $('.fact__ill').each( function(index) {
          circle[index].animate($('#f' + index).attr('data-meter'));
        });
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  progrwow.init();






});
