import fetch from "node-fetch";
const function1 = (event) => {
  console.log("function1");
  fetch("http://localhost:3000/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ event: event }),
  }).then((res) => {
    console.log("Request complete! response:", res);
  });
};

module.exports = {
  function1,
};
