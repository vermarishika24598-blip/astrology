const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces"
];

/*based on the month */
const personalities = [
  "Always curious and eager to explore new ideas, constantly seeking knowledge and growth.",
  "A natural leader who inspires others through confidence, clarity, and determination.",
  "Quiet and reflective, preferring deep conversations over small talk.",
  "Highly creative with a vivid imagination, often coming up with unique solutions.",
  "Strongly empathetic and caring, always putting others' needs before their own.",
  "Adventurous and daring, never afraid to take risks or try something new.",
  "Calm and composed under pressure, able to think logically in difficult situations.",
  "Playful and humorous, always bringing laughter and joy to those around them.",
  "Ambitious and driven, constantly striving to achieve bigger and better goals.",
  "Independent and self-reliant, preferring to work alone rather than depend on others.",
  "Organized and detail-oriented, always making sure everything is in perfect order.",
  "Patient and understanding, willing to listen and support without judgment.",
  "Energetic and enthusiastic, full of life and always ready for new challenges.",
  "Practical and realistic, focusing on what can actually be done rather than dreaming.",
  "Kind-hearted and generous, always ready to help those in need without expecting anything back.",
  "Impulsive and spontaneous, living in the moment and making decisions quickly.",
  "Optimistic and hopeful, always seeing the bright side even in tough times.",
  "Thoughtful and analytical, carefully considering all options before acting.",
  "Reliable and responsible, someone others can always count on for support.",
  "Open-minded and accepting, respecting differences and embracing diversity.",
  "Deeply philosophical and introspective, always questioning the meaning of life and existence.",
  "Highly adaptable, able to adjust quickly to new environments and unexpected changes.",
  "Supportive and encouraging, uplifting others and celebrating their achievements.",
  "Strongly disciplined and hardworking, staying committed even when things get tough.",
  "Gentle and compassionate, bringing comfort and warmth to everyone they meet.",
  "Visionary and future-focused, always thinking about what lies ahead and how to shape it.",
  "Protective and loyal, standing by their loved ones no matter the circumstances.",
  "Charismatic and persuasive, easily drawing people in with charm and confidence.",
  "Resourceful and inventive, finding creative ways to solve problems with limited means.",
];

/*based on the year */
const victimLines = [
  "Always the one who gets blamed even when I did nothing wrong.",
  "Feels invisible in a world that never seems to notice my existence.",
  "Carries the weight of everyone’s expectations but never gets recognition.",
  "No matter how hard I try, life always pushes me back down.",
  "Constantly taken advantage of because of my kindness.",
  "Gives everything to others but is left with nothing in return.",
  "Always the one left behind when people move on with their lives.",
  "Fights silently with struggles that nobody else sees.",
  "Feels trapped in situations I can’t escape from.",
  "Trusts too easily and ends up hurt every single time.",
  "Feels like a puppet controlled by circumstances beyond my control.",
  "Always sacrificing for others but forgotten when I need help.",
  "Feels like life is a series of battles I never chose to fight.",
  "Always misunderstood and judged without being heard.",
  "Loves deeply but always ends up brokenhearted.",
  "Gets blamed for mistakes that aren’t even mine.",
  "Lives in the shadow of others’ success and achievements.",
  "Keeps giving second chances to people who don’t deserve them.",
  "Feels powerless in a world that only listens to the strong.",
  "Trapped in a cycle of disappointment and betrayal.",
  "Always the one people run to when they need help but never when they’re happy.",
  "Feels unworthy no matter how much I accomplish.",
  "Carries scars that nobody bothers to see.",
  "Taken for granted by those I love the most.",
  "Never chosen first, always the backup plan.",
  "Feels silenced in moments when I need to speak the most.",
  "Keeps fighting battles that drain my spirit.",
  "Always walking on eggshells, afraid to upset others.",
  "Betrayed by people I thought I could trust forever.",
  "Feels like my story is written by everyone else but me."
];

const predictions = [
  "A new opportunity will soon knock on your door.",
  "You will meet someone who will change your perspective on life.",
  "Hard work will soon bring you the success you’ve been waiting for.",
  "An unexpected message will brighten your day.",
  "Your creativity will open new doors of possibility.",
  "Someone close to you will surprise you in a positive way.",
  "A small risk you take will bring a big reward.",
  "Your kindness will return to you in the most unexpected way.",
  "A dream you have been holding onto will start becoming reality.",
  "New friendships are waiting for you just around the corner.",
  "A long-awaited answer will finally come your way.",
  "Your patience will pay off very soon.",
  "You will soon travel to a place that inspires you deeply.",
  "A fresh start is coming that will give you clarity.",
  "Good news related to your career is on the horizon.",
  "Someone you thought was lost will reappear in your life.",
  "Your efforts will be recognized by the right people.",
  "You will soon discover a hidden talent within yourself.",
  "Happiness will come to you through unexpected moments.",
  "A challenge you face now will turn into your greatest strength.",
  "Your positive energy will attract the right opportunities.",
  "A financial surprise will ease your worries.",
  "An old problem will finally find its solution.",
  "You will inspire others more than you realize.",
  "A meaningful conversation will lead to new beginnings.",
  "You will soon gain the confidence to take a bold step.",
  "Your future holds moments of joy that outweigh your struggles.",
  "An idea you’ve been holding onto will bring success.",
  "Your circle of support will grow stronger very soon.",
  "Luck will favor you in ways you least expect."
];

const recommendations = [
  "Take a short walk every day to refresh your mind.",
  "Read at least one new book this month.",
  "Spend more time with people who make you feel positive.",
  "Try learning a new skill that excites you.",
  "Stay hydrated and drink more water throughout the day.",
  "Limit your screen time before going to bed.",
  "Keep a journal to track your thoughts and progress.",
  "Meditate for at least 10 minutes daily to calm your mind.",
  "Organize your workspace to boost productivity.",
  "Set small, realistic goals and celebrate when you achieve them.",
  "Take regular breaks while working to avoid burnout.",
  "Eat more fresh fruits and vegetables for better health.",
  "Listen to uplifting music to improve your mood.",
  "Practice gratitude by writing down three good things daily.",
  "Learn to say no to things that drain your energy.",
  "Exercise regularly to keep your body and mind active.",
  "Spend time outdoors and connect with nature.",
  "Try reducing caffeine intake for better sleep."
];

const form = document.getElementById('astro');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const month = document.getElementById('Month').value;
  const day = document.getElementById('day').value;
  const year = document.getElementById('year').value;

  const result = document.getElementById("result");

  const first_message = `Hello ${name} ${surname}`;
  const second_message = `Your zodiac sign is ${zodiacSigns[month - 1]}`;
  const third_message = personalities[day - 1];

  let index = Math.floor(Math.random() * 20);
  const fourth_message = victimLines[index];

  index = (name.length * surname.length * year) % recommendations.length;
  const fifth_message = recommendations[index];

  index = (day * month * year) % predictions.length;
  const sixth_message = predictions[index];

  result.innerHTML = `${first_message}. ${second_message}. ${third_message}. ${fourth_message}.  Our recommendation for you-:${fifth_message}. ${sixth_message}`;
});
