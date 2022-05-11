import http from "http";
import mySum from "./mySum.js";
import mySecondArr from "./myArr.js";
import person from "./employee.js";

const server = http.createServer((req, res) => {
  const sumArray = [2, 4, 6];

  const setAverage = () => {
    const total = mySecondArr.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    });
    const average = total / mySecondArr.length;
    return average;
  };

  setTimeout(() => {
    console.log("Goodbye");
  }, 3000);

  const newPerson = new person("Yoshino", `yoshino@mail`);

  res.write(`
    <html>
        <head>
            <title>First Page</title>
        </head>
        <body>
          <h2>mySum is ${mySum(...sumArray)}</h2>
          <h2>mySecondArray is ${mySecondArr}</h2>
          <h2>Average is ${setAverage(...mySecondArr)}</h2>
          <h2>${newPerson.greeting()}</h2>
        </body>
    </html>
`);
  res.end();
});

server.listen(8000);
