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

## dependencies

* https://github.com/yWorks/svg2pdf.js
* https://github.com/yWorks/jsPDF
* https://jquery.com/
* http://snapsvg.io

## license

The MIT License (MIT)

Copyright (c) 2019 David Dikman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.