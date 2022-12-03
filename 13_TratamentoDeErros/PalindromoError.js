

function verificaPalidromo (string) {
    try {
        if (typeof(string) !== 'string' ) 
            throw new TypeError('não é uma string');
        if(string === string.split('').reverse().join(""))
            return console.log('É um palindromo');
            else
                return console.log('não é um palindromo');
    } catch (e) {
        console.log(e.message);
        console.log('Esse erro é um TypeError');
    }
}
(verificaPalidromo(10))