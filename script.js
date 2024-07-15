const outputDiv = document.getElementById('output');

// Usa um loop for para imprimir os números de 1 a 10
for (let i = 1; i <= 10; i++) {
    // Cria um elemento de parágrafo para cada número
    const p = document.createElement('p');
    p.textContent = i;
    // Adiciona o parágrafo ao div de saída
    outputDiv.appendChild(p);
}