class Meal {
  id = "";
    categoryIds:Array<string> = [];
    title = "";
    imageUrl = "";
    ingredients = [""];
    steps :Array<string>=[];
    duration :number=0;
    complexity = "";
    affordability : string='';
    isGlutenFree = false;
    isVegan = false;
    isVegetarian = false;
    isLactoseFree = false;
  constructor(
    id:string,
    categoryIds:Array<string> ,
    title:string,
    affordability:string,
    complexity:string,
    imageUrl:string,
    duration:number,
    ingredients:Array<string>,
    steps:Array<string>,
    isGlutenFree:boolean,
    isVegan:boolean,
    isVegetarian:boolean,
    isLactoseFree:boolean
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.imageUrl = imageUrl;
    this.ingredients = ingredients;
    this.steps = steps;
    this.duration = duration;
    this.complexity = complexity;
    this.affordability = affordability;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isVegetarian = isVegetarian;
    this.isLactoseFree = isLactoseFree;
  }
}

export default Meal;
