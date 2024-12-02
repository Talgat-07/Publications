export const AverageRating = ({ rating }) => {
  if (rating > 5 || rating < 0) {
    return null;
  }
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
};
