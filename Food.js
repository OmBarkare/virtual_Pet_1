class Food{
    constructor(){}

    static getFoodStock(){
        foodStockRef.on("value",function(data){foodStock = data.val();})
    }

    static updateFoodStock(count){
        if(count <= 0){
            count = count - 1
            database.ref("/").update({foodStock: count});
        }
    }
}