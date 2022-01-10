export function getReleaseDates(songs){
    let releaseDateList = songs.map(function(el){
        return el.releaseDate;
    }).sort();

    let releaseDateListCount = [];
    let count = 1;

    for(let i=0; i<releaseDateList.length; i++){
        if (releaseDateList[i] == releaseDateList[i+1]){
            count = count + 1;
        }

        else if(releaseDateList[i] != releaseDateList[i+1]){
            releaseDateListCount.push([count, releaseDateList[i]]);
            count = 1;
        }

    };

    let results = releaseDateListCount.map(function(el){
        return el[1];
    });

    //debugger

    return results;
}