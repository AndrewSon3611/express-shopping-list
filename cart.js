const items = require("./fakeDB")

class Item{
    constructor(name, price){
        this.name = name;
        this.price = price;
    
        items.push(this)
    }
    static findAll(){
        return items;
    }
    static update(name, data){
        let itemFound = Item.find(name);
        if(itemFound === undefined){
            throw {message: "Item Not Found", status: 404}
        }
        itemFound.name = data.name;
        itemFound.price = data.price;

        return itemFound;
    }
    static find(name){
        const itemFound = items.find(v => v.name === name);
        if(itemFound === undefined){
            throw {message: "Item Not Found", status: 404}
        }
        return itemFound;
    }
    static remove(name){
        let indexFound = items.findIndex(v => v.name === name);
        if (indexFound === -1){
            throw {message: "Item Not Found", status: 404}
        }
        items.splice(indexFound, 1);
    }
}

module.exports = cart