const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello Zoo!');
})

app.get('/image/:name', (req, res) => {
    const {name} = req.params;
  	
  	if(name=="dog"){
      res.json({"image_url":"https://images.dog.ceo/breeds/malamute/n02110063_97.jpg"});
    }else if(name=="cat"){
       res.json({"image_url": "https://cdn2.thecatapi.com/images/d7j.jpg"});
    }else if(name=="raccoon"){
      res.json({'image_url':"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/1920px-Raccoon_in_Central_Park_%2835264%29.jpg"});
    }else{
      res.json({'image_url':null});
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})