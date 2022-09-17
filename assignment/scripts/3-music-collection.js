console.log('***** Music Collection *****')

// create an empty array to represent collection
let collection = [];

// create function that makes an object for each album

function addToCollection(title, artist, yearPublished, tracks) {
    const album = {
        albumTitle : title,
        albumArtist : artist,
        albumYear : yearPublished,
        tracks : tracks
    }
    collection.push(album);
    return collection;
}

// quick test
console.log('add a record to collection:', addToCollection('Sheet One', 'Plastikman', 1993, [{'Drp':'1:45'},
, {'Plasticity':'11:00'}, {'Gak':'5:38'}, {'Okx':'0:34'}, {'Helikopter':'8:20'}]));
console.log('log collection', collection);

// test the function - add 6 albums, return array
console.log('add boards of canada', addToCollection('Music Has The Right To Children', 'Boards of Canada', 1998));
console.log('add waveform transmission', addToCollection('Waveform Transmission vol 1', 'Jeff Mills', 1992));
console.log('add some drexcia side project', addToCollection('The Opening of the Cerebral Gate', 'Transllusion', 2001));
console.log('add AIC', addToCollection('MTV Unplugged', 'Alice in Chains', 1996));
console.log('add Consumed', addToCollection('Consumed', 'Plastikman', 1998, ['Contain', '8:29']));
console.log('add reality to midi', addToCollection('Reality to Midi', 'Johannes Heil', 1998, [{'Enter Club':'6:25'}, {'Paradox':'6:43'}]));
console.log(collection);

// create function to show collection
function showCollection(array) {
    console.log(array.length);
    for (let i in array) {
        console.log(array[i].albumTitle, 'by', array[i].albumArtist, 'published in', array[i].albumYear);
    }
}

// test showCollection
console.log('test showCollection');
// showCollection(collection);
console.log('test showCollection', showCollection(collection));


// add findByArtist function to search by artist name in any record collection
function findByArtist(artist, array) {
    const artistArray = []; // create empty array
    for (let n in array) { // iterate through array passed to function
        if (artist === array[n].albumArtist) {  // compare artist name passed to artist name in array
            artistArray.push(array[n]);         // add matched name to new array
        } else { 
//            console.log('Artist not found');
//            return artistArray; commented out because a return here would exit the function
        }
    }
    return artistArray;
}

// test findByArtist
console.log('test findByArtist, Plastikman:', findByArtist('Plastikman', collection));
console.log('find by artist, Nirvana - expect empty array', findByArtist('Nirvana', collection));


// create a search function
function search(array, artist, year) {
    const artistArray = [];
    for (n in array) {
        if (artist === array[n].albumArtist && year === array[n].albumYear) { // checks if both album in year are present
            artistArray.push(array[n]);
        } else if (artist == null || year == null || collection == null) { // checks if either input is null

        return array;   // returns original array 
        }   
    }   
    return artistArray; // returns new array
}


// test search function
console.log('test search function - true', search(collection, 'Plastikman', 1998));
console.log('test search function - false', search(collection, 'Plastikman', 1991));
console.log('test search function - input empty', search(collection, 'Alice In Chains'));
console.log('test search function - no search param', search(collection));

