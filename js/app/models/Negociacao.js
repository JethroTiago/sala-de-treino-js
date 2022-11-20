class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

};

//toda classe que tem um construtor, só pode ser envocada com um new
//o new torna o this correspondente ao objeto criado
//a função acima só será chmada se houver o new
//se uma função é criada dentro de uma classe, ela é chamada de MÉTODO
//o underline é uma convenção que diz que estas propriedades não podem ser acessadas