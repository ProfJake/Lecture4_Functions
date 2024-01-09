
const createAccount = () => {
    let balance = 0

    return {
        deposit: amount => {
            balance += amount
        },
        withdraw: amount => {
           if (amount > balance){
               throw {message: "You can't withdraw more than you have!", attempt: amount }
           }
           if (amount % 2 == 0){
                let err = Error("You can't withdraw even values")
                err.amount = amount
                throw err
           }
            balance -= amount
        },
        getBalance: () => balance
    }
}

let acct1 = createAccount()
acct1.deposit(50)


    let acct2 = createAccount()
//acct2.deposit(100)
try{ 
    acct2.withdraw(50)
} catch (exception) {
   console.log(exception.message)
}

console.log(acct1.getBalance())
console.log(acct2.getBalance())