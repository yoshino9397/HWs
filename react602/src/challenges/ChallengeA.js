import React from "react";

const ChallengeA = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [list, setList] = React.useState("");

  const changeHandler = (e) => setInputValue(e.target.value);
  const submitHandler = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };
  const deleteHandler = (item) => setList(list.filter((el) => el !== item));

  return (
    <>
    <h2>ChallengeA</h2>
      <input type="text" value={inputValue} onChange={changeHandler} />
      <button onClick={submitHandler}>Add</button>
      <br />
      <ul>
        {list.length > 0 &&
          list.map((item, index) => (
            <div style={{ display: "flex", flexDirection: "row", gap: "20px 10px" }}>
              <li key={index}>{item}</li>
              <button onClick={() => deleteHandler(item)}>Delete</button>
            </div>
          ))}
      </ul>
    </>
  );
};

export default ChallengeA;
