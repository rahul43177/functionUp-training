function date() {
    
    console.log(new Date().getDate())    
}
function month() {
    console.log(new Date().getMonth())
}
function batchInfo() {
    console.log(`Technetium Backend - W5D1 , The topic of the day was Node modules`)
}
module.exports.date= date 
module.exports.batch = batchInfo
module.exports.month = month