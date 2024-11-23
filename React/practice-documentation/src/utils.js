export function getImageUrl(place) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
export   const getNextId = (data) => {
  const nextId = data.reduce((prev, current) => prev && prev>current ? prev : current);
  return nextId +1;
}