import { useEffect, useState } from "react";
import CookingTable from "../CookingTable/CookingTable";
import RecipeCards from "../RecipeCards/RecipeCards";
import { toggle } from "../../utils/utils.js";

const OurRecipes = () => {
  const [recipeCards, setRecipeCards] = useState([]);
  const [addWantToCook, setAddWantToCook] = useState([]);
  const [showDuplicateWarning, setShowDuplicateWarning] = useState(false);
  const [addCurrentlyCooking, setAddCurrentlyCooking] = useState([]);
  const [totalCookingTime, setTotalCookingTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("recipes.json")
      .then((response) => response.json())
      .then((data) => setRecipeCards(data));
  }, []);

  // Info: Adds the recipe card that we clicked on the want to cook table
  const handleWantToCookBtn = (recipeCard) => {
    const isAlreadyAdded = addWantToCook.some(
      (cookItem) => cookItem.recipe_id === recipeCard.recipe_id
    );

    // Note: adds the clicked item on want to cook and if we click it again, it will show a warning
    if (!isAlreadyAdded) {
      const newAddWantToCook = [...addWantToCook, recipeCard];
      setAddWantToCook(newAddWantToCook);
    } else {
      toggle(showDuplicateWarning, setShowDuplicateWarning);
    }

    // Note: hides the warning automatically after 2.5 seconds
    setTimeout(() => {
      setShowDuplicateWarning(false);
    }, 2500);
  };

  // Info: adds the clicked item to currently cooking and removes it from want to cook
  const handlePreparingBtn = (wantToCook) => {
    const newAddWantToCook = addWantToCook.filter(
      (cookItem) => cookItem.recipe_id !== wantToCook.recipe_id
    );
    setAddWantToCook(newAddWantToCook);

    const filteredItem = addWantToCook.find(
      (cookItem) => cookItem.recipe_id === wantToCook.recipe_id
    );
    const newAddCurrentlyCooking = [...addCurrentlyCooking, filteredItem];
    setAddCurrentlyCooking(newAddCurrentlyCooking);

    setTotalCookingTime(totalCookingTime + wantToCook.preparing_time);
    setTotalCalories(totalCalories + wantToCook.calories);
  };

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
        <RecipeCards
          recipeCards={recipeCards}
          handleWantToCookBtn={handleWantToCookBtn}
        ></RecipeCards>

        <CookingTable
          addWantToCook={addWantToCook}
          handlePreparingBtn={handlePreparingBtn}
          addCurrentlyCooking={addCurrentlyCooking}
          totalCookingTime={totalCookingTime}
          totalCalories={totalCalories}
        ></CookingTable>
      </div>

      {/* Toast */}
      <div
        className={`toast toast-end ${
          showDuplicateWarning ? "block" : "hidden"
        }`}
      >
        <div className="alert alert-warning">
          <span>Recipe already added!</span>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;
