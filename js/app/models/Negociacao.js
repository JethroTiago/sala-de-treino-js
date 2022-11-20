class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;

    }

    obtemVolume() {
        return this.quantidade * this.valor;
    }

};

//toda classe que tem um construtor, só pode ser envocada com um new
//o new torna o this correspondente ao objeto criado
//a função acima só será chmada se houver o new
//se uma função é criada dentro de uma classe, ela é chamada de MÉTODO