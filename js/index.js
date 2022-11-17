var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    event.preventDefault();

    var tr = document.createElement('tr'); //cria um elemento tr no DOM

    campos.forEach(function(campo) {

        var td = document.createElement('td'); //cria um elemento td em cada campos
        td.textContent = campo.Value;
        tr.appendChild(td); //adiciona um 'filho' - um td no tr

    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = ''; //zera o valor do primeiro form após o submit
    campos[1].value = 1; //retorna o valor do segundo campo para 1
    campos[2].value = 0;

    campos[0].focus();


});