function fizzBuzz(){
    var maxNumber = 100;
    var minNumber = 1;
    
    for (var i = minNumber; i <= maxNumber; i++)
    {
               
        //Divisible by 3 and 5
        if (i % 5 == 0 && i % 3 == 0)
        {
            console.log("FizzBuzz");
        }
        //Divisable by 5 and not 3
        else if (i % 5 == 0 && i % 3 != 0)
        {
            console.log("Buzz");
        }
        //Divisable by 3
        else if (i % 3 == 0)
        {
            console.log("Fizz");
        }
        else
        {
            console.log(i);
        }
    }
}

fizzBuzz();
