console.log('***** Music Collection *****')

// create an empty array to represent collection
let collection = [];

// create function that makes an object for each album

function addToCollection(title, artist, yearPublished) {
    const album = {
        albumTitle : title,
        albumArtist : artist,
        albumYear : yearPublished
    }
    collection.push(album);
    return collection;
}

// quick test
console.log('add a record to collection:', addToCollection('Sheet One', 'Plastikman', 1993));
console.log(collection);

// test the function - add 6 albums, return array
console.log('add boards of canada', addToCollection('Music Has The Right To Children', 'Boards of Canada', 1998));
console.log('add waveform transmission', addToCollection('Waveform Transmission vol 1', 'Jeff Mills', 1992));
console.log('add some drexcia side project', addToCollection('The Opening of the Cerebral Gate', 'Transllusion', 2001));
console.log('add AIC', addToCollection('MTV Unplugged', 'Alice in Chains', 1996));
console.log('add Consumed', addToCollection('Consumed', 'Plastikman', 1998));
console.log('add reality to midi', addToCollection('Reality to Midi', 'Johannes Heil', 1998));
console.log(collection);

// create function to show collection
function showCollection(array) {
    console.log(array.length);
    for (let i in array) {
        console.log(array[i].albumTitle, 'by', array[i].albumArtist, 'published in', array[i].albumYear);
    }
}

// test showCollection
console.log('test showCollection', showCollection(collection));

// add findByArtist function to search by artist name
function findByArtist(artist, array) {
    const artistArray = [];
    for (let n in array) {
        if (artist === array[n].albumArtist) {
            artistArray.push(array[n]);
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
