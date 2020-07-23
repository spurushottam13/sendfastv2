export const convertBytes = (totalBytes) => {
    if (totalBytes < 1000000) {
        return Math.floor(totalBytes / 1000) + 'KB';
    } else {
        return Math.floor(totalBytes / 1000000) + 'MB';
    }
}