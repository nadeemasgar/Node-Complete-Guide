const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title><head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }

  if (url == "/create-user" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]); // username=whatever-the-user-entered
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  if (url == "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment 1</title><head>");
    res.write("<body><ol><li>Nadeem</li><li>Rahul</li></ol></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.end();
};

module.exports = requestHandler;
