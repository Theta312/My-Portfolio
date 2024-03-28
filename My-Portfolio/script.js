let openBtn = document.getElementsByClassName('about-btn')[0];
let closeBtn = document.getElementsByClassName('about-btn')[1]
let aboutMe = document.getElementsByClassName('about')[1];


closeBtn.style.display = 'none'


const opening = element => {
    aboutMe.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
};

const removeIt = element => {
    element.target.style.display = 'none';
    aboutMe.style.display = 'none';
    openBtn.style.display = 'flex';
};




openBtn.onclick = opening;
closeBtn.onclick = removeIt;
