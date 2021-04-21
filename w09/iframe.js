function goPage(index) {
    const p =  document.querySelector('#play')
    console.log('p',p)
    switch(index) {
        case 1:
            p.innerHTML = '<iframe src="./w01-pokemon/pokemon.html" width="100%" height="700px"> </iframe>';
        break;
        case 2:
            p.innerHTML = '<iframe src="./w02/imageGallery.html" width="100%" height="700px"> </iframe>';
        break;
        case 3:
            p.innerHTML = '<iframe src="./w05/div.html" width="100%" height="700px"> </iframe>';
        break;
    }
}

function toggle() {
    const p =  document.querySelector('#main')
    p.classList.toggle('invisible')
}  

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

function colorMenu() {
    const p = document.querySelector('aside ul');
    console.log('colorMenu',p);
    p.innerHTML = `
    <li onclick="changeColor(1)">
        <a href="#">Color 1</a>
    </li>
    <li onclick="changeColor(2)">
        <a href="#">Color 2</a>
    </li>
    <li onclick="changeColor(3)">
        <a href="#">Color 3</a>
    </li>
    `
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

function videoMenu() {
    const p = document.querySelector('aside ul')
    console.log('videoMenu',p)
    p.innerHTML = `
    <li onclick='changeVideo(1)'>
        <a href="#">淡江大戲1</a>
    </li>
    <li onclick='changeVideo(2)'>
        <a href="#">淡江大戲2</a>
    </li>
    <li onclick='changeVideo(3)'>
        <a href="#">淡江大戲3</a>
    </li>
    <li onclick='changeVideo(4)'>
        <a href="#">淡江大戲4</a>
    </li>
    <li onclick='changeVideo(5)'>
        <a href="#">淡江大戲5</a>
    </li>
    `
}