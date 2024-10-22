import PropTypes from "prop-types";
import WantToCook from "../WantToCook/WantToCook";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";

const CookingTable = ({ addWantToCook, handlePreparingBtn }) => {
  return (
    <div className="md:w-[40%] rounded-2xl self-start w-full py-8 border">
      <div>
        <WantToCook
          addWantToCook={addWantToCook}
          handlePreparingBtn={handlePreparingBtn}
        ></WantToCook>

        <CurrentlyCooking></CurrentlyCooking>
      </div>
    </div>
  );
};

CookingTable.propTypes = {
  addWantToCook: PropTypes.array,
  handlePreparingBtn: PropTypes.func,
};

export default CookingTable;
