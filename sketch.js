var database;
var foodStock;
var food, foodStockRef, foodClass;
var test, testRef;

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  foodClass = new Food();
  database = firebase.database();
  foodStockRef = database.ref("Food");
// testFunction();
}


function draw() {  

  background(0);

  foodClass.getFoodStock();

  if(keyDown("space")){
    foodClass.update();
  }  

  text("food: "+foodStock, 200, 200);
//  text("test"+test,100,100);
}

/*async function testFunction(){
  testRef = database.ref("Test");
  await testRef.on("value",function(data){test = data.val();});
}*/


