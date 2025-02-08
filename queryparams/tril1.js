const http = require("http");
const url = require("url");
const port = 3000;

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let parsedUrl = url.parse(req.url, true);

  try {
    let data = await fetch("https://fakestoreapi.com/products");
    let products = await data.json();

    if (parsedUrl.query.order === "asce") {
      products.sort((a, b) => a.price - b.price);
    } else if (parsedUrl.query.order === "desc") {
      products.sort((a, b) => b.price - a.price);
    }

    if (parsedUrl.query.category) {
      products = products.filter(product => product.category === parsedUrl.query.category);
    }

    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

server.listen(port, () => {
  console.log("Server is running on port", port);
});
