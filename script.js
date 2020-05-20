document.addEventListener('DOMContentLoaded', () => {

    var firstNumbers = "";
    var secondNumbers = "";
    var multiplier = "";

    document.querySelectorAll('.number-button').forEach(button => {
        button.onclick = () => {
            if (button.innerHTML === "=") {
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
                            answer.truncate(7);
                        }
                        document.getElementById('screen-text').innerHTML = answer;
                        multiplier = "";
                        firstNumbers = "";
                        secondNumbers = "";
                    }
                }
            }else
            if (button.innerHTML === "+" ||
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
                if (firstNumbers.length < 14) {
                    firstNumbers += button.innerHTML;
                };
                if (firstNumbers.length > 7) {
                    document.getElementById('screen-text').setAttribute('class', 'screen-text-small');
                };

                document.getElementById('screen-text').innerHTML = firstNumbers;
            } else {
                if (secondNumbers.length < 14) {
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