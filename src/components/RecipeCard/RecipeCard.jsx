import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const RecipeCard = ({ recipeCard }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipeCard;
  return (
    <div className="md:space-y-6 rounded-2xl p-6 space-y-4 border">
      <img
        className=" h-200px rounded-2xl"
        src={recipe_image}
        alt={recipe_name}
      />

      <div className="pb-4 border-b">
        <h3 className="md:mb-4 mb-2 text-xl font-semibold text-[#282828]">
          {recipe_name}
        </h3>
        <p className="md:text-base text-sm text-[#878787] leading-[1.88]">
          {short_description}
        </p>
      </div>

      <div className="pb-4 border-b">
        <h3 className="md:mb-4 mb-2 text-[#282828] text-lg font-medium ">
          Ingredients: {ingredients.length}
        </h3>
        <ul className="md:text-base text-sm list-disc list-inside text-[#878787]">
          {ingredients.map((ingredient, index) => (
            <li className="leading-[1.78]" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-[#282828cc] flex items-center gap-4">
        <p className="md:gap-2 flex items-center gap-1">
          <span>
            <IoTimeOutline />
          </span>
          <span>{preparing_time}</span>
        </p>

        <p className="md:gap-2 flex items-center gap-1">
          <span>
            <AiOutlineFire />
          </span>

          <span>{calories}</span>
        </p>
      </div>

      <button className="text-lg font-medium text-[#150b2b] bg-[#0be58a] px-6 py-3 rounded-full">
        Want to Cook
      </button>
    </div>
  );
};

RecipeCard.propTypes = {
  recipeCard: PropTypes.object,
};
export default RecipeCard;
