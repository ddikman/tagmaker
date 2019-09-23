function readData(file, callback) {
    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = function (e) {
        callback(reader.result);
    }

    // Read in the image file as a data URL.
    reader.readAsText(file, 'windows-1252');
}

function handleCsvUpload(evt, callback) {
    var files = evt.target.files;
    
    try {
        if (files.length != 1 || !files[0].name.toLowerCase().endsWith('csv')) {
            throw 'Only a single .csv file must be supplied';
        }
        const file = files[0];
        readData(file, function (data) {
            const hasSemicolon = data.indexOf(';') >= 0;
            const seperator = hasSemicolon ? ';' : ',';
            rows = data.trim().split('\n').map(function (row) { return row.split(seperator) });
            callback(null, rows)
        });
    } catch (err) {
        callback(err, null);
    }
}