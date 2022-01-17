function compareTitles(x,y) 
{
if (x.title.toLowerCase() < y.title.toLowerCase())
    return -1;
if (x.title.toLowerCase() > y.title.toLowerCase())
    return 1;
return 0;
}

function compareIdRecentFirst(x,y) 
{
if (x.id < y.id)
    return 1;
if (x.id > y.id)
    return -1;
return 0;
}

function compareIdOldestFirst(x,y) 
{
if (x.id < y.id)
    return -1;
if (x.id > y.id)
    return 1;
return 0;
}

export { compareTitles, compareIdOldestFirst, compareIdRecentFirst }