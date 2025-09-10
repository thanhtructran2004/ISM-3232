inventory = [
    {sku: "SKU-1707", name: "Airpods", price: 259.00, stock: 2},
    {sku: "SKU-2004", name: "Iphone", price: 1099, stock: 10},
    {sku: "SKU-3345", name: "Ipad", price: 359, stock: 5},
    {sku: "SKU-1995", name: "Macbook Air", price: 899, stock: 7},
    ]

inventory.forEach(obj => console.log(`${obj.sku}| Name: ${obj.name} | Price: ${obj.price} | Stock: ${obj.stock}`));

