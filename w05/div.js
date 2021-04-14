function changeVideo(index) {
    const play = document.querySelector('#play');
    console.log('play',play);
    switch(index) {
        case 1:
            play.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 2:
            play.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 3:
            play.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 4:
            play.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
        case 5:
            play.innerHTML ='<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        break;
    }
}

function changeColor(index) {
    const p =  document.querySelector('#section')
    switch(index) {
        case 1:
            p.style.backgroundColor = 'orange';
        break;
        case 2:
            p.style.backgroundColor = 'yellow';
        break;
        case 3:
            p.style.backgroundColor = 'brown';
        break;
    }
}

function changePicture(index) {
    const p = document.querySelector('#play')
    switch(index) {
        case 1:
            play.innerHTML ='<img src="./image/img1.JPG">'
        break;
        case 2:
            play.innerHTML ='<img src="./image/img2.JPG">'
        break;
        case 3:
            play.innerHTML ='<img src="./image/img3.JPG">'
        break;
        case 4:
            play.innerHTML ='<img src="./image/img4.JPG">'
        break;
        case 5:
            play.innerHTML ='<img src="./image/img5.JPG">'
        break;
    }
}