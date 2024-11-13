/* eslint-disable react/prop-types */
export default function TravelTree({ placesById, id }){
  const place = placesById[id]
  const childIds = place.childIds;
 
    return (
        <div>
          {place.title}
          {
            childIds.length > 0 && (
              <ol>
                {childIds.map(place => <TravelTree key={place.id} id={place.id}  placesById={placesById} />)}
              </ol>
            )
          }
        </div>
    );
}