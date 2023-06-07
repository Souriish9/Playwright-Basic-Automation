var c=[]

c.push(5)
c.push('Meow')
c.push([4,5])
c.push(6)

console.log(c)

c.pop()
console.log(c)

c.unshift('Hello')

console.log(c)

console.log(c.indexOf('Meow'))
console.log(c.includes(5))

var marks=[4,5,6,2,7]
//Reduce function
var total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total);

//Filter function
var evenScores=marks.filter(mark=>mark%2==0)
console.log(evenScores)

//Map function
var thriceScores=marks.map(score=>score*3)
console.log(thriceScores)

