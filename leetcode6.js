// Easy - LongestCommonPrefix

var longestCommonPrefix = function (strs) {
    let a = strs.shift().split("")
    let b = []
    strs.forEach(str => {
        for (let i = 0; i < str.length + 1; i++) {
            if (str[i] == a[i] && str[i] != undefined) {
                b.push(str[i])
            } else {
                a = b
                b = []
                console.log(a)
                i = str.length + 1
            }
        }
    })
    return a.join("")
};