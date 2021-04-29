var database = firebase.database();
var foodStock;
var food, foodStockRef, foodClass;
var test, testRef;
var foodCount;

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  foodObject = new Food();
// testFunction();
}


function draw() {  

  background(0);

  foodObject.getFoodStock();

  text("food: "+foodStock, 200, 200);

//text("test"+test,100,100);
//Form.display();

  text("press space to feed the dog",400,100);
}

/*async function testFunction(){
  testRef = database.ref("Test");
  await testRef.on("value",function(data){test = data.val();});
}*/

function keyPressed(){
  if(keyCode===32){
    foodObject.update(foodStock);
  }  
}
