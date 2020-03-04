var character = {
    name: "Minnie Mouse",
    age: 92,
    friends: ["Mickey Mouse", "Goofy", "Donald Duck"],
    address: {
        street: "Disney World",
        city: "California",
    },
    sayHello: function (){
        console.log("hello");
    },
};


var cat = {
    name: "Shira",
    age: 7,
    food: ["dry food", "chicken"],
    address: {
        Milano: "Scarpa",
        Mountain: "SanSicario",
    },
    Mirror: function (){
        console.log("Who is the most beautiful cat in the world?"+this.name);
    },
};