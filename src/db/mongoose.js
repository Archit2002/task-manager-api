const mongoose=require('mongoose')
// const validator=require('validator')
// const { default: mongoose } = require('mongoose')
mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const Task=mongoose.model('Task',{
//     description:{
//         type:String
//     },
//     completed:{
//         type:Boolean
//     }
// })
// const task=new Task({
//     description:'learn',
//     completed:'true'
// })
// task.save().then((result)=>{
//     console.log(result)
// }).catch((error)=>{
//     console.log('Error!',error)
// })

// const me=new User({
//     name:'Archit',
//     age: 20,
//     password: 'pass'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log(error)
// })


//  const test=new Task({
//      description: "Archit hi",
//      completed: true
//  })
//  test.save().then(()=>{
//     console.log(test)
//  }).catch((error)=>{
//     console.log(error)
//  })