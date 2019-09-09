const locale = {
    'sv': {
        'download-svg': 'Ladda ner SVG',
        'download-pdf': 'Ladda ner PDF',
        'download-example': 'Ladda ner exempelfil',
        'upload-hint': 'Tryck här för att ladda upp data fil',
        'try-again': "Prova igen",
        'choose-file': 'Välj fil'
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
            item.text(translation);
        });
    }
})