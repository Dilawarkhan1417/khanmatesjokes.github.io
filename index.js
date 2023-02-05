 const btnEl = document.getElementById("btn");
 const jokeEl = document.getElementById("jokes");

 const apiKey = "kufipbFINSU2mhV+ID4b/w==w3rPjS1F7y2FJSHI";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"



 async function getjoke(){


    try {
        
    jokeEl.innerText = "Updating joke....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading ....";


    const response = await fetch(apiURL, options)
    const data = await response.json()

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a Joke";
    jokeEl.innerText = data[0].joke;





    } catch (error) {

        jokeEl.innerText = "An Error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";




        
    }




 }

 btnEl.addEventListener('click', getjoke);