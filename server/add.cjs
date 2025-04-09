// import main from "./connect.cjs"

const {Mage,app,main} = require("./schema.cjs")

const createcourse = async(req,res)=>{
    console.log(req.body)
    console.log(req.headers.authorization,"AUTH")

    // req.body.ownerid = req.user.id
    const course = await Mage.create({...req.body})
    // const user = await User.create(req.body)
    // const user = await User.create({name:"yasser4",password:"yaso136",id:4})
    res.status(201).json({course})
}

app.get('/', async(req,res)=>{
    const data = await Mage.find({});
    console.log(data)
    // res.status(200).json({data})
    res.status(201).json(data)
})

app.post('/add', async(req,res)=>{
    console.log(req.body)
    // console.log(req.headers.authorization,"AUTH")

    // req.body.ownerid = req.user.id
    const course = await Mage.create({...req.body})
    // const user = await User.create(req.body)
    // const user = await User.create({name:"yasser4",password:"yaso136",id:4})
    res.status(201).send("HI")
});
app.delete('/add/:name', async(req,res)=>{
    console.log(req.params)
    console.log(req.params.name)
    const task = await Mage.findOneAndDelete({name:req.params.name})
    res.status(200).json(task);

})


main()