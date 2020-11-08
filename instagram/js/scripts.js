$('.gallery_img').click(function() {
    var imgAddr = $(this).attr("src");
    $('#gallery_item_view').attr({src: imgAddr});
    document.getElementById('modal_container').style = 'display: flex';
    document.getElementById('body').style = 'overflow-y: hidden';
  });

$('#modal_container').click(function() {
    document.getElementById('modal_container').style = 'display: none';
    document.getElementById('body').style = 'overflow-y: auto';
  });

$(".follow").click(function() {
    $(this).text(function(i, text) {
      return text === "Follow" ? "Followed" : "Follow";
    });
});
//     if ($(this).style == 'background: #ffffff; color: #4094EF; border: 1px solid #4094EF;') {
//         $(this).style = 'background: #4094EF; color: #ffffff; border: none;';
//     } else {
//         $(this).style = 'background: #ffffff; color: #4094EF; border: 1px solid #4094EF;';
//     }

//   

