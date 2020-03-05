$(document).ready(function() {
	stop();

	//Questions Array

	var options = [
		{
			question: 'How many planets are in our solar system?',
			choice: ['5', '7', '8', '9'],
			correctAnswer: '8',
			photo: 'assets/imgs/solar_system.png',
		},
		{
			question: 'How many natural satellites does the Earth have?',
			choice: ['1', '2', '24', 'None'],
			correctAnswer: '1',
			photo: 'assets/imgs/fullmoon.jpg',
		},
		{
			question: 'Most of the planets in our solar system are named after what?',
			choice: ['Famous astronomers', 'Greek/Roman Gods', 'Norse Gods', 'Stars'],
			correctAnswer: 'Greek/Roman Gods',
			photo: 'assets/imgs/greek-mythology.jpg',
		},
		{
			question: "'The Red Planet' is the poetic name for ... ?",
			choice: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
			correctAnswer: 'Mars',
			photo: 'assets/imgs/mars.jpg',
		},
		{
			question: "What's a group of stars that resemble an earthly object called?",
			choice: ['A constellation', 'A nebula', 'A coma stellata', 'A galaxy'],
			correctAnswer: 'A constellation',
			photo: 'assets/imgs/constellations.jpg',
		},
		{
			question: 'Which planet has the Great Red Spot?',
			choice: ['Jupiter', 'Neptune', 'Uranus', 'Mercury'],
			correctAnswer: 'Jupiter',
			photo: 'assets/imgs/jupiter.jpg',
		},
		{
			question: 'Saturn is best known for its gorgeous ______.',
			choice: ['Sunrises', 'Mountains', 'Rings', 'Craters'],
			correctAnswer: 'Rings',
			photo: 'assets/imgs/saturn.jpg',
		},
		{
			question: 'Is the Earth considered an astronomical body?',
			choice: ['Yes, it is.', 'No, it is not.'],
			correctAnswer: 'Yes, it is.',
			photo: 'assets/imgs/earth.jpg',
		},
		{
			question: 'A ball of ice and dust with a long, glowing tail is called what?',
			choice: ['An astroid', 'A blue dwarf', 'A meteor', 'A comet'],
			correctAnswer: 'A comet',
			photo: 'assets/imgs/comet.jpg',
		},
		{
			question: "What's the name of the galaxy we live in?",
			choice: ['The Andromeda', 'The Milky Way', 'The Fishnet', 'The Zarathusthra'],
			correctAnswer: 'The Milky Way',
			photo: 'assets/imgs/milky_way.jpg',
		},
		{
			question: 'True or false: Ursa Major and the Big Dipper are the same thing.',
			choice: ['True', 'False'],
			correctAnswer: 'False',
			photo: 'assets/imgs/ursa-major.png',
		},
		{
			question: "Which of these four planets is not a 'terrestrial planet'?",
			choice: ['Earth', 'Mars', 'Mercury', 'Saturn'],
			correctAnswer: 'Saturn',
			photo: 'assets/imgs/saturn.jpg',
		},
		{
			question: 'Beyond the terrestrial planets, we find ... ?',
			choice: ['Gas giants', 'Ice giants', 'Exoplanets', 'Both gas and ice giants'],
			correctAnswer: 'Both gas and ice giants',
			photo: 'assets/imgs/ice-and-gas-giants.jpg',
		},
		{
			question: 'On which astronomical object would you find the Sea of Tranquility?',
			choice: ['The moon', 'Mars', 'The sun', 'Jupiter'],
			correctAnswer: 'The moon',
			photo: 'assets/imgs/fullmoon.jpg',
		},
		{
			question: 'When a large star collapses under its own weight, what does it become?',
			choice: ['A blue dwarf', 'A red giant', 'A nebula', 'A black hole'],
			correctAnswer: 'A black hole',
			photo: 'assets/imgs/black-hole.jpg',
		},
		{
			question: "Which planet's moons are named (in translation) 'fear' and 'dread'?",
			choice: ['Jupiter', 'Mars', 'Neptune', 'Mercury'],
			correctAnswer: 'Mars',
			photo: 'assets/imgs/mars.jpg',
		},
		{
			question: 'What is an exoplanet?',
			choice: [
				'The molten core of a planet',
				'A planet outside the solar system',
				'Floating rubble that once was a planet',
				'This is just a term from science fiction.',
			],
			correctAnswer: 'A planet outside the solar system',
			photo: 'assets/imgs/exoplanet.jpg',
		},
		{
			question: "When we talk about a star's brightness, we refer to its what?",
			choice: ['Lumosity', 'Beaufort-scale position', 'Wattage', 'Magnitude'],
			correctAnswer: 'Magnitude',
			photo: 'assets/imgs/sun.jpg',
		},
		{
			question: 'A light-year is a measure of what?',
			choice: ['Brightness', 'Distance', 'Time', 'Size'],
			correctAnswer: 'Distance',
			photo: 'assets/imgs/light-year.jpg',
		},
	];

	var number = 20;
	var userChoice = '';
	var intervalId;
	var winCount = 0;
	var lossCount = 0;
	var correctAnswer = options.correctAnswer;
	//JOE ADD
	currentQuestionIndex = 0;

	$('.card-header').hide();
	$('.card-body').hide();
	$('#list').hide();
	$('#question').hide();
	$('#timer').hide();
	$('.picture').hide();
	$("#resetbutton").hide();

	$('#playbutton').click(function(play) {
		$('.card-header').show();
		$('.card-body').show();
		$('#list').show();
		$('#question').show();
		$('#timer').show();
		$("#resetbutton").show();
	});

	$('#playbutton').on('click', run);

	function run() {
		number = 20;
		intervalId = setInterval(decrement, 1000);
		console.log(intervalId, decrement)
		displayQuestion();
	}

	function decrement() {
		number--;
		var i = (options[3]);
		correctAnswer = options[currentQuestionIndex].correctAnswer;
		$('#timer').html('<h2>' + number + '</h2>');

		if (number === 0) {
			stop();
			alert("Time's Up! The correct answer is ");
			displayPicture(options[currentQuestionIndex].photo);
			lossCount ++;
			$("#loss-count").text(lossCount);
		}
		
	}

	function stop() {
		clearInterval(intervalId);
	}

	function displayQuestion() {
		$('.picture').hide();
		var i = Math.floor(Math.random() * options.length);
		//JOE ADD - for keeping track of what questions we're on
		currentQuestionIndex = i;
		var q = options[i];

		console.log(q);
		$('#question').text(q.question);
		$('#list').empty();

		for (var i = 0; i < q.choice.length; i++) {
			var item = $('<button>').text(q.choice[i]);
			item.addClass("answerOption")
			//JOE ADD - adding the choice as a value to the button
			item.val(q.choice[i]);
			$('#list').append(item);
		}

		$('.answerOption').on('click', pick);
		
	}

	function pick() {
		//JOE ADD - get the right answer loaded for the currentQuestion
		correctAnswer = options[currentQuestionIndex].correctAnswer;
		//JOE ADD - capture the value of the picked answer
		clickedAnswer = $(this).text();
		console.log(currentQuestionIndex,correctAnswer,clickedAnswer);
		//compare them
		if (clickedAnswer === correctAnswer) {
			winCount ++;
			alert("Yup");
			displayPicture(options[currentQuestionIndex].photo);
			$("#win-count").text(winCount);
		} else {
			lossCount ++;
			alert("nope");
			displayPicture(options[currentQuestionIndex].photo);
			$("#loss-count").text(lossCount);
		}
		stop();
	}

	function displayPicture(thisPicture) {
		$(".picture").empty();
		$(".picture").append($("<img>").attr("src", thisPicture));
		$(".picture").show();
		setTimeout( displayQuestion
			, 3000);
	}

	$('#resetbutton').click(function(reset) {
		$('.card-header').hide();
		$('.card-body').hide();
		$('#list').hide();
		$('#question').hide();
		$('#timer').hide();
		$('.picture').hide();
		$('#resetbutton').hide();
		stop();
	});

});
