class Food{
    constructor(){}

    static getFoodStock(){
        foodStockRef.on("value",function(data){foodStock = data.val();})
    }

    static updateFoodStock(count){
        database.ref(foodStockRef).update({foodStock: count});
    }
}