function isBalanced(input) {
    var stack = [];
    var openingBrackets = ['[', '{', '('];
    var closingBrackets = [']', '}', ')'];
    for (var i = 0; i < input.length; i++) {
        var c = input[i];
        if (openingBrackets.indexOf(c) > -1) {
            stack.push(c);
        }
        else {
            var val = stack.pop();
            var matchingBrackets = openingBrackets[closingBrackets.indexOf(c)];
            if (val != matchingBrackets) {
                return false;
            }
        }
    }
    return true;
}
var inputString = '({[})';
var response = isBalanced(inputString);
console.log("Input: " + inputString + " result " + response);
