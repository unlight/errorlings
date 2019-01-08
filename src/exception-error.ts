import { CustomError } from './custom-error';

/**
 * General unknown error.
 */
export class ExceptionError extends CustomError {

    constructor(...args: any[]);
    constructor(...args: any[]) {
        super(...args);
    }
}
