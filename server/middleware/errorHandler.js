import {StatusCodes} from 'http-status-codes'


const errorHandlerMiddleware = (err, req, res) =>{
    console.log(err);

    const defaultError = {
        statusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'something went wrong! try again later'
    } 
    if(err.name=== 'ValidationError'){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        //defaultError.msg = err.message 
        defaultError.msg = Object.values(err.errors).map((item)=>item.message).join(',')  
    }
    if(err.code&& err.code === 110000){
        defaultError.statusCode = StatusCodes.BAD_REQUEST
        //defaultError.msg = err.message
        defaultError.msg = `${Object.keys(err.keyValue)} field has to unique`
    }
    //res.status(defaultError.statusCode).json({msg:err})
    res.status(defaultError.statusCode).json({msg:defaultError.msg})  
} 

export default errorHandlerMiddleware