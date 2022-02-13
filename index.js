const container = document.querySelector('.container');
const imgContainer = document.querySelector('.img-container');
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
  button.textContent = "New quote";
})

ru.addEventListener('click', () => {
  if(en.classList.contains('active')) {en.classList.remove('active');}
  ru.classList.add('active');
  button.textContent = "Новая цитата";
})
 
function showImg(data)  {
  img.src = data.urls.regular;
  img.alt = `image`; 
  imgContainer.append(img);
  img.style.height = '100%';   
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
    p.style.width = "100% - 300px";
    container.append(p);
};

async function getData() {
    var jsonUrl = ru.classList.contains('active') ? 'quotes.json' : url2;
    const res = await fetch(jsonUrl);
    const data2 = await res.json();
    console.log(data2); 
    showData(data2);
    getImg();
  }
  
getData();

button.addEventListener('click', getData);
