const express = require('express')
const app = new express()
const db = require('better-sqlite3')('NVEC.db')

app.use(express.static("htmlfiles"))
app.use(express.static("jsandcssfiles"))
app.use(express.json())

/**
  * Sends index.html when someone connects on the default root.
  */
 app.get("/", (req, res) => {
    res.send("homepage.html");
  });

app.post("/lorem",(req,res) => {
    const {LoremIpsum} = req.body
    const query = db.prepare("UPDATE LOREMIPSUM SET LoremIpsum = ? WHERE id = 1")
    const result = query.run(Something)
    console.log(`update ${result.changes} id(s)`)
    res.json({
        didUpdate: result.changes > 0 ? true : false,
    })
})

app.listen(3000,() => {
    console.log("server started")
})