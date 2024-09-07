document.querySelector("button").addEventListener("click", fun);

function fun() {
    let setup;
    let punchline;
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
     .then(response => response.json())
     .then(data => {
        setup = data[0].setup;
        punchline = data[0].punchline;
        // console.log(`${setup}, ${punchline}`);
     })
     .then(() => {
        document.querySelector(".setup").innerHTML = "";
        document.querySelector(".punchline").innerHTML = "";
        setTimeout(() => {
            document.querySelector(".setup").innerHTML = setup;
        }, 500);
        setTimeout(() => {
            document.querySelector(".punchline").innerHTML = punchline;
        }, 2500);
     })
}