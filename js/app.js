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
        class: "page1",
        horns: animal.horns,
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
        class: "page2",
        horns: animal.horns,


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
//  sort by title
function sortByTitle(images) {
  return images.sort(function (a, b) {
    let nameA = $(a).html();
    let nameB = $(b).html();

    console.log(nameA);
    console.log(nameB);

    if (nameA < nameB) {
      return -1;

    } if (nameA > nameB) {
      return 1;
    }
    return 0;

  });
}
// sort by horns
function sortByHorns(horns) {
  return horns.sort(function (a, b) {
    let hornA = $(a).attr("horns");
    let hornB = $(b).attr("horns");

    console.log(hornA);
    console.log(hornB);

    if (hornA < hornB) {
      return -1;

    } if (hornA > hornB) {
      return 1;
    }
    return 0;

  });
}
// Event by
$('#keyword-filter').on('change', function () {
  let value = this.value;
  console.log(value);

  if (this.value === 'title') {
    let $images = $('div');
    let $newList = sortByTitle($images);
    $('#images').html($newList);
  }
  if (this.value === 'horns') {
    let $images = $('div');
    let $newList = sortByHorns($images);
    $('#images').html($newList);
  }
});






























