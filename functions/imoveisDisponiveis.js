function imoveisDisponiveis(imoveis, reservas, numeroDePessoas, dataDeEntrada, dataDeSaida) {
    return imoveis.filter(imovel => {
        if (imovel.capacidade_de_pessoas >= numeroDePessoas) {
            const conflito = reservas.some(reserva => {
                return reserva.codigo_do_imovel === imovel.codigo_do_imovel &&
                    dataDeEntrada <= reserva.data_de_saida &&
                    dataDeSaida >= reserva.data_de_entrada;
            });
            return !conflito;
        }
        return false;
    });
}

module.exports = imoveisDisponiveis;