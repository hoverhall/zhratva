const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const exec = require('child_process').exec;
const { send } = require('process');
const file = require("./src/interface-creator/languages.json")

app.use(express.static(path.join(__dirname, 'src')))
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/addon_dishes', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/first_dishes', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/main_dishes', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/salates', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/bakeries', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/cooks', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/drinks', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.get('/all_dishes', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`);
});

app.post("/test", (req, res) => {
    console.log(req)
    res.send("test-Ok")
})

app.post("/api/orders", (req, res) => {
    console.log(req.body)
    res.sendStatus(200)
})

app.get("/ping", (req, res) => {
    res.send("")
})

app.get("/api/addon_dishes", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ГАРНІРИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/first_dishes", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ПЕРШІ СТРАВИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/main_dishes", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ОСНОВНІ СТРАВИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/salates", (req, res) => {
    res.send(JSON.stringify({
        page_name: "САЛАТИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/bakeries", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ВИПІЧКА",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/cooks", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ДЕСЕРТИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/drinks", (req, res) => {
    res.send(JSON.stringify({
        page_name: "НАПОЇ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.get("/api/all_dishes", (req, res) => {
    res.send(JSON.stringify({
        page_name: "ВСІ СТРАВИ",
        items: [
            {id: 123124123, imgURL: "../assets/images/1.jpg", name: "Блюдо 1",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 кг", price: 200, disc: 10},
            {id: 235345423, imgURL: "../assets/images/1.jpg", name: "Блюдо 2",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 г", price: 500, disc: 15},
            {id: 123237775, imgURL: "../assets/images/1.jpg", name: "Блюдо 3",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 100, disc: 0},
            {id: 623423564, imgURL: "../assets/images/1.jpg", name: "Блюдо 4",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 мг", price: 300, disc: 0},
            {id: 734523234, imgURL: "../assets/images/1.jpg", name: "Блюдо 5",
            desc: "Блюдо блюдное, блюднит, блюдным блюдом, заблюденным в блюдном блюде",
            veight: "100500 нг", price: 1000, disc: 40}
        ]
    }))
})

app.listen(80, () => {
    console.log('Application listening on port 80!');
});