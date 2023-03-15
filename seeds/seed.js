const { Quiz } = require('../models');

const QuizData = [
  {
    categroy: "General Knowledge",
    correctAnswer: "A Lamb",
    answerA: "A Lamb",
    answerB: "A Puppy",
    answerC: "A Fish",
    answerD: "A Swan",
    question: "In the nursery rhyme, what animal belonged to a girl named Mary?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Afghani",
    answerA: "Afghani",
    answerB: "Rial",
    answerC: "Dinar",
    answerD: "Derum",
    question: "What is the basic unit of currency for Afghanistan?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Valetudinarian",
    answerA: "Valetudinarian",
    answerB: "Fudgel",
    answerC: "Lackadaisical",
    answerD: "Groke",
    question:
      "Which word is defined as 'a sickly or weak person, especially one who is constantly and morbidly concerned with his or her health'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "The d in 'door'",
    answerA: "The d in 'door'",
    answerB: "The y in 'yellow'",
    answerC: "The r in 'red'",
    answerD: "The z in 'zoo'",
    question: "In phonetics, which of these is an example of a plosive sound?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "8",
    answerA: "8",
    answerB: "12",
    answerC: "10",
    answerD: "6",
    question: "How Many Furlongs Are There In A Mile?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "China",
    answerA: "China",
    answerB: "Greece",
    answerC: "The USA",
    answerD: "Britain",
    question:
      "In which country was natural gas first used as a source of energy?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "South Pole",
    answerA: "South Pole",
    answerB: "The Peak of Mount Everest",
    answerC: "The Moon",
    answerD: "The Mariana Trench",
    question: "In 1911 Roald Amundsen became the first person to reach where?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Ernest Wiseman",
    answerA: "Ernest Wiseman",
    answerB: "Jeffrey Wallis",
    answerC: "Lars Friedel",
    answerD: "Matthew Flaunt",
    question: "What was the real name of Eric Morecambes partner?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Woebegone",
    answerA: "Woebegone",
    answerB: "Ratoon",
    answerC: "Dragoman",
    answerD: "Bobsy-die",
    question: "Which word is defined as 'sad or miserable in appearance'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Obelus",
    answerA: "Obelus",
    answerB: "Gibberish",
    answerC: "Donkey Engine",
    answerD: "Taradiddle",
    question: "Which word is defined as 'the symbol ÷'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Dipthong",
    answerA: "Dipthong",
    answerB: "Kakorrhaphiophobia",
    answerC: "Grommet",
    answerD: "Jentacular",
    question:
      "Which word is defined as 'two vowel sounds joined in one syllable to form one speech sound, e.g. the sounds of “ou” in out and of “oy” in boy'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Sherwood forest",
    answerA: "Sherwood forest",
    answerB: "Nottingham",
    answerC: "Bedgebury Forest",
    answerD: "Hoodwood",
    question: "Where did Robin Hood supposedly live?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Juliett",
    answerA: "Juliett",
    answerB: "Jump",
    answerC: "Jericho",
    answerD: "Jolly",
    question:
      "What word is used in the NATO Phonetic Alphabet for the letter J?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "LXIX",
    answerA: "LXIX",
    answerB: "CXIX",
    answerC: "LIXX",
    answerD: "CIXX",
    question: "How do you write 69 in Roman numerals?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Smicker",
    answerA: "Smicker",
    answerB: "Whiffler",
    answerC: "Gardyloo",
    answerD: "Widdershins",
    question: "Which word is defined as 'to look amorously after somebody'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "The n in 'no'",
    answerA: "The n in 'no'",
    answerB: "The d in 'door'",
    answerC: "The v in 'village'",
    answerD: "The g in 'green'",
    question: "In phonetics, which of these is an example of a nasal sound?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Pastern",
    answerA: "Pastern",
    answerB: "Sole",
    answerC: "Periople",
    answerD: "Hock",
    question:
      "The part of the foot of a horse between the fetlock and the hoof is the __________",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Snickersnee",
    answerA: "Snickersnee",
    answerB: "Curmudgeon",
    answerC: "Xertz",
    answerD: "Cattywampus",
    question:
      "Which word is defined as 'to engage in cut-and-thrust fighting with knives'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Conjubilant",
    answerA: "Conjubilant",
    answerB: "Jentacular",
    answerC: "Discombobulate",
    answerD: "Whippersnapper",
    question: "Which word is defined as 'shouting together with joy'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Discombobulate",
    answerA: "Discombobulate",
    answerB: "Cacophony",
    answerC: "Dragoman",
    answerD: "Dragoman",
    question: "Which word is defined as 'to disconcert of confuse'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Water",
    answerA: "Water",
    answerB: "Jungle",
    answerC: "Desert",
    answerD: "Arctic",
    question: "In What Environment Did Ichthysaurs Live",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Bonsai",
    answerA: "Bonsai",
    answerB: "Ornamental Shrubbery",
    answerC: "Decorage",
    answerD: "Topiary",
    question:
      "What is the name given to the art of miniaturising trees and maintaining their small size?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Cacophony",
    answerA: "Cacophony",
    answerB: "Cabotage",
    answerC: "Gardyloo",
    answerD: "Halfpace",
    question:
      "Which word is defined as 'a harsh, discordant mixture of sounds'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Washington DC",
    answerA: "Washington DC",
    answerB: "New York City",
    answerC: "Brussels",
    answerD: "Geneva",
    question: "Where is Capitol Hill?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Romeo",
    answerA: "Romeo",
    answerB: "Rwanda",
    answerC: "Roar",
    answerD: "Rowboat",
    question:
      "What word is used in the NATO Phonetic Alphabet for the letter R?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Quire",
    answerA: "Quire",
    answerB: "Whiffler",
    answerC: "Ragamuffin",
    answerD: "Ragamuffin",
    question: "Which word is defined as 'two dozen sheets of paper'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "The Hoover Dam",
    answerA: "The Hoover Dam",
    answerB: "The Three Gorges Dam",
    answerC: "The Oroville Dam",
    answerD: "The Theodore Roosevelt Dam",
    question: "Which Dam Harnesses The Colorado River",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Amerigo Vespucci",
    answerA: "Amerigo Vespucci",
    answerB: "Aymeric Santiago",
    answerC: "Merica Bonnuci",
    answerD: "Amir Icarlo",
    question: "After whom was America named?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "China",
    answerA: "China",
    answerB: "England",
    answerC: "France",
    answerD: "Russia",
    question: "Which nation invented Paper?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Foal",
    answerA: "Foal",
    answerB: "Tiger",
    answerC: "Kitten",
    answerD: "Giraffe",
    question: "What is the meaning of the name of the constellation Equuleus?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "The Netherlands ",
    answerA: "The Netherlands ",
    answerB: "Belgium",
    answerC: "Sweden",
    answerD: "Spain",
    question: "KLM Is The National Airline Of Which Country?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Agastopia",
    answerA: "Agastopia",
    answerB: "Dragoman",
    answerC: "Oxter",
    answerD: "Jentacular",
    question:
      "Which word is defined as 'admiration of a particular part of someone’s body'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Erf",
    answerA: "Erf",
    answerB: "Billingsgate",
    answerC: "Taradiddle",
    answerD: "Blatherskite",
    question: "Which word is defined as 'a plot of land'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "New Mexico",
    answerA: "New Mexico",
    answerB: "Nagasaki",
    answerC: "Hiroshima",
    answerD: "Bikini Atoll",
    question: "Where did the first atomic bomb explode?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Whiffler",
    answerA: "Whiffler",
    answerB: "Firman",
    answerC: "Salopettes",
    answerD: "Donkey Engine",
    question:
      "Which word is defined as 'somebody who walks in front of you through a crowd'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "The y in 'yellow'",
    answerA: "The y in 'yellow'",
    answerB: "The p in 'pin'",
    answerC: "The t in 'train'",
    answerD: "The sh in 'shop'",
    question:
      "In phonetics, which of these is an example of an approximant sound?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "8 Maids A Milking",
    answerA: "8 Maids A Milking",
    answerB: "8 Lords a Leaping",
    answerC: "8 Swans a Swimming",
    answerD: "8 Jugglers Juggling",
    question:
      'What Did My True Love Give To Me On The "Eighth" Day Of Christmas"?',
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Tittynope",
    answerA: "Tittynope",
    answerB: "Funambulist",
    answerC: "Blatherskite",
    answerD: "Winklepicker",
    question:
      "Which word is defined as 'a small quantity of something left over'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Three",
    answerA: "Three",
    answerB: "Four",
    answerC: "Five",
    answerD: "Six",
    question: "How many astronauts manned each Apollo flight?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Bohemia",
    answerA: "Bohemia",
    answerB: "Prussia",
    answerC: "Silesia",
    answerD: "Moravia",
    question:
      'From the Christmas Carol "Good King Wenceslas", where was Good King Wenceslas the King of?',
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "De Militarized Zone",
    answerA: "De Militarized Zone",
    answerB: "Definite Multivariate Zone",
    answerC: "Deregulated Monetary Zone",
    answerD: "Decompression Minimum Zone",
    question: "What does 'DMZ' stand for?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Curmudgeon",
    answerA: "Curmudgeon",
    answerB: "Bumfuzzle",
    answerC: "Borborygmus",
    answerD: "Deipnophobia",
    question: "Which word is defined as 'a bad-tempered person'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Foxtrot",
    answerA: "Foxtrot",
    answerB: "Forget",
    answerC: "Fail",
    answerD: "Felicity",
    question:
      "What word is used in the NATO Phonetic Alphabet for the letter F?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "fricative",
    answerA: "fricative",
    answerB: "plosive",
    answerC: "approximant",
    answerD: "nasal",
    question:
      "In phonetics, the z in 'zoo' is an example of what kind of sound?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Groke",
    answerA: "Groke",
    answerB: "Quomodocunquizing",
    answerC: "Nudiustertian",
    answerD: "Macrosmatic",
    question:
      "Which word is defined as 'an old Scots term meaning to look at somebody while they’re eating in the hope that they’ll give you some of their food'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Sprunt",
    answerA: "Sprunt",
    answerB: "Bumfuzzle",
    answerC: "Salopettes",
    answerD: "Kakorrhaphiophobia",
    question:
      "Which word is defined as 'an old Scottish word meaning to chase girls around among the haystacks after dark'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Yarborough",
    answerA: "Yarborough",
    answerB: "Octothorpe",
    answerC: "Grommet",
    answerD: "Pauciloquent",
    question:
      "Which word is defined as 'hand of cards containing no card above a nine'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Swan",
    answerA: "Swan",
    answerB: "Ring",
    answerC: "River",
    answerD: "Mountain",
    question: "What is the meaning of the name of the constellation Cygnus?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Bobsy-die",
    answerA: "Bobsy-die",
    answerB: "Groke",
    answerC: "Whippersnapper",
    answerD: "Tittynope",
    question: "Which word is defined as 'a great deal of fuss or trouble'?",
  },
  {
    categroy: "General Knowledge",
    correctAnswer: "Echo",
    answerA: "Echo",
    answerB: "Elton",
    answerC: "Elbow",
    answerD: "Enable",
    question:
      "What word is used in the NATO Phonetic Alphabet for the letter E?",
  },
];

const seedQuiz = () => Quiz.bulkCreate(QuizData);
seedQuiz();