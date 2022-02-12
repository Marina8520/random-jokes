const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const en = document.querySelector('.en');
const ru = document.querySelector('.ru')
const url = 'https://api.unsplash.com/photos/random?query=fun&client_id=Do42olqenMyCvWlNkjzCGeFDbssllTMl57rssopeupQ'
const url2 = 'https://type.fit/api/quotes';
const p = document.createElement('p');
const img = document.createElement('img');
const body = document.querySelector('body');

en.addEventListener('click', () => {
  if(ru.classList.contains('active')) {ru.classList.remove('active');}
  en.classList.add('active');
})

ru.addEventListener('click', () => {
  if(en.classList.contains('active')) {en.classList.remove('active');}
  ru.classList.add('active');
  button.textContent = "Новая цитата" 
  button.addEventListener('click', getDataJson);
})
 
function showImg(data)  {
img.classList.add('gallery-img')
img.src = data.urls.regular;
img.alt = `image`; 
container.append(img);
img.style.width = "200px";   
}
 
/*
function showImg(data)  {
    container.style.backgroundColor = 'white';
  //  document.body.style.backgroundImage = "url('data.urls.regular')";

}
 */

async function getImg() {
    const res = await fetch(url);
    const data1 = await res.json();
    console.log(data1);
    showImg(data1);
}
getImg();

function showData(data2) {
    p.textContent = data2[Math.floor(Math.random()*data2.length)].text;
    p.style.fontSize = '28px';
    p.style.color = "#9f918e";
    p.style.width = "100% - 300px"
    container.append(p);
};

async function getData() {
    const res = await fetch(url2);
    const data2 = await res.json();
    console.log(data2); 
    showData(data2);
  }

async function getDataJson()  {
  const quotes = 'quotes.json';
  const res = await fetch(quotes);
  const data3 = await res.json();
  showData(data3);
}
  
if(ru.classList.contains('active')) {
  getDataJson();
}
else {
  getData(); }

  if(ru.classList.contains('active')) {  
    button.addEventListener('click', getDataJson); }
  else {
    button.addEventListener('click', getData);
  }
  button.addEventListener('click', getImg);