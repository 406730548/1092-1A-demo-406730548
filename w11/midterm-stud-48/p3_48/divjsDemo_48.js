function changeImage(index) {
  const player = document.querySelector('#player');
  console.log('player', player);
  switch (index) {
    case 1:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/RechrtUxfQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 2:
      player.innerHTML =
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      break;
    case 3:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
}


function changeColor(index) {
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');

  switch (index) {
    case 1:
      p1.style.backgroundColor = 'yellow';
      break;
    case 2:
      p2.style.backgroundColor = 'azure';
      break;
    case 3:
      p3.style.backgroundColor = 'black';
      break;
  }
}

function showtku60(index) {
  const p = document.querySelector('#menu2')
  switch(index) {
    case 1:
      p.innerHTML = `
      <ul>
        <li onclick="changeImage(1)">
          <a href="#">淡江大戲 1</a>
        </li>
        <li onclick="changeImage(2)">
          <a href="#">淡江大戲 2</a>
        </li>
        <li onclick="changeImage(3)">
          <a href="#">淡江大戲 3</a>
        </li>
        <li onclick="changeImage(4)">
          <a href="#">淡江大戲 4</a>
        </li>
        <li onclick="changeImage(5)">
          <a href="#">淡江大戲 5</a>
        </li>
      </ul> `;
      break;
    case 2:
      p.innerHTML ='';
      break;
    case 3:
      p.innerHTML ='';
      break;

  }
}




function resetDiv() {
  const p1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  const p3 = document.querySelector('#menu2');
  p1.classList = '';
  p2.classList = '';
  p3.classList = '';
  p1.style.width = '20%';
  p2.style.width = '60%';
  p3.style.width = '20%';
}

function hideMenu1() {
  const P1 = document.querySelector('#menu1');
  const p2 = document.querySelector('#section');
  resetDiv();
  P1.classList = 'invisible';
  p2.style.width = '80%';
  
}

function hideMenu2() {
  const P1 = document.querySelector('#menu2');
  const p2 = document.querySelector('#section');
  resetDiv();
  P1.classList ='invisible';
  p2.style.width = '80%';
}