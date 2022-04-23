const sharebtn = document.querySelector('html');
const shareBox = document.querySelector('.açılsusamaçıl');

sharebtn.addEventListener('click', shareArea);

function shareArea(e){

    if (e.target.parentElement.classList.contains('share')) {

        shareBox.style.display = 'flex';
        
    } else {

        shareBox.style.display = 'none';
        
    }
}