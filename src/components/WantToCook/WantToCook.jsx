import PropTypes from "prop-types";
import "./WantToCook.css";

const WantToCook = ({ addWantToCook, handlePreparingBtn }) => {
  return (
    <div className="md:mb-12 mb-9">
      <h2 className="max-w-[21.875rem] text-2xl font-semibold text-[#282828] text-center pb-4 mb-6 border-b mx-auto">
        Want to cook: {addWantToCook.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="md:text-base ">
          {/* head */}
          <thead className="md:text-base text-start text-sm text-[#878787]">
            <tr>
              <th className=""></th>
              <th className="text-start md:w-[8.25rem]">Name</th>
              <th className="text-start">Time</th>
              <th className="text-start">Calories</th>
              <th className="text-start"></th>
            </tr>
          </thead>

          <tbody className="bg-[#28282807] text-[#282828b3]">
            {addWantToCook.map((wantToCook, index) => (
              <tr key={wantToCook.recipe_id}>
                <th>{index + 1 || " "}</th>
                <td>{wantToCook.recipe_name}</td>
                <td>{wantToCook.preparing_time}</td>
                <td>{wantToCook.calories}</td>
                <td>
                  <button
                    className="font-medium px-[1.125rem] py-2 bg-[#0be58a] rounded-full"
                    onClick={() => handlePreparingBtn(wantToCook)}
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

WantToCook.propTypes = {
  addWantToCook: PropTypes.array,
  handlePreparingBtn: PropTypes.func,
};

export default WantToCook;
