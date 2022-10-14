// Easy - lengthOfLastWord

var lengthOfLastWord = function (s) {
    const w = s.replace(/\s+/g, ' ').trim().split(" ")
    return w[w.length - 1].length
};