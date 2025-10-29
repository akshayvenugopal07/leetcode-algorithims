function groupByType(collection) {
    let result = {};

    collection.forEach(function (item) {
        if (!result[item.type]) {
            result[item.type] = [];
        }

        result[item.type].push({
            type: item.type,
            value: item.value
        });
    });
    console.log(JSON.stringify(result))
    return result;
}