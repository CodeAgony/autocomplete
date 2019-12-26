const input = document.getElementById("search");

let data = [];
const getData = async () => {
   data = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/785628fae49b7d7f18447c48664347b175445ebd/cities.json")
   .then(response => response.json());
}
getData();

// Display matches
const matchContainer = document.getElementById("matches");
const displayMatches = () => {
    const html = matches.map(match => {return `<li>${match.city}</li>`})
    input.value != "" ? matchContainer.innerHTML = html.join('') : matchContainer.innerHTML = null;
}

// Get matches
let matches = [];
const getMatches = () => {
    regex = new RegExp(input.value, "gi");
    matches = data.filter(place => place.city.match(regex) || place.state.match(regex));
    // Reorder
    displayMatches();
}
input.addEventListener("change", getMatches);
input.addEventListener("keyup", getMatches);