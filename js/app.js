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

const sortByHorns = (a, b) => {
  if (a.horns < b.horns) {
    return -1;

  } else if (a.horns > b.horns) {
    return 1;
  } else {
    return 0;
  }
};
const sortByTitle = (a, b) => {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;

  } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
};


$('.option').on('click', (e) => {
  let chooseSort = e.target.textContent;
  if (chooseSort === 'Sort by Horns') {
   Images.sort(Horns);
  }
  if (chooseSort === 'Sort by Title') {
    Images.sort(Title);
  }
  $('section').empty();
  // Images.forEach((image) => image.renderWithMustache());
  // $('.All').hide();
  // $(`.${choice}`).show();
  // if (pageShown === 1) {
  //   $('#page2').hide();

  // } else {
  //   $('#page1').hide();
  // }
});




// function sortByTitle(images) {
//   images.sort(function (a, b) {
//     let nameA = a.toUpperCase();
//     let nameB = b.toUpperCase();
//     if (nameA < nameB) {
//       return -1;

//     } if (nameA > nameB) {
//       return 1;
//     }
//     return 0;

//   });
// }
// // $('#keyword-filter').on('change', (e) => {
// //  let images = $('img');


// // });




























