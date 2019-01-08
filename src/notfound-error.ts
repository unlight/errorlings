import { CustomError } from './custom-error';

/**
 * Not found error, defaults:
 * status: 404
 */
export class NotFoundError extends CustomError {

    constructor(...args: any[]);
    constructor(...args: any[]) {
        super(404, ...args);
    }
}
