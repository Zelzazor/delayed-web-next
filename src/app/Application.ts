import http from 'node:http';

export class Application {

  http: http.Server;

  constructor() {
    this.http = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World\n');
    });
  }

  public listen(port: number, callback?: () => void) {
    this.http.listen(port, callback);
  }
}