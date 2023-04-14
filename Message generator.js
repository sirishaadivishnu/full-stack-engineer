// Write a message generator program using javascript. Every time a user runs a program, they will get a new, randomized output
// Create arrays of different message components
const starters = ["Hey there!", "Greetings!", "Hello!", "Hi!"];
const middles = ["How are you today?", "What's new?", "What have you been up to?", "How's everything going?"];
const endings = ["Hope you have a great day!", "Take care!", "Talk to you soon!", "Catch you later!"];

// Function to generate a random message
function generateMessage() {
  const starter = starters[Math.floor(Math.random() * starters.length)];
  const middle = middles[Math.floor(Math.random() * middles.length)];
  const ending = endings[Math.floor(Math.random() * endings.length)];
  return `${starter} ${middle} ${ending}`;
}

// Test the generator by logging a message to the console
console.log(generateMessage());
