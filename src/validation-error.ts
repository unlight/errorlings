import { CustomErrorOptions, CustomError } from './custom-error';

/**
 * Validation error, defaults:
 * status: 400
 */
export class ValidationError extends CustomError {

    constructor(options: CustomErrorOptions);
    constructor(...args: any[]);
    constructor(...args: any[]) {
        super(400, ...args);
    }
}
