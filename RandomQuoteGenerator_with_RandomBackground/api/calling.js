// function to fetch data from api


export async function apiData(){
  let url = "https://dummyjson.com/quotes/random";
  await fetch(url)
  const response = await fetch(url)
  const data = await response.json();
  return data;
};

export async function getImg(){
  let url = "https://source.unsplash.com/1600x900/?beach";
  let img = await fetch(url);
  console.log(img)
  return img;
}

console.log("calling")