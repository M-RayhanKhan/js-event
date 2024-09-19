function makeRed() {
    document.body.style.backgroundColor = 'red'
}

const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

// 

const makePurpleBtn = document.getElementById('make-purple');
makePurpleBtn.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}

// 
const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink'
}

// 

const makeGreenBtn = document.getElementById('make-green');
makeGreenBtn.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})