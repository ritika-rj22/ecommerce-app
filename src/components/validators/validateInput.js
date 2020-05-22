import isEmpty from "lodash/isEmpty";

const validateInput = data => {
    let errors = {};
    if (isEmpty(data.username)) {
        errors.username = 'This field is required';
    }

    if (isEmpty(data.password)) {
        errors.password = 'This field is required';
    }

    return {
        errors, isValid: isEmpty(errors)
    }
}

export default validateInput;