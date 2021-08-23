const locale = {
    'sv': {
        'download-svg': 'Ladda ner SVG',
        'download-pdf': 'Ladda ner PDF',
        'download-example': 'Ladda ner exempelfil',
        'upload-hint': 'Tryck här för att ladda upp data fil',
        'try-again': "Prova igen",
        'choose-file': 'Välj fil',
        'upload-failed': 'Uppladdning misslyckades, endast .csv kan laddas upp',
        'save-material': 'Spara material (mindre avstånd)',
        'reset-settings': "Återställ inställningar",
        'text-size': 'Textstorlek: ',
        'text-offset': 'Textavstånd (uppifrån): '
    },
}

locale['sv-SE'] = locale.sv;

function currentLocale() {
    return locale[navigator.language];
}

function translationAvailable() {
    return currentLocale() !== undefined;
}

function translate(term, fallback) {
    return translationAvailable() ? currentLocale()[term] : fallback;
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