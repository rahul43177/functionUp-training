let text = "                    functionUp Technetium Backend Cohort                "
function upperCase() {
    console.log(text.toUpperCase())
}
function lowerCase() {
    console.log(text.toLowerCase())
}
function trim() {
    console.log(text.trim())
}

module.exports = {upperCase,lowerCase,trim} 
// or 
// module.exports.upper = upperCase
// module.exports.lower = lowerCase
// module.exports.trimming = trim 