// let name = prompt('imya')
// let familiya = prompt('familiya')
// let email = name + familiya + '@gmail.com'
// console.log(email);

let result = '';
let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
let max_position = words.length - 1;
    for( i = 0; i < 10; ++i ) {
        position = Math.floor ( Math.random() * max_position );
        result = result + words.substring(position, position + 1);
    }
    
let id = Math.random() + result
console.log(id);
