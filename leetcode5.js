// Easy - validParentheses

var isValid = function (s) {
    const pairs = {
        "(": ")", "{": "}", "[": "]"
    }

    let open = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            open.push(s[i])
        } else if (s[i] === pairs[open[open.length - 1]]) {
            open.pop()
        } else {
            return false
        }
    }

    return open.length < 1
};