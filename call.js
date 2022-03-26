const add = (a, b) => a + b;

function calculater(func, a, b) {
    return func(a, b);
}

const onClick = () => (event) => console.log('hello');

console.log(calculater(add, 3, 5));

document.querySelector('#header').addEventListener('click', onClick());
