class URLNotExistError extends Error {
    constructor(message, url) {
        super(message);
        this.url = url;
        this.name = 'URLNotExistError';
    }
}

export default URLNotExistError;