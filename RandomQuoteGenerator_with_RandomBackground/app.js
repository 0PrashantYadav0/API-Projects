import { apiData, getImg } from './api/calling.js';

const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

btn.addEventListener('click', async () => {
  const img = await getImg();
  document.body.style.backgroundImage = `url(${img.url})`;
  const data = await apiData();
  quote.innerText = data.quote;
  author.innerText = data.author;
  
})