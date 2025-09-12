let customers =[
{
    name: "Ariana Grande",
    email: "arianagrande@usf.edu",
    purchases: ["Lipstick", "Perfumes","Scrunchies"]
},
{
    name: "Robert Pattinson",
    email: "pattinsontwilight@usf.edu",
    purchases: ["Book","Pencil","Ruler"]
},
{
    name: "Kim Taehyung",
    email: "kimtaehyung1995@usf.edu",
    purchases: ["Ipad","Iphone","Macbook"]
}
];

customers.forEach(obj => console.log(`Name: ${obj.name}| Email : ${obj.email}
    | Purchases: ${obj.purchases}`));

//Add and Remove Data
let new_object = {
    name: "Tanjiro Kamado",
    email: "kamadoslayers@usf.edu",
    purchases: ["Clothes","Shoes","Rings"]
};

let new_customer = customers.push(new_object);
console.log("New customer added:",new_customer);


// Update Customer Info

customers[0].email = "robertnew@usf.edu";
customers[2].purchases.push("Webcam");


// Display Customer Information

customers.forEach (obj => console.log(`Name: ${obj.name} | Email: ${obj.email}
    | Total Purchases: ${obj.purchases.length}`));

