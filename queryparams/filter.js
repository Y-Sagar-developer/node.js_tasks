// const http = require("http");
// const url = require("url");

// const server = http.createServer(async (req, res) => {
//   console.log(req.url);

//   var parsedurl = url.parse(req.url,true);
//   console.log(parsedurl.query);
//   let data = await fetch("https://fakestoreapi.com/products");

//   let dataa = await data.json();

//   dataa.sort((a, b) => {
//     return a.price - b.price;
//   });

//   res.write(JSON.stringify(parsedurl.query));
//   res.end();
// });

// const port = 3000;

// server.listen(port, () => {
//   console.log("server has been running");
// });

const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer(async (req, res) => {
  let parsedurl = url.parse(req.url, true);
//   console.log(parsedurl.query);

  let data = await fetch("https://fakestoreapi.com/products");
  let dataa = await data.json();

  if (parsedurl.query.order == "asce") {
    dataa.sort((a, b) => {
      return a.price - b.price;
    });
    res.write(JSON.stringify(dataa));
    res.end();
  } else if (parsedurl.query.order == "desc") {
    dataa.sort((a, b) => {
      return b.price - a.price;
    });
    res.write(JSON.stringify(dataa));
    res.end();
  } else if (parsedurl.query.category == "jewelery") {
    const filterd = dataa.filter((val) => {
      return val.category === "jewelery";
    });
    res.write(JSON.stringify(filterd));
    res.end();
  } else if (parsedurl.query.category == "men's clothing") {
    let filterd = dataa.filter((val) => {
      return val.category === "men's clothing";
    });
    res.write(JSON.stringify(filterd));
    res.end();
  } else if (parsedurl.query.category == "women's clothing") {
    let filterd = dataa.filter((val) => {
      return val.category === "women's clothing";
    });
    res.write(JSON.stringify(filterd));
    res.end();
  } else if (parsedurl.query.category == "electronics") {
    let filterd = dataa.filter((val) => {
      return category === "electronics";
    });
    electronics;
  } else {
    res.write(JSON.stringify(dataa));
    res.end();
  }

  //   res.write(JSON.stringify(parsedurl.query))
  //   res.end()
});

server.listen(port, () => {
  console.log("server is ruinning");
});
