
if (document.getElementById("soma"))
{
    document.getElementById("soma").addEventListener("submit", soma);
    function soma(event) {
        event.preventDefault();
        const n1 = document.getElementById("n1").value;
        const n2 = document.getElementById("n2").value;
        if (n1 !== '' && !isNaN(n1, n2) && n2 !== '') {
            resultadoN = parseInt(n1) + parseInt(n2);
            document.getElementById("resultado").innerHTML = `${resultadoN}`;
        } else {
            window.alert('Um dos valores está em branco');
        }
    }
};

if (document.getElementById("impparF"))
{
    document.getElementById("impparF").addEventListener("submit", imppar);
    function imppar (event) {
        event.preventDefault();
        const n1 = document.getElementById("n1").value;
        if (n1 !== '' && !isNaN(n1)) {
            if (n1 % 2) {
                window.alert("ímpar")
            } else {
                window.alert("Par")
            }
        } else {
            window.alert('Valor em branco');
        }
    }
};

if (document.getElementById("forzin")) {
    document.getElementById("forzin").addEventListener("submit", ItoX);
    function ItoX(event) {
        event.preventDefault();
        const fieldset = document.getElementById("numerosFieldset");
        fieldset.innerHTML = '';
        for (let i = 0; i <= 10; i++) {
            const numberElement = document.createElement("span");
            numberElement.textContent = i;
            fieldset.appendChild(numberElement);
            fieldset.appendChild(document.createElement("br"));
        }
    }
};

if (document.getElementById("tabuadaForm")) {
    document.getElementById("tabuadaForm").addEventListener("submit", tabuadaF);
    function tabuadaF(event) {
        event.preventDefault();
        const fieldset = document.getElementById("tabuadaFieldset");
        const n1 = document.getElementById("n1").value; 

        if (n1) {
            fieldset.innerHTML = '';
            for (let i = 1; i <= 10; i++) {
                const numberElement = document.createElement("span");
                numberElement.textContent = `${n1} x ${i} = ${n1 * i}`;
                fieldset.appendChild(numberElement);
                fieldset.appendChild(document.createElement("br"));
            }
        } else {
            alert('Por favor, insira um número válido.');
        }
    }
};

if (document.getElementById("numeroForm")) {
    document.getElementById("numeroForm").addEventListener("submit", maiores);
    
    function maiores(event) {
        event.preventDefault();
        const input = document.getElementById("numeros").value;
        const numeros = input.split(',').map(Number);
        let maior = numeros[0];
        for (let num of numeros) {
            if (num > maior) {
                maior = num;
            }
        }
        window.alert(`O maior número é ${maior}`);
        }
};

if (document.getElementById("invertForm")) {
    document.getElementById("invertForm").addEventListener("submit", inverter);

    function inverter(event) {
        event.preventDefault();
        let palavra = document.getElementById("palavra").value;
        let palavraInvertida = '';

        for (let i = palavra.length - 1; i >= 0; i--) {
            palavraInvertida += palavra[i];
        }
        window.alert(palavraInvertida)
    }
};

if (document.getElementById("numeroSomaForm")) {
    document.getElementById("numeroSomaForm").addEventListener("submit", somarNumeros);

    function somarNumeros(event) {
        event.preventDefault();
        const input = document.getElementById("numeros").value;
        if (input.trim() === "") {
            window.alert("Por favor, insira números válidos.");
            return;
        }

        const numeros = input.split(',').map(Number);
        let resultado = 0;

        for (let num of numeros) {
            resultado += num;
        }

        window.alert(`A soma dos números é ${resultado}`);
    }
};

if (document.getElementById("primoForm")) {
    document.getElementById("primoForm").addEventListener("submit", primos);

    function primos(event) {
        event.preventDefault();
        let n1 = parseInt(document.getElementById("numero").value, 10);
        let ehPrimo = true;

        if (isNaN(n1) || n1 <= 1) {
            window.alert("Por favor, insira um número válido maior que 1.");
            return;
        }

        for (let i = 2; i < n1; i++) {
            if (n1 % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            window.alert("É primo");
        } else {
            window.alert("Não é primo.");
        }
    }
};

if (document.getElementById("fatorialForm")) {
    document.getElementById("fatorialForm").addEventListener("submit", fatoriar);

    function fatoriar(event) {
        event.preventDefault();
        let base = parseFloat(document.getElementById("base").value);
        let fatorial = parseFloat(document.getElementById("fatorial").value);

        if (isNaN(base) || isNaN(fatorial)) {
            window.alert("Por favor, insira valores numéricos válidos.");
            return;
        }

        if (base < 0 || fatorial < 0) {
            window.alert("Por favor, insira números não negativos.");
            return;
        }

        if (base === 0 && fatorial === 0) {
            window.alert("Base 0 e expoente 0 não é uma operação válida.");
            return;
        }

        let resultado = base ** fatorial;

        window.alert(`Resultado: ${resultado}`);
    }
};

if (document.getElementById("palindromoForm")) {
    document.getElementById("palindromoForm").addEventListener("submit", palindromes) 
        function palindromes (event) {
            event.preventDefault(); 
            let palavra = document.getElementById("palavra").value;

            if (!isNaN(palavra)) {
                window.alert("Por favor, insira uma palavra válida.");
                return;
            }

            let palavraInvertida = '';
            for (let i = palavra.length - 1; i >= 0; i--) {
                palavraInvertida += palavra[i];
            }

            if (palavra === palavraInvertida) {
                window.alert("Palíndromo");
            } else {
                window.alert("Não é palíndromo");
            };
        }     
};

if (document.getElementById("vogalForm")) {
    document.getElementById("vogalForm").addEventListener("submit", contarVogais);

    function contarVogais(event) {
        event.preventDefault();
        let palavra = document.getElementById("palavra").value;
        let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        let contador = 0;

        for (let i of palavra) {
            if (vogais.includes(i)) {
                contador++;
            }
        }

        window.alert(`A palavra contém ${contador} vogais.`);
    }
};

if (document.getElementById("randomForm")) {
    document.getElementById("randomForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        window.alert(`Número Aleatório: ${numeroAleatorio}`);
    });
};

if (document.getElementById("negativoForm")) {
    document.getElementById("negativoForm").addEventListener("submit", notnegativo);
    
    function notnegativo(event) {
        event.preventDefault();
        const input = document.getElementById("numeros").value;
        const numeros = input.split(',').map(Number);
        let semnega = [];

        for (let num of numeros) {
            if (num < 0) {
                semnega.push(0);
            } else {
                semnega.push(num);  
            }
        }

        window.alert(`Sem negativos: ${semnega}`);
    }
};

if (document.getElementById("proibidasForm")) {
    document.getElementById("proibidasForm").addEventListener("submit", proibidao);
    
    function proibidao(event) {
        event.preventDefault();
        const frase = document.getElementById("frase").value;
        const palavrasProibidas = ['zezao', 'kaique']; 
        let naoPode = false;

        for (let palavra of palavrasProibidas) {
            if (frase.includes(palavra)) {
                naoPode = true;
                break;
            }
        }

        if (naoPode) {
            window.alert("A frase contém palavras proibidas.");
        } else {
            window.alert("A frase não contém palavras proibidas.");
        }
    }
};

if (document.getElementById("npForm")) {
    document.getElementById("npForm").addEventListener("submit", parXX);
    
    function parXX(event) {
        event.preventDefault();
        const fieldset = document.getElementById("npFieldset");
        fieldset.innerHTML = '';
        for (let i = 1; i <= 20; i++) {
            if (i % 2 === 0) {
                const numberElement = document.createElement("span");
                numberElement.textContent = i;
                fieldset.appendChild(numberElement);
                fieldset.appendChild(document.createElement("br"));
            }
        }
    }
}
