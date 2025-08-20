export const Box = (props) => {
  console.log(props);
  if (props.isBox) {
    return (
      <div className={`w-25 h-25`} style={{ backgroundColor: props.color }}>
        {props.title}
      </div>
      // <div className="w-25 h-25 bg-gray-50 border-1 border-red-500">Box</div>
    );
  } else {
    return (
      <div className="w-25 h-25 rounded-full bg-gray-50 border-1 border-red-500">
        Round
      </div>
    );
  }
};
