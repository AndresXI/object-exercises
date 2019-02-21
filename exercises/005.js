/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
    var c = 0;
    var obj = {};
    var resultA = [];

    for (var i in array) {
        var arr2 = array[i];

        for (var j in arr2) {
            c++;
            var val = arr2[j];
            var uno = val[0];
            var dos = val[1];
            console.log(j);
            obj[uno] = dos;

            if (c === 4) {
                resultA.push(obj)
            }
        }

        obj = {}
        c = 0;
    }
    return resultA;
}
