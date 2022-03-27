console.log(this);

function Human(name) {
  this.name = name;
}

new Human('coffeemori');

function sayName() {
  console.log(this.name);
}

function add(a, b) {
  return a + b;
}

// apply는 매개변수를 배열로 전달
add.apply(null, [3, 5]);
// call은 매개변수를 하나씩 전달
add.call(null, 3, 5);

sayName();
// this를 바꿔서 새로운 함수 생성
sayName.bind({ name: 'coffeemori1' })();
// this를 바꾸서 새로운 함수 생성 및 실행
sayName.apply({ name: 'coffeemori2' });
// this를 바꾸서 새로운 함수 생성 및 실행
sayName.call({ name: 'coffeemori3' });

const obj = {
  name: 'coffeemori',
  sayName: () => {
    console.log(this.name);
  },
};
obj.sayName();

const obj2 = {
  name: 'coffeemori',
  sayName() {
    console.log(this.name);
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

obj2.sayName();

// this는 호출할때 정해진다.
const obj3 = {
  name: 'coffeemori',
  sayName() {
    console.log(this.name);
    const inner = () => {
      console.log(this.name);
    };
    inner();
  },
};

obj3.sayName();

const sayN = obj3.sayName;
sayN();

const header = {
  addEventListener: function (eventName, callback) {
    callback.call(this);
    // callback.call(header);
  },
};

header.addEventListener('click', function () {
  console.log(this);
});
