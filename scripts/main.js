//Image Switcher
let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rimuru.jpg') {
        myImage.setAttribute('src','images/rimuru02.jpg');
    } else {
        myImage.setAttribute('src','images/rimuru.jpg');
    }
}