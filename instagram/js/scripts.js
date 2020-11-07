function openView() {
    document.getElementById('modal_container').style = 'display: flex';
    document.getElementById('body').style = 'overflow-y: hidden';
}
function closeModal() {
    document.getElementById('modal_container').style = 'display: none';
    document.getElementById('body').style = 'overflow-y: auto';
}