const data = 'hello 2'
const logger = require("./../log4jsConf")
const infoLog = logger.infoLogger;
const errorLog = logger.errorLogger;
const debugLog = logger.debugLogger;
const defaultLog = logger.defaultLogger;

function myFuncTwo(i){
    setTimeout(() => {
        infoLog.info(data)
        errorLog.error(data)
        debugLog.debug(data)
        defaultLog.warn(data)
        myFuncTwo(++i);
    }, 2000)
}
 myFuncTwo(0)

