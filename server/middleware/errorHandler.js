const errorHandlerMiddleware = (req, res) => {
    console.log(err);
    res.status(500).json({msg:'Route does not exist'})
}
    export default errorHandlerMiddleware