const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(arr){
  let result = arr.filter((item) => item != undefined);
  if(result.length != arr.length){
    console.log("[COMPACTED]");
  }
  return result;
}
function sortFragments(arr){
  let sorted = arr.slice();
  for(let i = 0; i < sorted.length; i++){
    let smallest = sorted[i];
    let smallest_index = i;
    for(let y = i + 1; y < sorted.length; y++){
      if(smallest.id > sorted[y].id){
        smallest = sorted[y];
        smallest_index = y;
      }
    }
    let temp = sorted[smallest_index];
    sorted[smallest_index] = sorted[i];
    sorted[i] = temp;
  }
  return sorted;
}
function dedupeFragments(arr){
  let deduped = [];
  for(let item of arr){
    if(deduped.some((a) => a.id == item.id)){
      console.log("[DEDUPED]");
    }
    else{
      deduped.push(item);
    }
  }
  return deduped;
}
function fillMissingFragments(arr){
  let id_end = arr[arr.length-1].id;
  let id_start = arr[0].id;
  let filled = [];
  let counter = 0;
  for(let i = id_start; i <= id_end; i++){
    if(arr.some((a) => a.id == i)){
      filled.push(arr[counter]);
      counter += 1;
    }else{
      filled.push({"id": i, "text": "[...]"});
      console.log("[FILLED]")
    }
  }
  return filled;
}
function assembleStory(arr){
  let story = "";
  for(let item of arr){
    story += item.text+"\n";
  }
  return story.slice(0,story.length-1);
}
let compactedShuffledFragments = compactFragments(shuffledFragments);
console.log(compactedShuffledFragments);
let sortedFragments = sortFragments(compactedShuffledFragments);
console.log(sortedFragments);
let dedupedFragments = dedupeFragments(sortedFragments);
console.log(dedupedFragments);
let filledFragments = fillMissingFragments(dedupedFragments);
console.log(filledFragments);
console.log(assembleStory(filledFragments));