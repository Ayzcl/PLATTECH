const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // Serve profile image
  if (req.url === "/pic.jpg") {
    const imgPath = path.join(__dirname, "public", "pic.jpg");
    fs.readFile(imgPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Image not found");
      }
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      return res.end(data);
    });
    return;
  }

  // Serve background image
  if (req.url === "/bg.jpg") {
    const bgPath = path.join(__dirname, "public", "bg.jpg");
    fs.readFile(bgPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("Background not found");
      }
      res.writeHead(200, { "Content-Type": "image/jpeg" });
      return res.end(data);
    });
    return;
  }

  // Serve page
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <head>
        <title>Final Project</title>
        <style>
          body {
            background-image: url('/bg.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            font-family: "Times New Roman", Arial, sans-serif;
            text-align: center;
            padding-top: 50px;
            color: black;
          }
          .box {
            background: rgba(255, 255, 255, 0.8);
            padding: 30px 40px;
            display: inline-block;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.3);
          }
          img {
            width: 180px;
            height: 180px;
            border-radius: 100%;
            object-fit: cover;
            margin-bottom: 15px;
            border: 4px solid #ffb3d9;
          }
          h1 {
            margin: 0;
            font-size: 36px;
          }
          p {
            margin: 10px 0 0;
            font-size: 20px;
          }
        </style>
      </head>

      <body>
        <div class="box">
          <img src="/pic.jpg" alt="My Image">
          <h1>Azalea C. Lumbres</h1>
          <p>BSIT NT-4101</p>
          <p><i>"If you can't study hard, study smart."</i></p>
        </div>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
