class newError extends Error {
    statusCode;
    status;
    message;

    constructor(statusCode: number, message: string | 'Internal server error') {
        super(message);
        this.statusCode = statusCode;
        this.status = 'fail';
        this.message = message;
    }
}
export default newError;