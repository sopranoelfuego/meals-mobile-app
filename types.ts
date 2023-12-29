export type TCategory={
   id:string
  title:string
  color:string
}
export type TMeal={
    id :string
    categoryIds:Array<string>
    title :string
    imageUrl :string
    ingredients :Array<string>
    steps :Array<string>,
    duration :number
    complexity :string
    affordability : string
    isGlutenFree :boolean;
    isVegan :boolean;
    isVegetarian :boolean
    isLactoseFree :boolean
}