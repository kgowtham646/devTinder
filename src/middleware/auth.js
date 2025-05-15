const isAuth = (req,res,next)=>{
    const token = '234dx56'
    const isAutherized = token === '23456'
    if(!isAutherized){
        res.status(401).send('unautheriazed')
    }
    else {
        next()
    }
}
module.exports = {
    isAuth
}