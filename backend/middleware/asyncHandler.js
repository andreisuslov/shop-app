const asyncHandlerHelper = (fn) => (req, res, next) => {
    // here, we wrap the fn in a promise and catch any errors that might occur.
    // this is useful for handling asynchronous operations in a way that is consistent with the rest of the application.
	Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandlerHelper;
