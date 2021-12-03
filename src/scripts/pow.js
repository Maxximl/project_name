function pow (x, n) {
    const result = 1;

    for (let i = 0; i < n; i++) {
        result += x;
    }


    return result;
}

module.exports = pow;
