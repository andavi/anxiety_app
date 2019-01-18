'use strict';

$(() => {
  function eventHelper(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  // a list of elements
  const components = [
    '#mainGraph',
    '#profile',
    '#new',
  ];

  function showPage(page) {
    components.forEach(element => {
      if (element === page) $(`${element}`).show();
      else $(`${element}`).hide();
    });
  }

  // show form
  $('#profile button').on('click', e => {
    eventHelper(e);
    showPage('#new');
  });

  // show profile
  $('a.cancel').on('click', e => {
    eventHelper(e);
    showPage('#profile');
  });

  // show main chart
  $('#smallGraphContainer').on('click', e => {
    eventHelper(e);
    showPage('#mainGraph');
  });

  // render profile page on first visit
  showPage('#profile');

});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.630, lng: -122.350 },
    zoom: 14
  });
}


  // initMap();
