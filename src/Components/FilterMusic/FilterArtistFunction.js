export function getArtists(songs){
    let artistNamesList = songs.map(function(el){
        return el.artist;
    }).sort();

    let artistCount = [];
    let count = 1;

    for(let i=0; i<artistNamesList.length; i++){
        if (artistNamesList[i] == artistNamesList[i+1]){
            count = count + 1;
        }

        else if(artistNamesList[i] != artistNamesList[i+1]){
            artistCount.push([count, artistNamesList[i]]);
            count = 1;
        }

    };

    let results = artistCount.map(function(el){
        return el[1];
    });

    //debugger

    return results;
}