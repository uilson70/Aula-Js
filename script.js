// ═══════════════════════════════════════════════════
// 1. SELECIONAR ELEMENTOS (uma vez só!)
// ═══════════════════════════════════════════════════
let valorDisplay = document.getElementById("valor");
let btnMenos = document.getElementById("btnMenos");
let btnMais = document.getElementById("btnMais");
let btnReset = document.getElementById("btnReset");
let btnDefinir = document.getElementById("btnDefinir");
let btnTema = document.getElementById("btnTema");
let inputValor = document.getElementById("inputValor");
let status = document.getElementById("status");  // ✅ Seleciona aqui!

// ═══════════════════════════════════════════════════
// 2. VARIÁVEIS E SOM
// ═══════════════════════════════════════════════════
let contador = 0;
let somClique = new Audio("https://www.soundjay.com/button/beep-07.wav");

// ═══════════════════════════════════════════════════
// 3. FUNÇÃO: ATUALIZAR COR + STATUS
// ═══════════════════════════════════════════════════
function atualizarCor() {
    if (contador > 0) {
        valorDisplay.classList.add("valor-positivo");
        valorDisplay.classList.remove("valor-negativo", "valor-zero");
        status.textContent = "Positivo ✅";
    } else if (contador < 0) {
        valorDisplay.classList.add("valor-negativo");
        valorDisplay.classList.remove("valor-positivo", "valor-zero");
        status.textContent = "Negativo ❌";
    } else {
        valorDisplay.classList.add("valor-zero");
        valorDisplay.classList.remove("valor-positivo", "valor-negativo");
        status.textContent = "Zero ⚪";
    }
}

// ═══════════════════════════════════════════════════
// 4. FUNÇÃO: SALVAR NO NAVEGADOR
// ═══════════════════════════════════════════════════
function salvarContador() {
    localStorage.setItem("contador", contador);
}

// ═══════════════════════════════════════════════════
// 5. BOTÃO: AUMENTAR (+5)
// ═══════════════════════════════════════════════════
btnMais.addEventListener("click", function() {
    somClique.play();  // 🔊 Som
    contador = contador + 5;
    valorDisplay.textContent = contador;
    atualizarCor();
    salvarContador();  // 💾 Salva
});

// ═══════════════════════════════════════════════════
// 6. BOTÃO: DIMINUIR (-5, só se > 0)
// ═══════════════════════════════════════════════════
btnMenos.addEventListener("click", function() {
    if (contador > 0) {
        somClique.play();  // 🔊 Som
        contador = contador - 5;
        valorDisplay.textContent = contador;
        atualizarCor();
        salvarContador();  // 💾 Salva
    }
});

// ═══════════════════════════════════════════════════
// 7. BOTÃO: RESET
// ═══════════════════════════════════════════════════
btnReset.addEventListener("click", function() {
    somClique.play();  // 🔊 Som
    contador = 0;
    valorDisplay.textContent = contador;
    atualizarCor();
    salvarContador();  // 💾 Salva
});

// ═══════════════════════════════════════════════════
// 8. BOTÃO: DEFINIR VALOR
// ═══════════════════════════════════════════════════
btnDefinir.addEventListener("click", function() {
    let valorDigitado = inputValor.value;
    
    if (valorDigitado === "") {
        alert("Por favor, digite um valor!");
    } else {
        contador = parseInt(valorDigitado);
        
        if (isNaN(contador)) {
            alert("Digite apenas números!");
            contador = 0;
        }
        
        somClique.play();  // 🔊 Som
        valorDisplay.textContent = contador;
        atualizarCor();
        salvarContador();  // 💾 Salva
    }
});

// ═══════════════════════════════════════════════════
// 9. BOTÃO: TEMA CLARO/ESCURO
// ═══════════════════════════════════════════════════
btnTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");
    
    if (document.body.classList.contains("tema-escuro")) {
        btnTema.textContent = "☀️ Tema";
    } else {
        btnTema.textContent = "🌙 Tema";
    }
});

// ═══════════════════════════════════════════════════
// 10. CARREGAR VALOR SALVO AO ABRIR A PÁGINA
// ═══════════════════════════════════════════════════
let valorSalvo = localStorage.getItem("contador");
if (valorSalvo !== null) {
    contador = Number(valorSalvo);
    valorDisplay.textContent = contador;
    atualizarCor();
}

// ═══════════════════════════════════════════════════
// 11. INICIALIZAR AO CARREGAR
// ═══════════════════════════════════════════════════
atualizarCor();