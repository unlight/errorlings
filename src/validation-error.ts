import { CustomErrorOptions, CustomError } from './custom-error';

export class ValidationError extends CustomError {

    constructor(options: CustomErrorOptions);
    constructor(...args: any[]);
    constructor(...args: any[]) {
        super(400, ...args);
    }
}
