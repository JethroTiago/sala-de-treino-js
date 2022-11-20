class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }

};

//toda classe que tem um construtor, só pode ser envocada com um new
//o new torna o this correspondente ao objeto criado
//a função acima só será chmada se houver o new