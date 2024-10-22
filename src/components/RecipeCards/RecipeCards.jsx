import RecipeCard from "../RecipeCard/RecipeCard";
import PropTypes from "prop-types";

const RecipeCards = ({ recipeCards }) => {
  return (
    <div className="md:grid-cols-2 md:w-2/3 grid w-full grid-cols-1 gap-6">
      {recipeCards.map((recipeCard) => (
        <RecipeCard
          key={recipeCard.recipe_id}
          recipeCard={recipeCard}
        ></RecipeCard>
      ))}
    </div>
  );
};

RecipeCards.propTypes = {
  recipeCards: PropTypes.array,
};
export default RecipeCards;
