var requestTime = function (req, res, next) {
    
    req.requestTime = new Date().toISOString().
    replace(/T/, ' ').      // replace T with a space
    replace(/\..+/, '') ;
    console.log(req.requestTime);
    next()
    
    }

export default requestTime;