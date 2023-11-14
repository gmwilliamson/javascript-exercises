const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    
    let x = 1;
    let y = 0;

    for (let i = 2; i <= num; i++) {
        let current = x + y;
        y = x;
        x = current;
    }

    return x;

}
   
// Do not edit below this line
module.exports = fibonacci;
