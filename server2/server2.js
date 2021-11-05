// 0636193937 ломанов павел
const fs = require ('fs')
const data = 'hello 2'

function myFuncTwo(i){
    setTimeout(() => {
        console.log(data);
        fs.appendFile('./../log.txt', data + '\n', function (error){
            if (error) throw error
        })
        myFuncTwo(++i);
    }, 2000)
}
 myFuncTwo(0)

