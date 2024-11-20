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
        "name":"Product 7",
        "desc":"This is the description of Product 7",
        "price":95,
        "url":"https://picsum.photos/id/270/200/300"
    },
    {
        "name":"Product 8",
        "desc":"This is the description of Product 8",
        "price":85,
        "url":"https://picsum.photos/id/170/200/300"
    }
]
);