import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const CookingTable = ({
  addWantToCook,
  handlePreparingBtn,
  addCurrentlyCooking,
  totalCookingTime,
  totalCalories,
}) => {
  return (
    <div className="md:w-[40%] rounded-2xl self-start w-full py-8 border">
      <div>
        <WantToCook
          addWantToCook={addWantToCook}
          handlePreparingBtn={handlePreparingBtn}
        ></WantToCook>

        <CurrentlyCooking
          addCurrentlyCooking={addCurrentlyCooking}
          totalCookingTime={totalCookingTime}
          totalCalories={totalCalories}
        ></CurrentlyCooking>
      </div>
    </div>
  );
};

CookingTable.propTypes = {
  addWantToCook: PropTypes.array,
  handlePreparingBtn: PropTypes.func,
  addCurrentlyCooking: PropTypes.array,
  totalCalories: PropTypes.number,
  totalCookingTime: PropTypes.number,
};

export default CookingTable;
