/**
 * 
 * @param {*} template string (outputtext)
 * @param {*} values array [ { key: string, replaceTo: string | number }, ]
 * @example
 *  expect(parse(
 *      "We have ${a} friends in total and our budget limit is ${b}",
 *      [ { key: "a", replaceTo: 5 }, { key: "b", replaceTo: 10 } ]
 *  ),
 *  "We have 5 friends in total and our budget limit is 10"
 *  );
 */
function parse(template, values) {
    let a, b, c;
    for (let i = 0; i < values.length; i++) {
        if (values[i].key == "a") {
            a = values[i].replaceTo;
        } else if (values[i].key == "b") {
            b = values[i].replaceTo;
        } else if (values[i].key == "c") {
            c = values[i].replaceTo;
        }
    }
  
    let temp = eval('`' + template + '`');
  
    return temp;
}