document.addEventListener('DOMContentLoaded', () => {

    var firstNumbers = "";
    var secondNumbers = "";
    var multiplier = "";

    document.querySelectorAll('.number-button').forEach(button => {
        button.onclick = () => {
            if (button.innerHTML === "C") {
                if (secondNumbers.length > 0) {
                    secondNumbers = "";
                    document.getElementById('screen-text').innerHTML = "";
                } else if (multiplier !== "") {
                    multiplier = "";
                    document.getElementById('small-screen-text').innerHTML = firstNumbers;
                } else if (firstNumbers.length > 0) {
                    firstNumbers = "";
                    document.getElementById('screen-text').innerHTML = "";
                }
            } else if (button.innerHTML === "=") {
                {
                    if (firstNumbers.length > 0 && secondNumbers.length > 0 && multiplier.length > 0) {
                        var firstFloat = parseFloat(firstNumbers);
                        var secondFloat = parseFloat(secondNumbers);
                        var answer;
                        switch (multiplier) {
                            case "+":
                                answer = firstFloat + secondFloat;
                                break;
                            case "-":
                                answer = firstFloat - secondFloat;
                                break;
                            case "*":
                                answer = firstFloat * secondFloat;
                                break;
                            case "/":
                                answer = firstFloat / secondFloat;
                                break;
                        }
                        document.getElementById('small-screen-text').innerHTML = firstNumbers + " " + multiplier + " " + secondNumbers;
                        if (answer.length > 7) {
                            document.getElementById('screen-text').setAttribute('class', 'screen-text-small');
                        }
                        document.getElementById('screen-text').innerHTML = answer;
                        multiplier = "";
                        firstNumbers = "";
                        secondNumbers = "";
                    }
                }
            } else if (button.innerHTML === "+" ||
                button.innerHTML === "-" ||
                button.innerHTML === "*" ||
                button.innerHTML === "/" && firstNumbers.length > 0) {
                if (multiplier === "") {
                    multiplier = button.innerHTML;
                    document.getElementById('small-screen-text').innerHTML = firstNumbers + " " + multiplier;
                } else {
                    if (firstNumbers.length > 0 && secondNumbers.length > 0 && multiplier.length > 0) {
                        var firstFloat = parseFloat(firstNumbers);
                        var secondFloat = parseFloat(secondNumbers);
                        var answer;
                        switch (multiplier) {
                            case "+":
                                answer = firstFloat + secondFloat;
                                break;
                            case "-":
                                answer = firstFloat - secondFloat;
                                break;
                            case "*":
                                answer = firstFloat * secondFloat;
                                break;
                            case "/":
                                answer = firstFloat / secondFloat;
                                break;
                        }
                        document.getElementById('small-screen-text').innerHTML = firstNumbers + " " + multiplier + " " + secondNumbers;

                        document.getElementById('screen-text').innerHTML = answer;
                        multiplier = "";
                        firstNumbers = "";
                        secondNumbers = "";
                    }
                }
            } else if (multiplier === "") {
                if (firstNumbers.length < 12) {
                    firstNumbers += button.innerHTML;
                };
                if (firstNumbers.length > 7) {
                    document.getElementById('screen-text').setAttribute('class', 'screen-text-small');
                };

                document.getElementById('screen-text').innerHTML = firstNumbers;
            } else if (button.innerHTML != "C") {
                if (secondNumbers.length < 12) {
                    secondNumbers += button.innerHTML;
                };
                if (secondNumbers.length > 7) {
                    document.getElementById('screen-text').setAttribute('class', 'screen-text-small');
                };

                document.getElementById('screen-text').innerHTML = secondNumbers;
            }
        };
    });
})