const express=require('express')
const app =express()
require('./db/mongoose')
const userRouter=require('./routers/user.js')
const taskRouter=require('./routers/task.js')

const port=process.env.PORT
app.use(express.json())

app.use(userRouter)
app.use(taskRouter)


app.listen(port,()=>{
    console.log('Server is on port '+port)
})