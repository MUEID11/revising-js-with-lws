import { useState } from "react";
import { initialTravelPlan } from "./FllatenTravelPlan";
import TravelTree from "./TravelTree";
const Travel = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];

  const planetIds = root.childIds;
  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextParent,
      
    });
  };

  return (
    <div>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((placeId) => (
          <TravelTree
            onComplete={handleComplete}
            key={placeId}
            id={placeId}
            placesById={plan}
            parentId={0}
          />
        ))}
      </ol>
    </div>
  );
};

export default Travel;
