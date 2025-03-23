const getCSV = require('./getCSV')

async function loadData() {
    try {
        const catalogo = await getCSV('./csv/Catalogo.csv');
        const reservas = await getCSV('./csv/Reservas.csv');

        catalogo.forEach(imovel => {
            imovel.capacidade_de_pessoas = parseInt(imovel.capacidade_de_pessoas);
        });

        reservas.forEach(reserva => {
            reserva.data_de_entrada = new Date(reserva.data_de_entrada);
            reserva.data_de_saida = new Date(reserva.data_de_saida);
            reserva.numero_de_pessoas = parseInt(reserva.numero_de_pessoas);
        });

        return { catalogo, reservas };
    } catch (err) {
        console.log("Erro ao carregar:", err);
        throw err;
    }
}

module.exports = loadData;