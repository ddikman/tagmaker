const locale = {
    'sv': {
        'download-svg': 'Ladda ner SVG',
        'upload-hint': 'Släpp en fill här eller tryck för att ladda upp',
        'try-again': "En gång till"
    },
}

locale['sv-SE'] = locale.sv;

function currentLocale() {
    return locale[navigator.language];
}

function translationAvailable() {
    return currentLocale() !== undefined;
}

$(document).ready(function() {
    // current locale has translation
    if (translationAvailable()) {
        $('[data-translate]').each(function(_, item) {
            item = $(item);
            const term = item.attr('data-translate');
            const translation = currentLocale()[term];
            console.log(`setting translation for term ${term} to: ${translation}`);
            item.text(translation);
        });
    }
})