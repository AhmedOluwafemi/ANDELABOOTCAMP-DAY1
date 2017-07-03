const assert= require('chai').assert;
const myApp= require('../src/primeArray.js');
describe('handle valid input',function(){
	it('should return [2,3] for input 5 ',function(){
		assert.deepEqual(myApp(5),[2,3])
	})
})	
describe('handle valid input',function(){
	it('should return [2,3,5,7,9] for input 10',function(){
		assert.deepEqual(myApp(10),[2,3,5,7,9])
	})
})
describe('handle valid input',function(){
	it('should return [2,3] for input 5 ',function(){
		assert.deepEqual(myApp(5),[2,3])
	})
})		
describe('handle invalid input negative number',function(){
	it('should return empty array' ,function(){
		assert.deepEqual(myApp(-1),[])
	})
})	

//describe('handle valid input',()=>{it('should return [2,3,5,7,9] as primeset for 10',function(){assert.equal(myApp.getPrimes(10),[2,3,5,7,9])}})	