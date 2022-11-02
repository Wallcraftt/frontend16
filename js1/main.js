// task 1)

function getSum(a = 1, b = 2){
  console.log( a + b,false)
  console.log( b * 2 ,true)
}

getSum()

/// task 2)

function getSum2(a, b){
  console.log(2*a + 2*b)

  return 2 * a + 2* b ;
}

getSum2()


/// task 3)

function getSum3(a) {
 console.log ( a * 4 )

 return a * 4;
 
}
getSum3()

// task 4) 

function  getRandomInt(max){
  console.log(max)
  return Math.random(max = 100) 
}

// task 5) 

function getCurrencySymbolFromCode(USD){
  console.log('USD')
  return '$';
}

// tasl 6)

const myArr = [{
  name: 'Giorgi',
  age: 18,
  },
{
  name: 'alex',
  age: 28,
  },
{
  name: 'tea',
  age: 25,
  },
{
  name: 'mariami',
  age: 24,
  },
{
  name: 'zura',
  age: 30,
  }
]

myArr.find((el) => {

  return myArr.age = 18
})
console.log(myArr)
