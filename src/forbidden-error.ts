import { CustomError, CustomErrorOptions } from './custom-error';

/**
 * Forbidden error, defaults:
 * status: 403
 * message: You don't have permission to do that.
 */
export class ForbiddenError extends CustomError {

    constructor(resource: string);
    constructor(...args: any[]);
    constructor(...args: any[]) {
        let data: any;
        if (args.length === 1) {
            const [resource] = args;
            data = { resource };
        }
        const customErrorOption: CustomErrorOptions = {
            data,
            status: 403,
            message: `You don't have permission to do that.`,
        };
        args.unshift(customErrorOption);
        super(...args);
    }
}
