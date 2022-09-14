console.log('***** Music Collection *****')

// create an empty array to represent collection
let collection = [];

// create function that makes an object for each album

function addToCollection(title, artist, yearPublished) {
    const album = {
        albumTitle : title,
        albumArtist : artist,
        yearPublished : yearPublished
    }
    collection.push(album);
    return collection;
}

console.log('add a record to collection:', addToCollection('1', '2', 1993));
console.log(collection);