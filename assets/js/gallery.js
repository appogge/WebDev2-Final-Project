/*
All images are in the assets/images file.
With some manipulation you can turn the string, "Arctic Wolf" to the string, "arctic-wolf" or "assets/images/arctic-wolf.jpg" and so on.
*/
const animalArray = [
  { name: "Arctic Wolf", species: "Wolf" },
  { name: "Black Bear", species: "Bear" },
  { name: "Black Panther", species: "Cat" },
  { name: "Brown Bear", species: "Bear" },
  { name: "Cheetah", species: "Cat" },
  { name: "Eastern Wolf", species: "Wolf" },
  { name: "Gray Wolf", species: "Wolf" },
  { name: "Iberian Wolf", species: "Wolf" },
  { name: "Leopard", species: "Cat" },
  { name: "Lion", species: "Cat" },
  { name: "Lynx", species: "Cat" },
  { name: "Mexican Wolf", species: "Wolf" },
  { name: "Panda Bear", species: "Bear" },
  { name: "Polar Bear", species: "Bear" },
  { name: "Spectacled Bear", species: "Bear" },
  { name: "Spirit Bear", species: "Bear" },
  { name: "Steppe Wolf", species: "Wolf" },
  { name: "Tiger", species: "Cat" },
];

imgStyles = {
  width: '600',
  height: '400',
  style: 'display: block'
}

h3Styles = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  bottom: '0px',
  color: 'rgb(255, 255, 255)',
  fontWeight: '100',
  left: '0px',
  letterSpacing: '2px',
  margin: '0px',
  padding: '10px',
  position: 'absolute',
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '100%'
}
// Create Buttons and append to div.gallery-buttons and add filter functionality
let allSpecies = new Set(animalArray.map(animal => animal.species).sort());

// Add filter functionality to All button
document.querySelector('button#all-animals').onclick = () => filter(...allSpecies);

for (let species of allSpecies) {
  let button = document.createElement('button')
  button.classList.add(`${species.toLowerCase()}-animals`);
  button.onclick = () => filter(species);
  button.innerText = species;
  document.querySelector('div.gallery-buttons').appendChild(button);
}

// Filter Function
filter = (...allSpecies) => {
  console.log(allSpecies)
  let animalSpecies = [];
  for (let species of allSpecies) animalSpecies = animalSpecies.concat(animalArray.filter(animal => animal.species === species).sort());
  console.log(animalSpecies);
  for (let animal of animalSpecies) {
    let img = document.createElement('img');
    img.src = animal.name.toLowerCase().replace(' ', '-');
  }
}