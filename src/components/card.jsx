export const Card = (props) => {
  return (
    <div className="w-100 h-100 flex gap-2">
      <img
        className="w-full h-100"
        src={props.image}
        alt="picture of sneaker"
      ></img>
    </div>
  );
};
// <div>
//   <img src={"../../images/nike.webp1"} alt="" width={200} height={200} />
//   image
// </div>
