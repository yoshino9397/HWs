import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Snack from "../components/Snack";
import { snackUpdate } from "../redux/actions/action";

const SnackDept = () => {
  const [snack, setSnack] = useState();
  const snackData = useSelector((state) => state.snack.snackData.slice(0, 2));
  const dispatch = useDispatch();

  console.log("SNACK RENDER");

  const handleQuantity = (operator, id) => {
    dispatch(snackUpdate(operator, id));
    setSnack(id);
  };

  const getRandomColor = (id) => {
    let color = "#";
    let letter = "0123456789ABCDEF";
    if (snack === id) {
      for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
      }
    }

    return color;
  };

  return (
    <>
      <h1>Snack Department</h1>
      <div className="card-group">
        {snackData.map((snack) => (
          <Snack
            key={snack.id}
            snack={snack}
            handleQuantity={handleQuantity}
            getRandomColor={getRandomColor}
          />
        ))}
      </div>
    </>
  );
};

export default SnackDept;

// import React from "react";
// import { connect } from "react-redux";

// import Snack from "../components/Snack";
// import { snackUpdate } from "../redux/actions/action";

// const SnackDept = ({ anything, something }) => {

//   const handleQuantity = (operator, id) => {
//     //dispatch to redux store
//     something(operator, id)
//   };

//   return (
//     <div className="card-group">
//       {anything.map((snack) => (
//         <Snack key={snack.id} snack={snack} handleQuantity={handleQuantity} />
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     anything: state.snackData
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     something: (operator, id) => dispatch(snackUpdate(operator, id))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SnackDept);
