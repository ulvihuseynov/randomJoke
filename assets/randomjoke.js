const joke=document.getElementById('joke');
const btn=document.getElementById('btn');
const url='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,explicit&type=single';

let getJoke=async()=>{
 try {
    joke.classList.remove("fade")
    const end=await fetch(url)
    const data=await end.json()
    console.log(data);
    joke.classList.add("fade")
    joke.innerHTML=data.joke
 } catch (error) {
    console.error(error);
 }
}
btn.addEventListener("click",getJoke)
getJoke()

