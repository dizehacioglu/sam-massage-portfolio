$(document).ready(function(){

  $('.qa-template').on('click', function(e){
    $('.answer', this).toggle();
    $('.question', this).toggleClass('qa-selected');
  })

})
