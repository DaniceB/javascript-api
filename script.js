jokeTitle.textContent = "😹Joke Of The Day";
joke.textContent = "Loading...";

// Joke Of The Day
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then(data => {
    console.log(data);
    if (data.type === "single") {
        joke.textContent = data.joke;
      }
      else if (data.type === "twopart") {
        joke.textContent = data.setup + " ... " + data.delivery;
      }
});

// Joke for Programming
document.getElementById('programming').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('jokeTitle').textContent = "A Random Programming Joke!!";
});

// Joke for Misc
document.getElementById('miscellaneous').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('jokeTitle').textContent = "A Random Miscellaneous Joke!!";
});

// Joke for Pun
document.getElementById('pun').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('jokeTitle').textContent = "A Random Pun!!";
});

// Joke for Spooky
document.getElementById('spooky').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('jokeTitle').textContent = "A Random Spooky Joke~";
});

// Joke for Christmas
document.getElementById('christmas').addEventListener("click", () => {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('joke').textContent = data.joke || data.setup +"..."+ data.delivery;
    });
    document.getElementById('jokeTitle').textContent = "A Random Christmas Joke!!";
});