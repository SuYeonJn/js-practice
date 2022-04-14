const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg"
]


const image = images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage = `url('img/${image}')`;

/*
const addElement = document.createElement("img");
addElement.src = `img/${image}`;
document.body.appendChild(addElement);
*/