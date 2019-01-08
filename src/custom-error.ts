export type CustomErrorOptions = { [K in Exclude<keyof CustomError, 'stack' | 'name'>]?: CustomError[K] };

/**
 * Base class for custom errors
 */
export class CustomError extends Error {

    readonly status: number;
    readonly data?: any;
    readonly code?: string;
    readonly inner?: Error;

    constructor(options: CustomErrorOptions);
    constructor(...args: any[]);
    constructor(...args: any[]) { // tslint:disable-line:cognitive-complexity
        let message: string | undefined;
        let status: number = 0;
        let data: any;
        let code: string | undefined;
        let inner: Error | undefined;
        for (const arg of args) {
            const typeofArg = typeof arg;
            if (message !== undefined && typeofArg === 'string') {
                code = arg;
            } else if (typeofArg === 'string') {
                message = arg;
            } else if (typeofArg === 'number') {
                status = arg;
            } else if (arg instanceof Error) {
                inner = arg;
            } else if (typeofArg === 'object') {
                if ('status' in arg) { status = arg.status; }
                if ('message' in arg) { message = arg.message; }
                if ('data' in arg) { data = arg.data; }
                if ('code' in arg) { code = arg.code; }
                if ('inner' in arg) { inner = arg.inner; }
            }
        }
        super(message);
        this.status = status;
        this.data = data;
        this.code = code;
        this.inner = inner;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, this.constructor.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(this.message).stack;
        }
    }
}
