const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');    // using Express to use EJS as its view engine

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));         // using my css file by using express.

let items = [];   // empty array for adding items by user.

app.get('/', (req,res)=>{

    const today = new Date();
    const options = {                        // options for getting the date.
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", options); 

    res.render('todolist', {
        date: day,              
        newListItems: items                       // passing over our list items to our webpage.

});
})

app.post('/' , (req,res) => {                    // Post Request
    let item = req.body.newItem;
    items.push(item);
    res.redirect('/');   // redirecting the direct to home route.
});

app.listen(3000, ()=>{

    console.log('Server started on port 3000');

});

