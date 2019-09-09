# tagmaker

Tagmaker generates an SVG file with tags for printing based on an input csv.

![intereface example](https://raw.githubusercontent.com/ddikman/tagmaker/master/example.gif)

## usage

Open a web page and upload a file like the `test.csv`. An SVG will be generated, press the button to download. 

## run locally

Since loading local files in html will hit you with a cross origin problem you'll need to host the file to run it. I recommend using the simple http npm server:

```bash
npm install -g http-server
http-server
```

Then simply navigate to [http://127.0.0.1:8080/](http://127.0.0.1:8080/);

## corel draw

This tool was written to generate tag templates for import to CorelDraw and later use in a laser cutter. Alas, [CorelDraw seem to be famous for not handling SVGs correctly](https://productgraph.io/blogs/news/opening-svg-files-in-coreldraw).

Because of this I'm generating a PDF using [svg2pdf](https://github.com/yWorks/svg2pdf.js/tree/master) library.