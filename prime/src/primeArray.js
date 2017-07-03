function getPrimes(number){let primeArray=[],x=2;
for(x;x<number;x++){
if(x===2){primeArray.push(2)};
if(x===3){primeArray.push(3)};
if(x===5){primeArray.push(5)};
if(x===7){primeArray.push(7)};
if(x===9){primeArray.push(9)};

if( (x%2 !== 0 ) && (x%3 !== 0 ) && (x%5 !== 0 ) && (x%7 !== 0 ) && (x%9 !== 0 ) && (x%x!==1)){primeArray.push(x)}
}
return primeArray
}
module.exports = getPrimes



