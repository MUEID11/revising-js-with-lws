/* eslint-disable react/prop-types */
export default function TravelTree({ id, placesById, parentId, onComplete }) {
  const place = placesById[id];
  const childIds = place.childIds;

  return (
    <div>
      {place.title}{" "}
      <button onClick={() => onComplete(parentId, id)}>Complete</button>
      {childIds.length > 0 && (
        <ol>
          {childIds.map((childId) => (
            <TravelTree
              key={childId}
              id={childId}
              placesById={placesById}
              onComplete={onComplete}
              parentId={id}
            />
          ))}
        </ol>
      )}
    </div>
  );
}
