const constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
const planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
const star = "polaris";

//It's done when the string "Canis Major" is added as the first element of the constellations array and no elements are removed.
constellations.unshift ("Canis Major");
console.log(constellations);

//It's done when "Venus" is removed from the planets array.
planets.splice(planets.length -1, 1);
console.log(planets)

// It's done when the arrays constellations and planets are joined to form a new array named galaxy. The arrays constellations and planets should not be altered.

const galaxy = constellations.concat (planets);
console.log(galaxy);

// It's done when the string "polaris" is converted into all capital letters and the new string is stored in a variable.

const capitalizedStar = star.toUpperCase ();
console.log(capitalizedStar);
