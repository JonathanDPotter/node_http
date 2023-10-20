const http = require("http");
const { home, fourOhFour } = require("./pages");

const router = (url, method, body) => {
  switch (url) {
    case "/":
      return { status: 200, contentType: "text/html", content: home };

    case "/echo":
      return {
        status: 200,
        contentType: "application/json",
        content: JSON.stringify({ url, method, body }),
      };

    case "/about":
      return {
        status: 200,
        contentType: "application/json",
        content: JSON.stringify({
          name: "Jonathan Potter",
          age: 46,
          home: "Portland Maine",
          numberOfChildren: 3,
          numberOfCats: 5,
          numberOfDogs: 1,
          hobbies: ["bicycling", "tabletop wargaming", "music"],
        }),
      };

    default:
      return {
        status: 404,
        contentType: "text/html",
        content: fourOhFour,
      };
  }
};

http
  .createServer((req, res) => {
    const { url, method } = req;
    const chunks = [];

    req
      .on("error", (error) => {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.write(JSON.stringify(error));
      })
      .on("data", (chunk) => chunks.push(chunk))
      .on("end", () => {
        const body = Buffer.concat(chunks).toString();

        const { status, contentType, content } = router(url, method, body);
        res.writeHead(status, { "Content-Type": contentType });
        res.write(content);
        res.end();
      });
  })
  .listen(3000, () => console.log("Server listening on localhost:3000"));
