export default errorHandling = (err, req, res, next) => {
    res.send(err.message)
}