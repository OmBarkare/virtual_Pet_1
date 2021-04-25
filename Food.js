class Food{
    constructor(){}

    async getFoodStock(){
        await foodStockRef.on("value",function(data){foodStock = data.val();})
    }

    update(){
        database.ref("Food").update({
          foodStock: 8
        });
      }
    }