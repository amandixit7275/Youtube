const nameList = [
  "Shah Rukh Khan",
  "Deepika Padukone",
  "Salman Khan",
  "Priyanka Chopra",
  "Ranbir Kapoor",
  "Alia Bhatt",
  "Aamir Khan",
  "Kareena Kapoor",
  "Amitabh Bachchan",
  "Katrina Kaif",
  "Varun Dhawan",
  "Anushka Sharma",
  "Akshay Kumar",
  "Kangana Ranaut",
  "Ranveer Singh",
  "Sonam Kapoor",
  "Hrithik Roshan",
  "Jacqueline Fernandez",
  "Ajay Devgn",
  "Deepak Tijori",
  "Parineeti Chopra",
  "Shahid Kapoor",
  "Kajol",
  "Tiger Shroff",
  "Sonakshi Sinha",
  "Vidya Balan",
  "Sushant Singh Rajput",
  "Shraddha Kapoor",
  "Madhuri Dixit",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const messagesArray = [
  "Oops! My sense of humor just glitched.",
  "Current mood: Ctrl + Alt + Del.",
  "Sarcasm: my love language.",
  "Warning: Contents may cause laughter.",
  "Lost in thought. Send GPS.",
  "Brain.exe has stopped working. Please try again later.",
  "Why did the tomato turn red? Because it saw the salad dressing!",
  "I'm not a complete idiot, some parts are missing.",
  "My train of thought derailed.",
  "My idea of multitasking is opening multiple tabs.",
  "I'm not ignoring you, I'm just on a coffee break from reality.",
  "Just winging it. Life, that is.",
  "My life is like a romantic comedy, minus the romance and just the comedy.",
  "Currently suffering from adulting fatigue.",
  "Who needs a social life when you have Wi-Fi?",
  "I'm not lazy, I'm energy efficient.",
  "Brain cells: on strike.",
  "Warning: Puns in progress.",
  "Current status: In a committed relationship with pizza.",
  "I'm not clumsy, the floor just hates me.",
  "Sorry, I can't adult today. Try again tomorrow.",
  "If I were a superhero, my superpower would be procrastination.",
  "Why be serious when you can be seriously funny?",
  "Coffee: my anti-drama potion.",
  "Life's too short for serious chats.",
  "Living on the edge of a giggle fit.",
  "Do not disturb: Genius at work. (Just kidding!)",
  "I'm not disorganized, I'm just creatively chaotic.",
  "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka, and have a party.",
  "My life is a comedy of errors. Care to join the cast?",
  "Chaos Coordinator reporting for duty.",
  "Life's a journey. Mine's on a detour.",
  "I'm not antisocial, I'm selectively social.",
  "Running on caffeine and inappropriate thoughts.",
  "Warning: Unstable levels of sarcasm detected.",
  "I'm not late, I'm just fashionably challenged.",
  "Why be normal when you can be hilariously weird?",
  "Current status: Mentally on vacation.",
  "I'm not avoiding work, I'm just on a mental health break.",
  "I'm not clumsy, I'm just learning to dance with life.",
  "Why fit in when you were born to stand out?",
  "Distracted by shiny objects and bad jokes.",
  "I'm not ignoring you, I'm just practicing selective hearing.",
  "Error 404: Sense of humor not found.",
  "Sorry, my filter's on vacation. What were you saying?",
  "I'm not lazy, I'm just energy efficient.",
  "My life is like a romantic comedy, minus the romance and just the comedy.",
  "Currently suffering from adulting fatigue.",
  "Who needs a social life when you have Wi-Fi?",
  "I'm not lazy, I'm energy efficient.",
  "Sorry, I can't adult today. Try again tomorrow.",
  "If I were a superhero, my superpower would be procrastination.",
  "Why be serious when you can be seriously funny?",
  "Coffee: my anti-drama potion.",
  "Life's too short for serious chats.",
  "Living on the edge of a giggle fit.",
  "Do not disturb: Genius at work. (Just kidding!)",
  "I'm not disorganized, I'm just creatively chaotic.",
  "If life gives you lemons, make lemonade. Then find someone whose life gave them vodka, and have a party.",
  "My life is a comedy of errors. Care to join the cast?",
  "Chaos Coordinator reporting for duty.",
  "Life's a journey. Mine's on a detour.",
  "I'm not antisocial, I'm selectively social.",
  "Running on caffeine and inappropriate thoughts.",
  "Warning: Unstable levels of sarcasm detected.",
  "I'm not late, I'm just fashionably challenged.",
  "Why be normal when you can be hilariously weird?",
  "Current status: Mentally on vacation.",
  "I'm not avoiding work, I'm just on a mental health break.",
  "I'm not clumsy, I'm just learning to dance with life.",
  "Why fit in when you were born to stand out?",
  "Distracted by shiny objects and bad jokes.",
  "I'm not ignoring you, I'm just practicing selective hearing.",
  "Error 404: Sense of humor not found.",
  "Sorry, my filter's on vacation. What were you saying?",
];

export function generateRandomMessages() {
  const randomIndex = Math.round(Math.random() * messagesArray.length);
  return messagesArray[randomIndex];
}
