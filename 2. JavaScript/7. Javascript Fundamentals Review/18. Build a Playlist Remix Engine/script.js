const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
function flattenPlaylists(arr){
  let flattened = [];
  if(!Array.isArray(arr)){
    return flattened;
  }
  for(let playlist_i = 0; playlist_i < arr.length; playlist_i++){
    for(let song_i = 0; song_i < arr[playlist_i].length; song_i++){
      let elem = arr[playlist_i][song_i];
      //console.log(elem);
      elem["source"] = [playlist_i, song_i];
      flattened.push(elem);
    }
  }
  return flattened;
}
function scoreTracks(arr){
  let scoredTracks = [];
  for(let elem of arr){
    let scored = {...elem};
    let votes = scored.votes;
    let bpm = scored.bpm;
    scored.score = votes * 10 - Math.abs(bpm - 120);
    scoredTracks.push(scored);
  }
  return scoredTracks;
}
function dedupeTracks(arr){
  let deduped = [];
  for(let elem of arr){
    if(deduped.some((e) => elem.trackId == e.trackId)){
      continue;
    }
    deduped.push(elem);
  }
  return deduped;
}
function enforceArtistQuota(arr, maxArtistOccurences){
  let occurences = {};
  let enforcedQuota = [];
  for(let i = 0; i < arr.length; i++){
    let artist = arr[i].artist;
    let count = occurences[artist];
    if(count == undefined){
      occurences[artist] = 1;
    }else{
      occurences[artist] += 1;
    }
    count = occurences[artist];
    if(count <= maxArtistOccurences){
      enforcedQuota.push(arr[i]);
    }
  }
  return enforcedQuota;
}
function buildSchedule(arr){
  let schedule = [];
  for(let i = 0; i < arr.length; i++){
    let slot = i + 1;
    let trackId = arr[i].trackId;
    schedule.push({
      slot: slot,
      trackId: trackId
    })
  }
  return schedule;
}
function remixPlaylist(arr, maxPerArtist){
  let flattened = flattenPlaylists(arr);
  let scored = scoreTracks(flattened);
  let deduped = dedupeTracks(scored);
  let enforced = enforceArtistQuota(deduped, maxPerArtist);
  let scheduled = buildSchedule(enforced);
  return scheduled;
}


console.log(remixPlaylist(playlists, 4));
