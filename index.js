const input = document.getElementById("search");

let data = [];
const getData = async () => {
   data = await fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/785628fae49b7d7f18447c48664347b175445ebd/cities.json")
   .then(response => response.json());
}
getData();

// Getting matches
let matches = [];
const getMatches = () => {
    regex = new RegExp(input.value, "gi");
    matches = data.filter(place => place.city.match(regex) || place.state.match(regex));
}
input.addEventListener("change", getMatches);