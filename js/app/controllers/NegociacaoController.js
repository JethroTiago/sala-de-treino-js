class NegociacaoController {

    adiciona(event) {
        event.preventDefault();
        let inputData = document.querySelector('#data');
        let inputQUantidade = document.querySelector('#quantidade');
        let inputValor = document.querySelector('#valor');

        console.log(inputData.value);
        console.log(inputQUantidade.value);
        console.log(inputValor.value);
    }

}