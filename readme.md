# tagmaker

Tagmaker generates an SVG file with tags for printing based on an input csv.

## usage

Open a web page and upload a file like the `test.csv`. An SVG will be generated, press the button to download. 

## run locally

Since loading local files in html will hit you with a cross origin problem you'll need to host the file to run it. I recommend using the simple http npm server:

```bash
npm install -g http-server
http-server
```

Then simply navigate to [http://127.0.0.1:8080/](http://127.0.0.1:8080/);