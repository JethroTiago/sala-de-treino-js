class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
        Object.freeze(this); //congela a instância n1, impedindo alteração do valor que já foi previamente estabelecido.

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
//o get (geter) torna a propriedade somente leitura - um valor não pode ser atribuido 
//(no html, foi tentado atribuir 1000, mas isso não acontece por causa do get)
//(se utilizar o underline no inicio, o valor poderá ser alterado)