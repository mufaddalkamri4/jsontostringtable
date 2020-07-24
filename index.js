let tablize = (objArr) => {
    let data = [[], []];
    
    // get keys
    for (let key in objArr[0]) {
        data[1].push(key);
    }
    
    //get values
    let aoa = objArr.map(el => Object.values(el));
    for (a of aoa) {
        data.push(a);
    }
    
    //set width for table
    let length = new Array(data[1].length).fill(0);
    for (let i = 1; i < data.length; i++) {
        for (let j = 0; j < data[1].length; j++) {
            if (data[i][j].length > length[j]) {
                length[j] = data[i][j].length;
            }
        }
    }
    data[0] = length;

    // add padding and stringify table elements
    for (let i = 1; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j].length < data[0][j]) {
                let padStr = new Array(data[0][j] - data[i][j].length).fill(' ');
                data[i][j] += padStr.join('');
            }
        }
        data[i] = `| ${data[i].join(' | ')} |\n`;
    }
    let dashCount = data[0].reduce((a, b) => a + b) + (data[0].length + 1) + 2 * (data[0].length - 1) + 2;
    let dashline = new Array(dashCount).fill('-');
    dashline = dashline.join('') + '\n';
    let str = dashline;
    str += data[1];
    str += dashline;
    for (let i = 2; i < data.length; i++) {
        str += data[i];
    }
    str += dashline;
    return str;
}

module.exports = tablize;