class Food{
    constructor(){}

    getFoodStock(){
        foodStockRef.on("value",function(data){foodStock = data.val();})
    }

    updateFoodStock(count){
        database.ref(foodStockRef).update({foodStock: count});
    }
}