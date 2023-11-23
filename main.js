function sumDivisibleBy3or5(numberArg) {
    /*
    @params()
    */
    let parsedNumber = parseInt(numberArg)

    if (isNaN(parsedNumber)) throw new TypeError("Argument must be a number")
    
    let divibleBy3or5 = [] //empty array to save numbers divisibles by 3 ou 5
    let sum = 0 // variable to save the sum value

    for (let a = 0; a < parsedNumber; a++) {
        if (a % 3 === 0 || a % 5 === 0) {
            //testing if the values are divible by 3 or 5
            divibleBy3or5.push(a)
        }
    }

    divibleBy3or5.forEach((n,sum) => {
        sum += n
    })

    return sum
}
try {
    let sum = sumDivisibleBy3or5(process.argv[2])
    console.log(sum)
} 
catch (error) {
    if(error instanceof TypeError) console.log(error.message)
    else console.log(error)
}
