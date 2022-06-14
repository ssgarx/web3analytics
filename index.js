import axios from "axios";
const web3analytics = {
  init: (project_key) => {
    console.log("init");
    // fetch("http://localhost:3000/api/v1/view_event", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     project_key: project_key,
    //     url: "",
    //   }),
    // })
    //   .then((res) => {
    //     localStorage.setItem("web3analytics", res.data.user_id);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  granular_event: (project_key, event_key, event_value) => {
    console.log("granular_event");
    // fetch("http://localhost:3000/api/v1/granular_event", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     project_key: project_key,
    //     url: window.location.href,
    //     user_id: localStorage.getItem("web3analytics"),
    //     event: {
    //       type: event_key,
    //       payload: event_value,
    //     },
    //   }),
    // })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  leave_event: (project_key) => {
    console.log("leave_event");
    // if (localStorage.getItem("web3analytics")) {
    //   fetch("http://localhost:3000/api/v1/leave_event", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       project_key: project_key,
    //       url: window.location.href,
    //       user_id: localStorage.getItem("web3analytics"),
    //     }),
    //   })
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }
  },
};
export default web3analytics;
