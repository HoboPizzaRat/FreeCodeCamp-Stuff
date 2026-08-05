function normalizeUnits (manifest){
  let copy = {...manifest};
  if(copy.unit == "lb"){
    copy.unit = "kg";
    copy.weight = copy.weight * 0.45;
  }
  return copy;
}

function validateManifest (manifest){
  let copy = {...manifest};
  let invalidities = {};
  if(!copy.hasOwnProperty("containerId")){
    invalidities.containerId = "Missing"
  }else if(copy.containerId <= 0 || !Number.isInteger(copy.containerId)){
    invalidities.containerId = "Invalid"
  }
  if(!copy.hasOwnProperty("destination")){
    invalidities.destination = "Missing"
  }else if(typeof copy.destination != "string" || copy.destination.trim() == ""){
    invalidities.destination = "Invalid";
  }
  if(!copy.hasOwnProperty("weight")){
    invalidities.weight = "Missing"
  }else if(copy.weight <= 0 || Number.isNaN(copy.weight)){
    invalidities.weight = "Invalid"
  }
  if(!copy.hasOwnProperty("unit")){
    invalidities.unit = "Missing";
  }else if(!(copy.unit == "kg" || copy.unit == "lb")){
    invalidities.unit = "Invalid";
  }
  if(!copy.hasOwnProperty("hazmat")){
    invalidities.hazmat = "Missing"
  }else if(typeof copy.hazmat != "boolean"){
    invalidities.hazmat = "Invalid";
  }
  return invalidities;
}

function processManifest(manifest){
  let result = validateManifest(manifest);
  if(Object.keys(result).length == 0){
    let containerId = manifest.containerId;
    let weight = normalizeUnits(manifest).weight;
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${weight} kg`);
  }
  else{
    let containerId = manifest.containerId;
    console.log(`Validation error: ${containerId}`);
    console.log(result);
  }
}

let result = normalizeUnits({ containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true });
console.log(result);

result = validateManifest({ containerId: 0, destination: 405, weight: -84, unit: "pounds", hazmat: "no" })
console.log(result);

result = validateManifest({containerId: 1, destination: "Santa Cruz", weight: 304, unit: "kg", hazmat: false });
console.log(result)

result = processManifest({ containerId: 55, destination: "Carmel", weight: 400, unit: "lb", hazmat: false })
console.log(result);