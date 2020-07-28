export const convertBytes = (totalBytes) => {
    if (totalBytes < 1000000) {
        return Math.floor(totalBytes / 1000) + 'KB';
    } else {
        return Math.floor(totalBytes / 1000000) + 'MB';
    }
}

export const copyToClipboard = (text) => {
    var input = document.createElement('input');
    input.setAttribute('value', text);
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
    return result;
 }