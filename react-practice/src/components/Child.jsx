import { memo } from "react";

function Child({ getData }) {
  console.log("Child");
  return (
    <div>
      <h1>Our ID: {getData()}</h1>
    </div>
  );
}

export default memo(Child);
