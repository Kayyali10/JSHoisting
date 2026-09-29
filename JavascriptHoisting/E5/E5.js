let product = {
    id: 1,
    name: "ahmad",
    price: 100,
    category: "car",
    available: true
};

//Orignal Object 
console.log(product);

//From Object To String Using strinfy

let string =JSON.stringify(product); 
console.log(string);

//From String To Object Using Parse 

let object = JSON.parse(string);
console.log(object);


//handle
try{

let invalidjson = '{"name":"kayyali",}';

let result = JSON.parse(invalidjson);

console.log(result);
} catch(error){
    console.log("invalid json")

}

