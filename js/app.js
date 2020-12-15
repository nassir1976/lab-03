'use strict';

$.ajax('../data/page-1.json')
  .then(data => {
    data.forEach(animal => {
      let template = $('#template').html();
      let hornObject = new Animal(animal);
      let page1 = Mustache.render(template, {
        keyword: hornObject.keyWord,
        title: hornObject.title,
        image_url: hornObject.image_url,
        description: hornObject.description,
        class: "page1",
        horns: hornObject.horns,


      });
      $('#images').append(page1);


    });
  });

$.ajax('../data/page-2.json')
  .then(data => {
    data.forEach(animal => {
      let template = $('#template').html();
      let hornObject = new Animal(animal);
      let page2 = Mustache.render(template, {
        keyword: hornObject.keyWord,
        title: hornObject.title,
        image_url: hornObject.image_url,
        description: hornObject.description,
        class: "page2",
        horns: hornObject.horns,


      });
      $('#images').append(page2);
      $('.page2').hide();

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

    return parseInt(hornA) - parseInt(hornB);


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

function Animal(object) {


  this.image_url = object.image_url;
  this.title = object.title;
  this.description = object.description;
  this.keyWord = object.keyword;
  this.horns = object.horns;
};


$("#filter").on('change', function () {
  let value = this.value;
  let $allImagesValue = $('div');
  for (let i = 0; i < $allImagesValue.length; i++) {
    if ($allImagesValue[i].attributes.keyword.value !== value) {
      $($allImagesValue[i]).hide();
    } else if ($allImagesValue[i].attributes.keyword.value === value) {
      $($allImagesValue[i]).show();
    }
  }
});




























