const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <html>
      <head>
        <title>Cute App</title>
        <style>
          body {
            background: #ffe6f2;
            font-family: "Times New Roman", Arial, sans-serif;
            text-align: center;
            padding-top: 80px;
            color: #d147a3;
          }
          .box {
            background: white;
            padding: 30px 40px;
            display: inline-block;
            border-radius: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
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
