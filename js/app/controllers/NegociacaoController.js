class NegociacaoController {

    constructor() {

        let $ = document.querySelector;
        this.inputData = $('#data');
        this.inputQUantidade = $('#quantidade');
        this.inputValor = $('#valor');
        
    }
    
    adiciona(event) {

        event.preventDefault();

        console.log(this.inputData.value);
        console.log(this.inputQUantidade.value);
        console.log(this.inputValor.value);
    }
}