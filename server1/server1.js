const data = 'hello 1'
const log4js = require("log4js");

log4js.configure({
    appenders: { serverLog: { type: "dateFile", filename: "logs/debug","pattern":"-dd-MM.log", alwaysIncludePattern:true} },
    categories: { default: { appenders: ["serverLog"], level: "debug" } }
});

const logger = log4js.getLogger("serverLog")



function myFuncOne(i){
    setTimeout(() => {
        logger.debug(data)
        myFuncOne(++i);
    }, 2000)
}
myFuncOne(0)