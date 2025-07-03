export const getRandomSeed = () => {
    const fourBytes = crypto.getRandomValues(new Uint8Array(4));
    const stred = Array.from(fourBytes, (n) => String.fromCodePoint(n)).join('');
    return btoa(stred);
};