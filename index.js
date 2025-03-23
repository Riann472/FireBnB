const readline = require('readline');
const loadData = require('./functions/loadData');
const imoveisDisponiveis = require('./functions/imoveisDisponiveis')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function main() {
    let dados;
    try {
        dados = await loadData();
    } catch (err) {
        console.log('Erro no sistema:', err);
    }

    rl.question("Quantidade de pessoas: ", (n_pessoas) => {
        rl.question("Data de entrada (YYYY-MM-DD): ", (data_entrada) => {
            rl.question("Data de entrada (YYYY-MM-DD): ", (data_saida) => {
                const disponiveis = imoveisDisponiveis(dados.catalogo, dados.reservas, parseInt(n_pessoas), new Date(data_entrada), new Date(data_saida))

                console.log(disponiveis)
                rl.close()
            })
        })
    })

}

main();