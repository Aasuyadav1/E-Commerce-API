const validate = (schema) => async (req, res, next) => {
    try {
        const parsedData = await schema.parseAsync(req.body);
        req.body = parsedData;
        next();
    } catch (error) {

        // custom error
        const extraDetails = error.errors[0].message
        const errors = {
            status: 400,
            message: "Invalid Data",
            extraDetails: extraDetails  
        }
        next(errors);
    }
}


export default validate