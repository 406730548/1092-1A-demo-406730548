function L1(index) {
    const p = document.querySelector('#main');
    console.log('p', p);
    switch (index) {
        case 1:
        p.innerHTML = '<iframe src="./p1_48/tictactoe_48.html" style="width:100%; height:700px" />';
        break;
        case 2:
        p.innerHTML =
          '<iframe src="./p2_48/resume_48.html" style="width:100%; height:700px" />';
        break;
        case 3:
        p.innerHTML = `<iframe src="./p3_48/divjsDemo_48.html" style="width:100%; height:700px" />`;
        break;
    }
  }