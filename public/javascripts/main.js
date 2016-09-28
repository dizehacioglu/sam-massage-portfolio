$(document).ready(function(){
  console.log('jquery connected');

  $('.qa-template').on('click', function(e){
    $('.answer', this).toggle();
    $('.question', this).toggleClass('qa-selected');
  })


})
