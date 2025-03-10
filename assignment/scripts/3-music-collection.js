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
console.log('add a record to collection:', addToCollection('Sheet One', 'Plastikman', 1993, [{name:'Drp',duration:'1:45'},
 {name:'Plasticity',duration:'11:00'}, {name:'Gak',duration:'5:38'}, {name:'Okx',duration:'0:34'}, {name:'Helikopter',duration:'8:20'}]));
console.log('log collection', collection);

// test the function - add 6 albums, return array
console.log('add boards of canada', addToCollection('Music Has The Right To Children', 'Boards of Canada', 1998));
console.log('add waveform transmission', addToCollection('Waveform Transmission vol 1', 'Jeff Mills', 1992));
console.log('add some drexcia side project', addToCollection('The Opening of the Cerebral Gate', 'Transllusion', 2001));
console.log('add AIC', addToCollection('MTV Unplugged', 'Alice in Chains', 1996, [{name:'Got Me Wrong', duration:'4:35'}]));
console.log('add Consumed', addToCollection('Consumed', 'Plastikman', 1998, [{name:'Contain',duration:'8:29'}]));
console.log('add reality to midi', addToCollection('Reality to Midi', 'Johannes Heil', 1998, [{name:'Enter Club',duration:'6:25'}, {name:'Paradox',duration:'6:43'}]));
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


// create updated showCollection function to also show tracks
function showWithTracks(array) {
    console.log(array.length);
    for (let i in array) {                                                                                  // loops through the array given to function
        console.log(array[i].albumTitle, 'by', array[i].albumArtist, 'published in', array[i].albumYear);   // prints out sentence to console adding in the appropriate properties
        if (array[i].tracks !== undefined) {                                                                // checks to see if the album has any tracks
            //for (let t in array[i].tracks) {                                                              // tried to use a for in function but t became defined as a string
            for (let n = 0; n < array[i].tracks.length; n++) {
                let trackNum = n + 1;                                                                       // define track number to log 
                console.log(trackNum,array[i].tracks[n].name, ':', array[i].tracks[n].duration);
                trackNum++;
            }     
//        console.log(array[i].tracks);                      // check that function is reaching the 'tracks' property in the collection object                                                             
        }
    }
}

// test showWithTracks
console.log('test showWithTracks');
console.log('test showWithTracks', showWithTracks(collection));


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
        } else if (artist == null || year == null || array == null) { // checks if either input is null

        return array;   // returns original array 
        }               // exit array iteration
    }   
    return artistArray; // returns new array
}


// test search function
console.log('test search function - true', search(collection, 'Plastikman', 1998));
console.log('test search function - false', search(collection, 'Plastikman', 1991));
console.log('test search function - input empty', search(collection, 'Alice In Chains'));
console.log('test search function - no search param', search(collection));


// add search that allows search by track name
function searchWithTrack(array, artist, year, trackName) {
    let searchArray = [];
    for (let n in array) {                                                      // iterates through collection array
        if (artist === array[n].albumArtist && year === array[n].albumYear) {   // checks if arguments passed match album + year contained in array
//            console.log(array[n]);
//            searchArray.push(array[n]);

//            if (array[n].tracks != undefined) {

                for (let t = 0; t < array[n].tracks.length; t++) {                  // iterates through array of tracks
    //                console.log(array[n].tracks[t]);                              // checked if the program is iterating through tracks 
                    if (array[n].tracks[t].name === trackName) {                    // checks if the track name given matches the track name at this line in array
    //                if (array[n].tracks[t].hasOwnProperty(trackName) === true) {    // tried to check if the track name provided matches the track in the array, this didn't work
                        searchArray.push(array[n].tracks[t]);
    //                    console.log(searchArray);
                    } 
                } 

            } else if (artist == null || year == null || array == null || trackName == null) {  // checks if any input parameters are empty
            return array;                                                                       // returns original array (collection)
        }
    }    
    return searchArray;
}

// test searchWithTrack
//console.log('test searchWithTrack function - true for album but not track', searchWithTrack(collection, 'Plastikman', 1998, 'track one'));
console.log('test searchWithTrack function - Plastikman, Sheet One, 1993, Gak', searchWithTrack(collection, 'Plastikman', 1993, 'Gak'));
console.log('test searchWithTrack function - searchWithTrack: Plastikman', '1998', 'Contain', searchWithTrack(collection, 'Plastikman', 1998, 'Contain'));
console.log('test searchWithTrack function - track name not in record, expect empty array', searchWithTrack(collection, 'Plastikman', 1991, 'track name'));
console.log('test searchWithTrack function - empty inputs, return collection', searchWithTrack(collection, 'Alice In Chains'));
console.log('test searchWithTrack function - no track search param, return colletion', searchWithTrack(collection, 'Alice In Chains', 1996));
