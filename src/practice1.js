const parseData = function (input) {

    let {data, column} = input;

    let output = [];

    data.forEach((arr, i) => {
        let obj = {};
        column.forEach((value, index) => {
            obj[value.name] = arr[index]
        });
        output[i] = obj;
    })

    return output;
}

export {parseData};
