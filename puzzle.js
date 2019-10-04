// Реализация логики игры "Загадки"
		var score = 0;

		function checkAnswer(inputId, answers) {
			var userAnswer = document.getElementById(inputId).value;
			userAnswer = userAnswer.toLowerCase();
			for (var i = 0; i < answers.length; i++) {
				if (userAnswer == answers[i]) {
					score++;
					break;
				}
			}
		}

		function checkAnswers() {

			checkAnswer("userAnswer1", ["Муха", "муха"]);
			checkAnswer("userAnswer2", ["нисколько", "ноль", "0"]);
			checkAnswer("userAnswer3", ["18 лет", "восемнадцать", "18"]);

			alert("Вы отгадали " + score + " загадок");
        }