class Negociacao {

    constructor() {

        this.data = new Date();
        this.quantidade = 1;
        this.valor = 0.0;

    }

};

//toda classe que tem um construtor, só pode ser envocada com um new
//o new torna o this correspondente ao objeto criado
//a função acima só será chmada se houver o new