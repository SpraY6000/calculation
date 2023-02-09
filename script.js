document.getElementById("submitButton").onclick = function() {

    firstNumber = document.getElementById("firstNumInput").value
    operator = document.getElementById("operatorInput").value
    secondNumber = document.getElementById("secondNumInput").value

    if (operator = "+") {
        summary = Number(firstNumber) + Number(secondNumber)
        document.getElementById("summaryText").innerText = summary
    }

    else if (operator = "-") {
        summary = Number(firstNumber) - Number(secondNumber)
        document.getElementById("summaryText").innerText = summary
    }

    else if (operator = "/") {
        summary = Number(firstNumber) / Number(secondNumber)
        document.getElementById("summaryText").innerText = summary
    }

    else if (operator = "*") {
        summary = Number(firstNumber) * Number(secondNumber)
        document.getElementById("summaryText").innerText = summary
    }

}