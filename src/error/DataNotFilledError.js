class DataNotFilledError extends Error {
    constructor(message) {
        super(message);

        this.name = 'DataNotFilledError';
    }
}

export default DataNotFilledError;