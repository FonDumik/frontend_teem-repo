$(document).ready(function() {
  let container = document.getElementById('modal_container');
  let body = document.getElementById('body');
  let viewBtn = $('.gallery_view');

  $('.gallery_img').click(function() {
    let imgAddr = $(this).attr("src");
    $('#gallery_item_view').attr({src: imgAddr});
    container.style = 'display: flex';
    body.style = 'overflow-y: hidden';
  });

  $('#modal_container').click(function() {
      container.style = 'display: none';
      body.style = 'overflow-y: auto';
    });

  $(".follow").click(function() {
      $(this).text(function(span, text) {
        return text == "Follow" ? "Followed" : "Follow";
      });
  });

  viewBtn.click(function() {
    $(this).toggleClass('active_view');
  });
 
});
