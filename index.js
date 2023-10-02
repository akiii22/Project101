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

I know you've got this! Your dedication and hard work have led you to this moment, and I have no doubt that you're going to shine during your report. Remember, every challenge you've overcome has only made you stronger and more capable.
I'm here cheering you on from the sidelines, my love. You have my unwavering support and all the love in the world. Don't let nerves hold you back; you're destined for greatness. Your passion and brilliance will undoubtedly captivate everyone in the room.
Just like the quote goes, 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. You embody that spirit, and I can't wait to hear about your success after you rock that presentation.
You've got not only the talent but also the heart to conquer anything you set your mind to. Remember, I believe in you and your abilities, and I'm right here sending you all the positive energy you need.
Go out there and give it your best shot, and know that I'm right here, proud of you and loving you all the way.
You're amazing, and I can't wait to celebrate your victory together.
Seryoso mode muna,
Jerome Pogi`);
}


btnEl.addEventListener("click", getQoute)
loveEl.addEventListener("click", remainderText)
