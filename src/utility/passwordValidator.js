const passwordValidator = (password, setError) => {
    if (password.length < 6) {
        return setError("Password should at least contain 6 charecter");
    }
    if (!/(?=.*[0-9])/.test(password)) {
        return setError("Password should contain one digit");
    }
    if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return setError("Password should contain one special charecter");
    }
    return setError(null);
}

export default passwordValidator