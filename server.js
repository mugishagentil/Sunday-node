import http from 'http';

const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write(300, {'Content-Type' : 'text/html'})
        res.end('<h1>Home Page</h1>')
    }else if(req.url === '/About'){
        res.write(400, {'Content-Type' : 'text/html'})
        res.end('<h1>About Us</h1>')
    }
})
server.listen(PORT, () => {
    console.log(`Your Port Is ${PORT}`)
})