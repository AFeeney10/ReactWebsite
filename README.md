
To start this application navigate to frontend/src and run:
### `npm start`

You will also need to set up MongoDB on your local host at port 27017
Once you have installed MongoDB create a DB called AmeroBakery
In this DB create three collections: cookies, FormSubmissions, and orders

In cookes insert the following data:
{
  "id": 1,
  "type": "ChocolateChipDozen",
  "image": "./images/stackOfCookies.jpeg",
  "lable": "Classic Chocolate Chip Cookie DOZEN",
  "text": "Our irresistible treats are made with a perfect blend of premium ingredients, including rich semi-sweet chocolate chips, buttery dough, and a touch of vanilla for that classic, melt-in-your-mouth goodness. Each bite is a harmonious balance of sweet and savory, creating a satisfying and comforting experience that's perfect for any occasion. ",
  "price": "29.00"
}
{
  "id": 2,
  "type": "SugarDozen",
  "image": "./images/multipackageSugarCookie.jpeg",
  "lable": "Sugar Cookies DOZEN",
  "text": " These delicious treats are baked to perfection, featuring a delicate balance of buttery goodness and a hint of vanilla. Perfectly soft and chewy with a delightful sugary crunch, our Sugar Cookies are a timeless favorite for any occasion.",
  "price": "28.00"
}
{
  "id": 3,
  "type": "SnickerdoodleDozen",
  "image": "./images/multipackageSnickerdoodle.jpeg",
  "lable": "Snickerdoodle DOZEN",
  "text": "Indulge in the timeless delight of our Snickerdoodle Cookie. Soft and chewy, with a perfect balance of cinnamon and sugar, this classic treat will transport your taste buds to a world of sweet nostalgia.",
  "price": "28.00"
}
{
  "id": 4,
  "type": "MonsterDozen",
  "image": "./images/singlePackagedMonsterCookie.jpeg",
  "lable": "Monster Cookies DOZEN",
  "text": "Amero Monster Cookies are oversized, chewy, and loaded with a variety of mix-ins that create a monster-sized explosion of flavor. These cookies are a beloved treat for those who crave a combination of sweet, savory, and indulgent flavors in a single bite.",
  "price": "36.00"
}
{
  "id": "5",
  "type": "BananaBread",
  "image": "./images/BananaBread.jpeg",
  "lable": "Banana Bread Loaf",
  "text": "Baked to perfection with a hint of warm cinnamon, our banana bread is the ultimate comfort food for any time of day. Enjoy it as a satisfying breakfast, a delightful afternoon snack, or a sweet ending to your meal. ",
  "price": "18.00"
}
{
  "id": 6,
  "type": "VarietyBox",
  "image": "./images/varietyBox.jpeg",
  "lable": "Variety Cookie Box",
  "text": "hello",
  "price": "39.00",
  "label": null
}
{
  "id": 8,
  "type": "Sugar6pack",
  "image": "./images/singlePackagedSugarCookie.jpeg",
  "lable": "Sugar Cookies SIX-PACK",
  "text": " These delicious treats are baked to perfection, featuring a delicate balance of buttery goodness and a hint of vanilla. Perfectly soft and chewy with a delightful sugary crunch, our Sugar Cookies are a timeless favorite for any occasion.",
  "price": "14.00"
}
{
      "id": 7,
      "type": "ChocolateChip6pack",
      "image": "./images/singlePackagedChocolateChipCookie.jpeg",
      "lable": "Classic Chocolate Chip Cookie SIX-PACK",
      "text": "Our irresistible treats are made with a perfect blend of premium ingredients, including rich semi-sweet chocolate chips, buttery dough, and a touch of vanilla for that classic, melt-in-your-mouth goodness. Each bite is a harmonious balance of sweet and savory, creating a satisfying and comforting experience that's perfect for any occasion. ",
      "price": "15.00"
 }
{
  "id": 9,
  "type": "Snickerdoodle6pack",
  "image": "./images/singlePackagedSnickerdoodleCookie.jpeg",
  "lable": "Snickerdoodle SIX-PACK",
  "text": "Indulge in the timeless delight of our Snickerdoodle Cookie. Soft and chewy, with a perfect balance of cinnamon and sugar, this classic treat will transport your taste buds to a world of sweet nostalgia.",
  "price": "14.00"
}
{
  "id": 10,
  "type": "Monster6pack",
  "image": "./images/singlePackagedMonsterCookie.jpeg",
  "lable": "Monster Cookies SIX-PACK",
  "text": "Amero Monster Cookies are oversized, chewy, and loaded with a variety of mix-ins that create a monster-sized explosion of flavor. These cookies are a beloved treat for those who crave a combination of sweet, savory, and indulgent flavors in a single bite.",
  "price": "18.00"
}

Once mongoDB is runing you can go to the backend folder and run:
## node ./backend.js

This website contains a hidden page called admin that can be found by adding the path /admin to the end of your url.
Ex: http://localhost:3000/admin
this page allows you to edit, delete and add projects.