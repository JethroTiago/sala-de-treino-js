class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQUantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {

        event.preventDefault();

        let data = new Date(
            ...this._inputData.value
                .split('-')//o '...' é o Spread operator
                .map((item, indice) => item - indice % 2)
            );

        console.log(data);

    }
}