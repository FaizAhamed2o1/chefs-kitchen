import { useEffect, useState } from "react";
import CookingTable from "../CookingTable/CookingTable";
import RecipeCards from "../RecipeCards/RecipeCards";

const OurRecipes = () => {
  const [recipeCards, setRecipeCards] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipeCards(data));
  }, []);
  return (
    <div className="mb-24">
      <div className=" md:mb-12 mb-8 text-center">
        <h2 className="md:text-[2.5rem] md:mb-6 text-3xl mb-4 text-[#150b2b] font-semibold ">
          Our Recipes
        </h2>
        <p className="text-[#150b2b99] leading-relaxed max-w-[51.5rem] mx-auto">
          Explore a world of culinary inspiration with our curated recipes! Each
          dish is designed to delight your taste buds and spark creativity.
          Discover your next favorite meal today!
        </p>
      </div>

      <div className="md:flex-row md:gap-6 flex flex-col gap-8">
        <RecipeCards recipeCards={recipeCards}></RecipeCards>

        <CookingTable></CookingTable>
      </div>
    </div>
  );
};

export default OurRecipes;
