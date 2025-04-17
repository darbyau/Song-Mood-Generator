// console.log("Welcome to Song Mood Generator");

//  Data for generating randomized song vibes, including genres, moods, and settings
//  Store message components in an object
const vibePalette = {
  mood: [
    "Chill",
    "Hype",
    "Dreamy",
    "Melancholic",
    "Romantic",
    "Reflective",
    "Energetic",
    "Dark",
    "Uplifting",
    "Smooth",
    "Playful",
    "Mysterious",
    "Nostalgic",
    "Peaceful",
    "Gritty",
    "Dancy",
  ],
  genre: [
    "Lo-fi",
    "Hip-Hop",
    "Synthwave",
    "Jazz",
    "Trap",
    "Indie Rock",
    "Classical",
    "Neo-Soul",
    "Ambient",
    "R&B",
    "EDM",
    "Folk",
    "Funk",
    "Pop",
    "Drum & Bass",
    "UK Garage",
  ],

  setting: [
    "while walking through a quiet city at night",
    "on a rainy afternoon with a warm drink",
    "for a late-night drive under neon lights",
    "during a solo dance session in your room",
    "as the sun sets on a beach",
    "while stargazing in the middle of nowhere",
    "at the gym, mid-workout hustle",
    "in a cozy cabin with a fireplace crackling",
    "as you daydream at your desk",
    "while riding a train with headphones on",
    "in a candle-lit room with incense burning",
    "during a deep focus study session",
    "in the middle of a summer thunderstorm",
    "while people-watching from a cafe",
    "on a long road trip with no destination",
  ],
};

// Function to generate a random number based on the length of the array
const randomSelect = (elements) => {
  return Math.floor(Math.random() * elements);
};

// Array to store the generated vibe components
let vibeOutput = [];

// Iterate through the properties of the vibePalette object
for (let property in vibePalette) {
  let randomIndex = randomSelect(vibePalette[property].length);
//   console.log(randomIndex);

  switch (property) {
    case "mood":
      vibeOutput.push(`🎧 Today's vibe is ${vibePalette[property][randomIndex]}`);
      break;
    case "genre":
      vibeOutput.push(vibePalette[property][randomIndex]);
      break;
    case "setting":
      vibeOutput.push(`– to be enjoyed ${vibePalette[property][randomIndex]}.`);
      break;
    default:
      console.log("Invalid property");
      break;
  }
}

// ASCII Art 
const asciiArt = `
  🎵🎶 SONG MOOD GENERATOR 🎶🎵
   
       ;;;;;;;;;;;;;;;;;;; 
     ;;;;;;;;;;;;;;;;;;;
     ;                 ;
     ;                 ;
     ;                 ;
     ;                 ;
     ;                 ;        ♫⋆｡♪ ₊˚♬ ﾟ.
     ;                 ;    What's your vibe? 
     ;                 ;       ¯\\_(ツ)_/¯
,;;;;;            ,;;;;;

;;;;;;            ;;;;;;
\`;;;;'            \`;;;;'
    
`;

console.log(asciiArt);

// Join the generated vibe components into a single string
console.log((vibeOutput = vibeOutput.join(" ")));
