import { client } from "./sanity";

// featured restaurants
export const getFeaturedRestaurants = async () => {
  const queryFeaturedRestaurants = `*[_type == "featured"]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
            type->{
          name
            }
        }
      }`;

  const featuredRestaurants = await client.fetch(queryFeaturedRestaurants);
  return featuredRestaurants;
};

// all categories
export const getCategories = async () => {
  const queryCategories = `*[_type == "category"]`;

  const categories = await client.fetch(queryCategories);
  return categories;
};

// featured restaurant by id
export const getFeaturedRestaurantById = async (id) => {
  const queryFeaturedRestaurants = `*[_type == "featured" && _id == "${id}"]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->{
              ...
            },
              type->{
            name
              }
          }
        }[0]`;

  const featuredRestaurants = await client.fetch(queryFeaturedRestaurants);
  return featuredRestaurants;
};
