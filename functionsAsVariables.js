let function1 = () => {
    console.log("This is function NUMBER 1\n")
}

function1()
function2 = () => {
    console.log("Function 2 is the NEW NUMBER 1\n")
}

function1 = function2

function1()
// Higher order function
function Add2NumbersAndExecuteCallback( a, b, callback) {
    let result = a + b
    callback(result)
}
    
Add2NumbersAndExecuteCallback(4, 88, (num) => {
    if (num > 10) {
        console.log("More than 10")
    }
    if (num < 100) {
        console.log("Less than 100")
    }
})