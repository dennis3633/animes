const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const whiteBtn = document.getElementById('white');
const blackBtn = document.getElementById('black');
const greenBtn = document.getElementById('green');
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "purple", "white", "black"];
let currentColor = 0;

image1.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/695/331/660/digital-art-artwork-women-cityscape-wallpaper-preview.jpg')";
});

image2.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg')";
});

image3.addEventListener('click', function(){
    document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg')";
});
image4.addEventListener('click', function(){
  document.body.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/708/846/337/anime-demon-slayer-kimetsu-no-yaiba-tanjirou-kamado-hd-wallpaper-preview.jpg')";
});

whiteBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = "white";
});

blackBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = "black";
});

greenBtn.addEventListener('click', function(){
  document.body.style.backgroundColor = "green";
});

setInterval(() => {
image1.style.borderColor = colors[currentColor];
image2.style.borderColor = colors[currentColor];
image3.style.borderColor = colors[currentColor];
image4.style.borderColor = colors[currentColor];
currentColor = (currentColor + 1) % colors.length;
}, 1000);


