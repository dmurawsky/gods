import React from "react";

const Home = ({ data, user, updateData }) => (
  <div>
    <button onClick={() => updateData({ other: "data" })}>
      Update Other Data
    </button>
    <div>
      <pre>{JSON.stringify({ data, user, updateData }, null, 2)}</pre>
    </div>
  </div>
);

export default Home;
