const express =  require('express')
const {isAuth} = require('./middleware/auth')
const connectDb = require('./config/database')
const User = require('./models/user')
const app = express()

app.post('/signup',async(req,res)=>{
    const mockData = {
        firstName : 'Gowtham',
        email: 'gkn@gmail.com',
        password: '1234gh'
    }
    try{
        const user = new User(mockData)
        await user.save()
        res.send(`${mockData.firstName} user added successfully`)
    } catch (err){
        res.status(400).send('error is user ', err.message)
    }
   

})

connectDb()
.then(()=>{
    console.log('db connected')
    app.listen(3000,()=>{
    console.log('server running....')
    })
})
.catch(err=>console.log('error in connection'))




///////
// app.use('/admin',(req,res)=>{
//     throw new Error('jk')
//     res.send('kkk')
// })
// app.use('/',(err,req,res,next)=>{
//    if(err){
//     console.log(err)
//     res.status(500).send('something went wrong')
//    }

// })

// app.use('/admin', isAuth)

// app.use('/admin/all',(req,res)=>{
//     res.send('all data fetched')
// })
// app.use('/admin/delete',(req,res)=>{
//     res.send('user deleted')
// })