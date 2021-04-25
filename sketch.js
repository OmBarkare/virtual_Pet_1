var database;
var foodStock;
var food, foodStockRef;

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();

  foodStockRef = database.ref("Food");

}


function draw() {  

  Food.getFoodStock();
  if(keyDown("space")){
    Food.updateFoodStock();
  }  
  drawSprites();
  //add styles here

}



