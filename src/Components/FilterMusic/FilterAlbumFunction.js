export function getAlbums(songs){
    let albumNamesList = songs.map(function(el){
        return el.album;
    }).sort();

    let albumCount = [];
    let count = 1;

    for(let i=0; i<albumNamesList.length; i++){
        if (albumNamesList[i] == albumNamesList[i+1]){
            count = count + 1;
        }

        else if(albumNamesList[i] != albumNamesList[i+1]){
            albumCount.push([count, albumNamesList[i]]);
            count = 1;
        }

    };

    let results = albumCount.map(function(el){
        return el[1];
    });

    //debugger

    return results;
}