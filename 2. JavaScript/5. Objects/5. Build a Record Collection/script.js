const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value){
  const copy = {...records};
  if(value == ""){
    delete copy[id][prop];
  }
  else if(prop != "tracks"){
    copy[id][prop] = value;
  }
  else if(prop == "tracks" && value != "" && !copy[id].hasOwnProperty("tracks")){
    copy[id][prop] = [];
    copy[id][prop].push(value);
  }
  else if(prop == "tracks" && value != ""){
    copy[id][prop].push(value);
  }
  return copy;
}

let result = updateRecords(recordCollection, 5439, "artist", "ABBA");
//console.log(result);

result = updateRecords(recordCollection, 2548, "artist", "");
//console.log(result)

result = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(result);


