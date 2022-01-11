function getValueList(keyToSearch, list) {
    let keyToSearchList = list.map(function(element) {
        return element[keyToSearch]
    }).sort()

    //debugger
    return keyToSearchList
}

function getValueCount(list) {
    let valueCount = []; //count not needed for displaying but kept for testing/info purposes
    let count = 1;

    for(let i=0; i<list.length; i++){
        if (list[i] == list[i+1]){
            count = count + 1;
        }

        else if(list[i] != list[i+1]){
            valueCount.push([count, list[i]]);
            count = 1;
        }

    };
    //debugger
    return valueCount;
}

function getValues(keyToSearch, list){
    //debugger
    let keyToSearchList = getValueList(keyToSearch, list);
    let valueCountList = getValueCount(keyToSearchList);

    let results = valueCountList.map(function(el){
        return el[1];
    });

    //debugger

    return results;
}

export { getValueCount, getValueList, getValues }