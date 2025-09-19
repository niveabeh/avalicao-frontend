// 1 - Validação (Condicional):
// ● O campo não poderá ficar vazio. ooook
// ● O campo deve aceitar números inteiros. oook
// ● Caso o usuário digite algo inválido, exibir uma mensagem de erro. ook

let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");
let alertainput = document.getElementById("alertainput");
let btn = document.getElementById("btn");
let lista = document.querySelector("ul");

let vetorNumero = [];
let matriz = [];
const regexnumero = /^\d+$/;


btn.addEventListener("click", (e) => {

    e.preventDefault();
    
    const valorNumero = numero.value;

    if (numero.value == "") {
        
        alertainput.innerText = 'Erro: campo vazio!';

    } else if (!regexnumero.test(valorNumero)) {
        alertainput.innerText = 'Somente números inteiros';

    } else {
        if (valorNumero !== "") {

            alertainput.innerText = "";  

            vetorNumero.push(parseInt(valorNumero));

            let li = document.createElement("li");

            li.innerText = valorNumero;

            let btnRemover = document.createElement("button");

            btnRemover.innerText = "❌";

            btnRemover.style.marginLeft = "10px";
            btnRemover.style.cursor = "pointer";
            btnRemover.style.borderradius = "8px";
            btnRemover.style.border = "none";

            btnRemover.addEventListener("click", () => {
                lista.removeChild(li);
            });

            li.appendChild(btnRemover);
            lista.appendChild(li);
            lista.value = "";

            let guardarnumero;
            let primeiroLugar = document.getElementById("primeiroLugar");
            let contadorNumero = 0;
            
            
            for(let i = 0; i < vetorNumero.length; i++){

                if(vetorNumero[i] > vetorNumero [i-1]){
                    console.log("entrou no rank")
                    guardarnumero = vetorNumero[i]
                    contadorNumero++
                    primeiroLugar.innerText = `${ guardarnumero }`;
                }
            }
            if(numero.value > numero.value){

            }

            // fazer depois


            const menorNumero = document.getElementById("menorNumero");
            let qddNum = document.getElementById("qddNum");

            let guardarMenorNum = 0;
            let trocarnome = 0;

            for (let i = 0; i < vetorNumero.length; i++) {
                contadorNumero++
                qddNum.innerText = `${contadorNumero}`;
            }

            // fazer depois

            // maior numero
            let valor = 0;
            const maiorNumero = document.getElementById("maiorNumero");
            for (let i = 0; i < vetorNumero.length; i++) {
                    valor = parseInt(vetorNumero[i])
                if (vetorNumero[i] > vetorNumero [i-1]) {
                    guardarMenorNum = vetorNumero[i];
                    maiorNumero.innerText = `${guardarMenorNum}`
                    console.log("entrou");
                    console.log(guardarMenorNum);
                }

            }
            // soma
        
            for (let i = 0; i < vetorNumero.length; i++) {

                if (vetorNumero[i - 1] > vetorNumero[i]) {
                    guardarMenorNum = vetorNumero[i];
                    maiorNumero.innerText = `${guardarMenorNum}`
                    console.log("entrou");
                    console.log(guardarMenorNum);
                } else {

                }

            }
            let soma = document.getElementById("soma");
            let somando = 0;

            for (let i = 0; i < vetorNumero.length; i++) {
                somando += parseInt(vetorNumero[i]);
                soma.innerText = `${somando}`
            }

            let media = document.getElementById("media");
            let calmedia; 
            let cont = 0;
            for (let i = 0; i < vetorNumero.length; i++) {
                cont++
                calmedia = somando / cont;
                media.innerText = `${calmedia}`
            }

            //matriz

            let celulaA = document.getElementById("celulaA");
            let celulaAB = document.getElementById("celulaAB");
            let celulaBA = document.getElementById("celulaBA");
            let celulaBB = document.getElementById("celulaBB");

            for (let i = 0; i < 2; i++) {

                matriz[i] = [];
                matriz[i] = numero.value;
          
                for (let y = 0; y < 2; y++) {
          
                   matriz[i][y] = parseFloat(numero.value) * 2;
                    if( matriz){

                    }
                    //fazer depois
                    //como que imprime no html aaaaaaaaaaaaaaaaaa
                
        
                }
            }
            
        }
    }
})


// - Armazenamento em Vetor:
//  Cada número digitado deve ser armazenado em um vetor . ok
//  Mostrar a lista dos números mais inseridos.


// Estruturas de repetição:
//  Calcule e mostre:
//  A quantidade de números digitados. ok
//  O maior e o menor número.
//  A soma de todos os números. ok
//  A média dos números. ok


// Uso de Matriz:
//  Crie uma matriz 2 x 2.
//  Na primeira linha, armazene os números originais.
//  Na segunda linha, armazene o quadrado de cada número.
//  Exiba essa matriz em forma de tabela na página.


