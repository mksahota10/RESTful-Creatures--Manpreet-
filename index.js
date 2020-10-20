const express = require ('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const fs = require('fs')
const dinosaurs = require('./controllers/dinosaurs')
const prehistoric_creatures = require('./controllers/prehistoric_creatures')


app.set('view engine', 'ejs')   //ths links the views folder
app.use(ejsLayouts)   //this links the layouts file on the views folder. 
            //make sure you type --->>>npm i express layout thingy
//this is what makes req.bdy work  
app.use(express.urlencoded({extended:false}))

app.use('/dinosaurs',dinosaurs)
app.use('/prehistoric_creatures',prehistoric_creatures)
app.get('/', (req, res)=>{
    res.render('home')
})
//  DINO POST ROUTE //
// app.post('/dinosaurs', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     dinoData.push(req.body) // push the new dino to the array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringfy  does the opposite of JSON.parse
//     fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
//     //redirect to the GET /dinosaurs route (index)
//     res.redirect('/dinosaurs')
//     console.log(req.body)
// })

// app.post('/prehistoric_creatures', (req, res)=>{
//     let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let prehistoricData = JSON.parse(prehistoric_creatures)
//     prehistoricData.push(req.body) // push the new dino to the array
//     //save the new dinoData array to the dinosaurs.json file
//     // JSON.stringfy  does the opposite of JSON.parse
//     fs.writeFileSync('./prehistoric_creatures.json', JSON.stringify(prehistoricData))
//     //redirect to the GET /dinosaurs route (index)
//     res.redirect('/prehistoric_creatures')
//     console.log(req.body)
// })


// NEW* DINO ROUTE //
// app.get('/dinosaurs/new', (req, res)=>{
//     res.render('dinosaurs/new')
// })

//New Prehistoric Route 
// app.get('/prehistoric_creatures/new', (req, res)=>{
//     res.render('prehistoric_creatures/new')
// })


// DINO SHOW* ROUTE //
// app.get('/dinosaurs/:idx', (req, res)=>{
//     let dinosaurs = fs.readFileSync('./dinosaurs.json')
//     let dinoData = JSON.parse(dinosaurs)
//     //get array index from url parameter
//     let dinoIndex = req.params.idx
//     console.log(dinoData[dinoIndex])
//     res.render('dinosaurs/show', {dino: dinoData[dinoIndex], dinoId: dinoIndex})
// })

// Prehistoric show route
// app.get('/prehistoric_creatures/:idx', (req, res)=>{
//     let prehistoric_creatures = fs.readFileSync('./prehistoric_creatures.json')
//     let prehistoricData = JSON.parse(prehistoric_creatures)
//     //get array index from url parameter
//     let prehistoricIndex = req.params.idx
//    // console.log(dinoData[dinoIndex])
//     res.render('prehistoric_creatures/show', {creature: prehistoricData[prehistoricIndex], creatureId: prehistoricIndex})
// })



app.listen(8003, ()=>{
    console.log("youre in port 8003")
})
