import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";

const RecipeCards = ({ recipeCards, handleWantToCookBtn }) => {
  return (
    <div className="md:grid-cols-2 md:w-[60%] grid w-full grid-cols-1 gap-6">
      {recipeCards.map((recipeCard) => (
        <RecipeCard
          key={recipeCard.recipe_id}
          recipeCard={recipeCard}
          handleWantToCookBtn={handleWantToCookBtn}
        ></RecipeCard>
      ))}
    </div>
  );
};

RecipeCards.propTypes = {
  recipeCards: PropTypes.array,
  handleWantToCookBtn: PropTypes.func,
};
export default RecipeCards;
