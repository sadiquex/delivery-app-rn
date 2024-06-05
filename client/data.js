export const categories = [
  {
    id: 1,
    name: "Pizza",
    image: require("./assets/images/categories/pizza.png"),
  },
  {
    id: 2,
    name: "Burger",
    image: require("./assets/images/categories/burger.png"),
  },
  {
    id: 3,
    name: "Italian",
    image: require("./assets/images/categories/spaghetti.png"),
  },
  {
    id: 4,
    name: "Sweets",
    image: require("./assets/images/categories/cupcake.png"),
  },
  {
    id: 5,
    name: "Fish",
    image: require("./assets/images/categories/fish.png"),
  },
  {
    id: 6,
    name: "Noodles",
    image: require("./assets/images/categories/takeout-box.png"),
  },
  {
    id: 7,
    name: "Drink",
    image: require("./assets/images/categories/drink.png"),
  },
];

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "Soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Jones",
      image: require("./assets/images/dishes/pizza.jpeg"),
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
        {
          id: 2,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
        {
          id: 3,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
      ],
    },
    {
      id: 2,
      name: "Drey Lit",
      image: require("./assets/images/dishes/pizza.jpeg"),
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
        {
          id: 2,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
        {
          id: 3,
          name: "pizza",
          description: "Cheezy garlic pizza",
          price: 10,
          image: require("./assets/images/dishes/pizzaDish.jpeg"),
        },
      ],
    },
  ],
};
