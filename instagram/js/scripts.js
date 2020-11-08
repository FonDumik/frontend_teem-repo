function openView() {
    document.getElementById('modal_container').style = 'display: flex';
    document.getElementById('body').style = 'overflow-y: hidden';

    $('.gallery_img').click(function() {
        var imgAddr = $(this).attr("src");
        $('#gallery_item_view').attr({src: imgAddr});
      });
}

function closeModal() {
    document.getElementById('modal_container').style = 'display: none';
    document.getElementById('body').style = 'overflow-y: auto';
}




