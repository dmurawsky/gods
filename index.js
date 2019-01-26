import React from "react";

const Home = ({ data, user, updateData }) => (
  <div
    style={{
      height: "100%",
      backgroundImage: 'url("http://static.azotheos.com/hermes_bg_med.jpg")',
      backgroundPosition: "bottom right",
      backgroundSize: "cover"
    }}
  >
    <button onClick={() => updateData({ other: "data" })}>
      Update Other Data
    </button>
    <div>
      <pre>{JSON.stringify({ data, user, updateData }, null, 2)}</pre>
    </div>
  </div>
);

export default Home;
