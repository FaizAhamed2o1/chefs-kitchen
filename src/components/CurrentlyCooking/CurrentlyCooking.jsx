import PropTypes from "prop-types";

const CurrentlyCooking = () => {
  return (
    <div>
      <h2 className="max-w-[21.875rem] text-2xl font-semibold text-[#282828] text-center pb-4 mb-6 border-b mx-auto">
        Currently cooking:
      </h2>

      <div className="overflow-x-auto">
        <table className="md:text-base ">
          <thead className="md:text-base text-start text-sm text-[#878787]">
            <tr>
              <th className="md:w-14"></th>
              <th className="text-start md:w-[8.25rem]">Name</th>
              <th className="text-start">Time</th>
              <th className="text-start">Calories</th>
            </tr>
          </thead>

          <tbody className="bg-[#28282807] text-[#282828b3]"></tbody>
        </table>
      </div>
    </div>
  );
};

CurrentlyCooking.propTypes = {};

export default CurrentlyCooking;