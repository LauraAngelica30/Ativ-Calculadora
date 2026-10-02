function soma() {
    const inputNum1 = document.querySelector("#primeiroNum")
    const inputNum2 = document.querySelector("#segundoNum")
    const resultado = document.querySelector("#resultado")

    if (inputNum1.value === "" || inputNum2.value === "") {
        resultado.textContent = "Digite um número."
    }
    else{
        const soma = Number(inputNum1.value) + Number(inputNum2.value)
        resultado.textContent = `Resultado: ${soma}`
    }
}

function subtracao() {
    const inputNum1 = document.querySelector("#primeiroNum")
    const inputNum2 = document.querySelector("#segundoNum")
    const resultado = document.querySelector("#resultado")

    if (inputNum1.value === "" || inputNum2.value === "") {
        resultado.textContent = "Digite um número."
    }
    else{
        const subtracao = Number(inputNum1.value) - Number(inputNum2.value)
        resultado.textContent = `Resultado: ${subtracao}`
    }
}

function multiplicacao() {
    const inputNum1 = document.querySelector("#primeiroNum")
    const inputNum2 = document.querySelector("#segundoNum")
    const resultado = document.querySelector("#resultado")

    if (inputNum1.value === "" || inputNum2.value === "") {
        resultado.textContent = "Digite um número."
    }
    else{
        const multiplicacao = Number(inputNum1.value) * Number(inputNum2.value)
        resultado.textContent = `Resultado: ${multiplicacao}`
    }
}

function divisao() {
    const inputNum1 = document.querySelector("#primeiroNum")
    const inputNum2 = document.querySelector("#segundoNum")
    const resultado = document.querySelector("#resultado")

    if (inputNum1.value === "" || inputNum2.value === "") {
        resultado.textContent = "Digite um número."
    }
    else{
        const divisao = Number(inputNum1.value) / Number(inputNum2.value)
        resultado.textContent = `Resultado: ${divisao}`
    }
}

function limpar() {
    const resultado = document.querySelector("#resultado")
    const inputNum1 = document.querySelector("#primeiroNum")
    const inputNum2 = document.querySelector("#segundoNum")

    resultado.remove()
    inputNum1.value = ""
    inputNum2.value = ""
}