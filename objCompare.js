


const obj1 = {name: "Person1", age: 5};
const obj2 = {age: 5, name: "Person1"};

function areEqualJSON(obj1, obj2) {
   
    // const object1 = JSON.parse(obj1);
    // const object2 = JSON.parse(obj2);
    
   
    const sortedJson1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedJson2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return sortedJson1 === sortedJson2;
}

console.log(areEqualJSON(obj1, obj2));