class Food{
  constructor(){}

  async getFoodStock(){
    foodStockRef = database.ref("Food");
    await foodStockRef.on("value",function(data){foodStock = data.val();})
  }

  update(count){
    if(count <= 0)
    count = 0

    if(count > 0)
      count -= 1  

    database.ref("/").update({
      Food: count
    });
  }
}