 

        $(document).ready(function () {
            var options = [
                {
                    question: "How many planets are in our solar system?", 
                    choice: ["5", "7", "8", "9"],
                    answer: 2,
                    photo: "assets/imgs/"
                 },
                 {
                     question: "How many natural satellites does the Earth have?", 
                    choice: ["1", "2", "24", "None"],
                    answer: 0,
                    photo: "assets/imgs/"
                 }, 
                 {
                     question: "Most of the planets in our solar system are named after what?", 
                    choice: ["Famous astronomers", "Greek/Roman Gods", "Norse Gods", "Stars" ],
                    answer: 1,
                    photo: "assets/imgs/"
                }, 
                {
                    question: "'The Red Planet' is the poetic name for ... ?", 
                    choice: ["Jupiter", "Mars", "Saturn", "Venus" ],
                    answer: 1,
                    photo: "assets/imgs/"
                }, 
                {
                    question: "What's a group of stars that resemble an earthly object called?",
                    choice: ["A constellation", "A nebula", "A coma stellata", "A galaxy" ],
                    answer: 0,
                    photo: "assets/imgs/"
                }, 
                {
                    question: "Which planet has the Great Red Spot?",
                    choice: ["Jupiter", "Neptune", "Uranus", "Mercury" ],
                    answer: 0,
                    photo: "assets/imgs/"
                }, 
                {
                    question: "Saturn is best known for its gorgeous ______.", 
                    choice: ["Sunrises", "Mountains", "Rings", "Craters" ],
                    answer: 2,
                    photo: "assets/images/lemon.gif"
                }, 
                {
                    question: "Is the Earth considered an astronomical body?", 
                    choice: ["Yes, it is.", "No, it is not."],
                    answer: 0,
                    photo: "assets/imgs/"
                },
                {
                    question:"A ball of ice and dust with a long, glowing tail is called what?",
                    choice: ["An astroid", "A blue dwarf", "A meteor", "A comet"],
                    answer: 3,
                    photo:"assets/imgs/"
                },
                {
                    question: "What's the name of the galaxy we live in?",
                    choice: ["The Andromeda", "The Milkey Way", "The Fishnet", "The Zarathusthra"],
                    answer: 1,
                    photo: "assets/imgs/"
                },
                {
                    question: "True or false: Ursa Major and the Big Dipper are the same thing.", 
                    choice: ["True", "False"],
                    answer: 1,
                    photo: "assets/imgs/"
                },
                {
                    question: "Which of these four planets is not a 'terrestrial planet'?",
                    choice: ["Earth", "Mars", "Mercury", "Saturn"],
                    answer: 3,
                    photo: "assets/imgs/"
                },
                {
                    question: "Beyond the terrestrial planets, we find ... ?",
                    choice: ["Gas giants", "Ice giants", "Exoplanets", "Both gas and ice giants"],
                    answer: 3,
                    photo: "assets/imgs/"
                },
                {
                    question: "On which astronomical object would you find the Sea of Tranquility?",
                    choice: ["The moon", "Mars", "The sun", "Jupiter"],
                    answer: 0,
                    photo: "assets/imgs/"
                },
                {
                    question: "When a large star collapses under its own weight, what does it become?",
                    choice: ["A blue dwarf", "A red giant", "A nebula", "A black hole"],
                    answer: 3,
                    photo: "assets/imgs/"
                },
                {
                    question: "Which planet's moons are named (in translation) 'fear' and 'dread'?",
                    choice: ["Jupiter", "Mars", "Neptune", "Mercury"],
                    answer: 1,
                    photo: "assets/imgs/"
                },
                {
                    question: "What is an exoplanet?",
                    choice: ["The molten core of a planet", "A planet outside the solar system", "Floating rubble that once was a planet", "This is just a term from science fiction."],
                    answer: 1,
                    photo: "assets/imgs/"
                },
                {
                    question: "When we talk about a star's brightness, we refer to its what?",
                    choice: ["Lumosity", "Beaufort-scale position", "Wattage", "Magnitude"],
                    answer: 3,
                    photo: "assets/imgs/"
                },
                {
                    question: "A light-year is a measure of what?",
                    choice: ["Brightness", "Distance", "Time", "Size"],
                    answer: 1,
                    photo: "assets/imgs/"
                },
                ];
        var wins = []
        var losses = []
        wins++;
        $("#win-count").text(wins)
        
        losses ++;
        $("#loss-count").text(losses);