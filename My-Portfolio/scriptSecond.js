let changeSub = document.getElementById('change');
let blueBtn = document.getElementById('blue');
let redBtn = document.getElementById('red');
let violetBtn = document.getElementById('violet');
let resetBtn = document.getElementById('black');


const turnBlue = element => {
    changeSub.style.color = 'blue';
};

const turnRed = element => {
    changeSub.style.color = 'red';
};

const turnViolet = element => {
    changeSub.style.color = 'violet';
};

const resetting = element => {
    changeSub.style.color = '';
};


blueBtn.onclick = turnBlue;
redBtn.onclick = turnRed;
violetBtn.onclick = turnViolet;
resetBtn.onclick = resetting;
