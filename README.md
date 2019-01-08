# errorlings
Common errors for your application.

## API
Create error (all parameters optional and can be passed in any order)
```ts
const e = new CustomEror(status: number, message: string, code: string, inner: Error, { data: any });
```
Rules of detecting type of parameter:
* typeof number: status
* first string: message
* second string: code
* instanceof Error: inner
* object with key data: data

Using options object as parameter:
```ts
const err = new CustomEror({
    status?: number;
    data?: any;
    code?: string;
    inner?: Error;
    message?: string;
});
```

### Error classes and defaults
* `ExceptionError`
* `ForbiddenError` (status: 403, message: You don't have permission to do that.)
* `NotFoundError` (status: 404)
* `ValidationError` (status: 400)

## Changelog
See [CHANGELOG.md](CHANGELOG.md)

## Similar Projects
* https://github.com/shutterstock/node-common-errors
