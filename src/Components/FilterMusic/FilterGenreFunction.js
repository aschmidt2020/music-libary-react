export function getGenres(songs){
    let genresList = songs.map(function(el){
        return el.genre;
    }).sort();

    let genreListCount = [];
    let count = 1;

    for(let i=0; i<genresList.length; i++){
        if (genresList[i] == genresList[i+1]){
            count = count + 1;
        }

        else if(genresList[i] != genresList[i+1]){
            genreListCount.push([count, genresList[i]]);
            count = 1;
        }

    };

    let results = genreListCount.map(function(el){
        return el[1];
    });

    //debugger

    return results;
}