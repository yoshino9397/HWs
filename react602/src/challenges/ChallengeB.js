import React from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts/1/comments";

const ChallengeB = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(URL);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>ChallengeB</h2>
      <table style={{ width: "80%" }}>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          </React.Fragment>
        ))}
      </table>
    </>
  );
};

export default ChallengeB;
