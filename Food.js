class Food{
    constructor(){}

    static getFoodStock(){
        foodStockRef.on("value",function(data){foodStock = data.val();})
    }

    static updateFoodStock(count){
        if(keyDown(UP_ARROW)){
            foodStock -= 1
            database.ref(foodStockRef).update({foodStock: count});
        }
    }
}