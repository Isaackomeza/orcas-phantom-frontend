import React from "react";
import { Results } from "shared/styles/homepageStyles";

const Suggestions = (props) => {
  // eslint-disable-next-line react/prop-types
  const options = props.results.map((r) => <p key={r.id}>{r.busStopName}</p>);
  return <Results>{options}</Results>;
};

export default Suggestions;