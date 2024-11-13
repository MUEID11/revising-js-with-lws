import { useState } from "react";
import { initialTravelPlan } from "./FllatenTravelPlan";
import TravelTree from "./TravelTree";
const Travel = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];

  const planetIds = root.childIds;

  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <TravelTree key={placeId} id={placeId} placesById={plan} />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
