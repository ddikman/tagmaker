const snap = Snap('#svg');

function generateSvg(rows, saveMaterial, template) {
    $('#output').show();
    const maxColumns = 7;

    console.log(`Generating ${rows.length} entries with template ${template}, saving material = ${saveMaterial}`);
    // const distanceY = saveMaterial ? 60 : 70;
    // const distanceX = saveMaterial ? 230 : 240;

    const { width, height } = Snap(`#${template}`).getBBox();
    const size = { width, height };
    console.log(`sizing:`);
    console.log(JSON.stringify(size))

    const padding = saveMaterial ? 4 : 14;
    const distanceX = size.width + padding;
    const distanceY = size.height + padding;

    let column = 0;
    let offsetX = 0;
    let offsetY = 0;
    rows.forEach(function (row) {
        if (column == maxColumns) {
            column = 0;
            offsetY = offsetY + distanceY;
            offsetX = 0;
        }
        place(row, offsetX, offsetY, template)

        offsetX += distanceX;
        column += 1;
    })

    // remove the original one
    Snap('#example-wide').remove()
    Snap('#example-narrow').remove()

    // scale back
    const totalBox = snap.getBBox();
    snap.attr({
        viewBox: `0 0 ${totalBox.width + 10} ${totalBox.height + 10}`
    })

    const svg = $('#svg')[0];
    const base64 = base64EncodeUnicode(svg.outerHTML);
    $('#download-svg-link').attr('href', "data:application/svg;base64," + base64);
    $('#download-svg-link').attr('download', 'template.svg');

    const pdf = new jsPDF({
        unit: 'px',
        floatPrecision: 32,
        orientation: 'landscape',
        putOnlyUsedFonts: true,
    });
    pdf.addFont('Arial.ttf', 'Arial', 'Normal')

    // render the svg element
    svg2pdf(document.getElementById('svg'), pdf, {
        xOffset: 50,
        yOffset: 50,
        scale: 2.0
    });

    // get the data URI
    $('#download-pdf-link').attr('href', pdf.output('datauristring'));
    $('#download-pdf-link').attr('download', 'template.pdf');
}

function centeredTextBox(container, rows) {
    const lineHeight = 20;
    const offsetY = 23;
    rows.forEach(function (line, index) {
        const middle = container.getBBox().width * 0.5;
        const text = snap.text(middle, 0, line.trim());
        text.addClass('text');
        container.append(text);
        text.attr({
            'font-family': 'Arial',
            'font-size': '14pt',
            'font-weight': 'bold',
            'text-anchor': 'middle',
            y: offsetY + lineHeight * index
        });
    });
}

function centerText(container, text) {
    const bbox = container.getBBox();
    centeredTextBox(container, text)
}

function place(text, x, y, template) {
    const box = Snap(`#${template}`).clone();
    box.transform(`t${x},${y}`);
    snap.append(box);
    centerText(box, text)
}

function base64EncodeUnicode(str) {
    // First we escape the string using encodeURIComponent to get the UTF-8 encoding of the characters,
    // then we convert the percent encodings into raw bytes, and finally feed it to btoa() function.
    utf8Bytes = encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    });

    return btoa(utf8Bytes);
}