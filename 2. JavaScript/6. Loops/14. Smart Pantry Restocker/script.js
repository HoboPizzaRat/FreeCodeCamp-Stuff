const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData){
  let parsed = [];
  loopstart: for(let row of rawData){
    const [sku, name, qty, expires, zone] = row.split("|");
    for(let p of parsed){
      if(p.sku == sku){
        continue loopstart;
      }
    }
    parsed.push({
      "sku": sku,
      "name": name, 
      "qty": Number(qty),
      "expires": expires,
      "zone": zone ?? "general"
    })
  }
  return parsed;
}
function planRestock(pantry, shipment){
  let restocks = [];
  loop: for(let s of shipment){
    let item = {
      type: "",
      item: ""
    }
    const {sku, name, qty, expires, zone} = s;
    if(qty <= 0){
      item.type = "discard";
      item.item = s;
      restocks.push(item);
      continue loop;
    }
    let skuInPantry = false;
    check: for(let p of pantry){
      console.log(p)
      if(p.sku != undefined){
        skuInPantry = true;
        break check;
      }
    }
    if(skuInPantry){
      item.type = "restock";
    }else{
      item.type = "donate";
    }
    item.item = s;
    restocks.push(item)
  }
  return restocks;
}
function groupByZone(actions){
  let zones = {};
  for(let action of actions){
    let zone = action.item.zone;
    if(!zones[zone]){
      zones[zone] = [];
    }
    zones[zone].push(action);
  }
  return zones;
}
function clonePantry(pantry){
  return  JSON.parse(JSON.stringify(pantry));
}
const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);
console.log(grouped);
