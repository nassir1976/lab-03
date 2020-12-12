'use strict';
$.ajax('../data/page-1.json')
  .then(data => {
    data.forEach(animal => {
      let template = $('#template').html();
      let page1 = Mustache.render(template, {
        keyword: animal.keyword,
        title: animal.title,
        image_url: animal.image_url,
        description: animal.description,
        class: "page1"
      });
      $('#images').append(page1);


    });
  });

$.ajax('../data/page-2.json')
  .then(data => {
    data.forEach(animal => {
      let template = $('#template').html();
      let page2 = Mustache.render(template, {
        keyword: animal.keyword,
        title: animal.title,
        image_url: animal.image_url,
        description: animal.description,
        class: "page2"


      });
      $('#images').append(page2);


    });
  });

$('#page1').on('click', function () {
  let page2 = $('.page2');
  let page1 = $('.page1');
  $(page1).show();
  $(page2).hide();

});

$('#page2').on('click', function () {
  let page2 = $('.page2');
  let page1 = $('.page1');
  $(page1).hide();
  $(page2).show();

});
function sortByTitle(images) {
  images.sort(function (a, b) {
    let nameA = a.toUpperCase();
    let nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;

    } if (nameA > nameB) {
      return 1;
    }
    return 0;

  });
}
$('#keyword-filter').on('change', (e) => {
 let images = $('img');
 
  

})