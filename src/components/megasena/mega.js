export function gerarNumeracao(qtdNumeros) {
    if (qtdNumeros > 60) return null

    const numeracao = []
    const intervalo = 60 / qtdNumeros

    for (var n = 1; n < qtdNumeros + 1; n++) {
        const numeroMinimo = (numeracao[numeracao.length - 1] || 1)
        const numeroMaximo = n * intervalo

        let numero = parseInt(((numeroMaximo - numeroMinimo) * Math.random()) + numeroMinimo)

        while (numero <= numeracao[numeracao.length - 1]) {
            numero = parseInt(Math.ceil((numeroMaximo - numeroMinimo) * Math.random()) + numeroMinimo)
        }

        numeracao.push(numero)
    }

    return numeracao
}