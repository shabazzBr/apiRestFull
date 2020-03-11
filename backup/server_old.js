const http = require("http");

let server = http.createServer((req, res) => {
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);

    switch (req.url) {
        case "/":
            res.setHeader("Content-Type", "text/html");
            res.end("<h3> Bem vindo !<h3/>");
            break;

        case "/users":
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(JSON.stringify({

                users: [{

                    name: "user",
                    email: "user@paineladminstrador.com.br",
                    id: 56

                }]

            }));
            break;

        default:
            return 0;
    }

});


server.listen(5000, '127.0.0.1', () => {

    console.log("Servidor restfull rodando Javascript");

});