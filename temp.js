db.Products.insertOne(
    {
        "name":"Product 1",
        "desc":"This is the description of Product 1",
        "price":45,
        "url":"https://picsum.photos/id/870/200/300"
    }
);



db.Products.insertOne(
    {
        "name":"Product 2",
        "desc":"This is the description of Product 2",
        "price":75,
        "url":"https://picsum.photos/id/770/200/300"
    }
);

db.Products.find();

db.Products.insertMany(
    [
    {
        "name":"Product 3",
        "desc":"This is the description of Product 3",
        "price":35,
        "url":"https://picsum.photos/id/670/200/300"
    },
    {
        "name":"Product 4",
        "desc":"This is the description of Product 4",
        "price":55,
        "url":"https://picsum.photos/id/570/200/300"
    }
]
);