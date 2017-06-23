# Setup
Simply run ```npm install``` (or ```yarn install```). If you are using Visual Studio Code, you might want
to close and re-open the editor to make sure that auto-completion sees the newly created `node_modules`
folder.


# Running
Run the web server with: 

```bash
node_modules/.bin/http-server ./wwwroot -p 5000
```
 
Run webpack with: 

```bash
node_modules/.bin/webpack -w
```