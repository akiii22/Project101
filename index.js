const btnEl = document.getElementById("btn")
const qouteEl = document.getElementById("qoute")
const loveEl = document.getElementById("love-el")

const messages = [
  "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
  "You are capable of more than you know. Don't let fear hold you back. Embrace the challenge and let your brilliance shine.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle." ,
  "You've got this! Remember, every expert was once a beginner. Just take one step at a time, and you'll achieve amazing things.",
  "Doubt kills more dreams than failure ever will. Believe in your abilities and don't let self-doubt hold you back.",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.",
  "You are stronger than you think. Trust in your preparation, stay confident, and let your passion guide you."
]

function getQoute(){
  const index = Math.floor(Math.random()*messages.length)
  qouteEl.innerHTML = messages[index];
}
getQoute();

function remainderText() {
  alert(`Hey Bonaks,
In life's intricate tapestry, challenges often conceal opportunities, and setbacks can be stepping stones to success. Embrace each moment with resilience, for even in the shadows, the brilliance of your potential awaits its chance to shine. Remember, storms pass, but the sun, undeterred, rises again. Your journey holds a myriad of possibilities, each contributing to the mosaic of a brighter, more fulfilling existence.
 
Seryoso mode muna,
Jerome Pogi`);
}


btnEl.addEventListener("click", getQoute)
loveEl.addEventListener("click", remainderText)
