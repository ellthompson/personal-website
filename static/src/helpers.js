function decodeMarkupString(encodedMarkup) {
    let tmpElement = document.createElement('span');
    tmpElement.innerHTML = encodedMarkup;
    return tmpElement.innerText;
}

export function createContentMarkup(content) { return {__html: decodeMarkupString(content)}; };

export function ISODateToDateString(ISODate) {
    const date = new Date(ISODate);
    const dateOptions = {
        day: 'numeric',
        month: 'short',
        year: '2-digit'
    };
    return date.toLocaleDateString('en-GB', dateOptions);
}
