$(document).ready(function () {

    var questions = [
        "What was the average life expectancy of white males born in the US just before the Civil War?",
        "What is a shaddock?",
        "Which one of the following instruments is used to measure humidity?",
        "Which two planets are most similar in size diameter wise?",
        "If a hertz is equal to one cycle per five seconds, how many cycles per second does a megahertz equal?",
        "What principle explains why cold food warms up and hot food cools off when stored at room temperature?",
        "Which color is not considered to be one of the additive primary colors of light?",
        "What causes the disease toxoplasmosis?",
        "What is the slowest wind speed a hurricane can have according to the Saffir-Simpson scale?",
        "Which of the following heavenly bodies has never had a spacecraft landed on it?",
        "Meat should be kept frozen at what temperature in degrees Fahrenheit?",
        "Many scientists think that some of the dinosaures did not go extinct, but rather evolved into what kind of creature?",
        "In 1989, scientists from Norway discovered that there are far more viruses in oceans, lakes, and streams than previously believed. How many viruses did they find that a milliliter of natural water might contain?",
        "In which kind of geometry is the sum of the angles inside a triangle exactly equal to 180 degrees?",
        "What is the name of the disease that has been referred to as the 'disease of kings?",
        "What disease causes a buildup of fluid pressure in the eyeball and damages the optic nerve at the back of the eye?",
        "What would be the most likely thing one would do with the compound MgSO4 7H2O?",
        "Amps are a unit of meaasurement of what?",
        "In which century was the greatest number of chemical elements discovered?",
        "Louis Pasteur developed which vaccine?"];
    var answerA = ["40 years", "a grapefruit", "hygrometer", "Venus and Earth", "1,000,000", "entropy", "yellow", "a protozoan", "74 mph", "Jupiter", "0 degrees or below", "birds", "up to 250,000,000", "Euclidean", "hemophilia", "glaucoma", "soak one's feet", "electric current", "19th", "rabies"];
    var answerB = ["50 years", "a fish, the offspring of a male shad and a female haddock", "anamometer", "Mars and Mercury", "1/1,000", "chemical equilibrium", "red", "a bacterium", "50 mph", "Venus", "between 10 and 20 degrees", "amphibians", "up to 250", "elliptical", "jaundice", "astigmatism", "power a car", "electric charge", "17th", "polio"];
    var answerC = ["60 years", "a crystal, such as quartz, that sticks out from a mineral vein", "ammeter", "Uranus and Neptune", "1,000", "momentum", "green", "a virus", "96 mph", "Mars", "between 20 and 30 degrees", "reptiles", "up to 25,000", "hyperbolic", "rubella", "cataracts", "blow up a building", "electric field strength", "18th", "smallpox"];
    var answerD = ["70 years", "a plant that is a member of the nightshade family", "barometer", "Jupiter and Saturn", "1,000,000,000", "relativity", "blue", "a prion", "110 mph", "the moon", "just below 32 degrees", "mammals", "up to 2,500,000", "linear", "syphilis", "retinitis", "fertilize a lawn", "electric potential", "20th", "anthrax"];
    var question = "";
    var randomA = "";
    var randomB = "";
    var randomC = "";
    var randomD = "";
    var currentScore = 0;
    var pointsAvailable = 100;
    var correctAnswer = "";
    var intervalId = 0;
    var nextQuestion = 0;
    var right = 0;
    var wrong = 0;
    var main = -1;

    var grid = function () {

        // console.log(nextQuestion);
        // console.log(currentScore);

        main++;
        console.log("main: " + main);

        //checks to see if reached last question
        if (nextQuestion > questions.length) {
            $("#pointsAvailable").text("Game over");
            stop();
            return;
        }
        var randomPop = [];
        pointsAvailable = 100;

        //erases correct/incorrect
        $("#result").text("");

        //stores the question and correct answer
        question = questions[nextQuestion];
        correctAnswer = answerA[nextQuestion];

        //randomizes the choices
        randomPop.push(answerA[nextQuestion]);
        randomPop.push(answerB[nextQuestion]);
        randomPop.push(answerC[nextQuestion]);
        randomPop.push(answerD[nextQuestion]);
        var temp = Math.floor(Math.random() * randomPop.length);
        randomA = randomPop[temp];
        randomPop.splice(temp, 1);
        var temp = Math.floor(Math.random() * randomPop.length);
        randomB = randomPop[temp];
        randomPop.splice(temp, 1);
        var temp = Math.floor(Math.random() * randomPop.length);
        randomC = randomPop[temp];
        randomPop.splice(temp, 1);
        var temp = Math.floor(Math.random() * randomPop.length);
        randomD = randomPop[temp];
        randomPop.splice(temp, 1);

        //displays question and choices
        $("#question").text(question);
        $("#choiceA").text(randomA);
        $("#choiceB").text(randomB);
        $("#choiceC").text(randomC);
        $("#choiceD").text(randomD);
        $("#currentScore").text(currentScore);

        //starts the clock
        setTimeout(run, 3000);
    }



    //controls countdown and accepts/processes user clicks
    function run() {
        stop();
        intervalId = setInterval(decrement, 1000);

        $("#choiceA").click(function () {
            if (randomA === correctAnswer) {
                console.log(correctAnswer)
                rightAnswer();
            } else {
                wrongAnswer();
            }
        });

        $("#choiceB").click(function () {
            if (randomB === correctAnswer) {
                rightAnswer();
            } else {
                wrongAnswer();
            }
        });

        $("#choiceC").click(function () {
            if (randomC === correctAnswer) {
                rightAnswer();
            } else {
                wrongAnswer();
            }
        });

        $("#choiceD").click(function () {
            if (randomD === correctAnswer) {
                rightAnswer();
            } else {
                wrongAnswer();
            }
        });
    }

    //does the actual countdown
    var decrement = function () {
        pointsAvailable--;
        $("#pointsAvailable").html(pointsAvailable);
        if (pointsAvailable <= 0) {
            stop();
            $("#pointsAvailable").text("Time's Up!");
            console.log("nextQuestion from time up" + nextQuestion);
            grid();
        }
    }


    function stop() {
        clearInterval(intervalId);
    }

    //displays correct/incorrect and restarts the question function
    var right = 0;
    var rightAnswer = function () {
        right++;
        console.log("right: " + right);
        $("#result").text("Correct");
        currentScore += pointsAvailable;
        $('#currentScore').text(currentScore);
        // console.log("Current score " + currentScore);
        nextQuestion++;
        grid();
    }   

    var wrongAnswer = function () {
        wrong++;
        console.log("wrong: " + wrong);
        $("#result").text("Incorrect");
        nextQuestion++;
        grid();
    }
    grid();
});