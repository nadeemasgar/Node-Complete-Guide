const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url == "/") {
        res.write("<html>");
        res.write("<head><title>Assignment 1</title><head>");
        res.write("<body><h1>Here is the Assignment</h1></body>");
        res.write("</html>");
        return res.end();
    }
    else if(url == "/users") {
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