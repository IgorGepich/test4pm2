const fs = require ('fs')
const data = 'hello 1'

function myFuncOne(i){
    setTimeout(() => {
        console.log(data);
        fs.appendFile('./../log.txt', data + '\n', function (error){
            if (error) throw error
        })
        myFuncOne(++i);
    }, 2000)
}
myFuncOne(0)