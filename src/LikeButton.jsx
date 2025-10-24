import { useState } from "react";

export default function LikeButton() {
  let [isliked, setisliked] = useState(false);
  let togglelike = () => {
    setisliked(!isliked);
  };
  let likestyle = { color: "red" };
  return (
    <div>
      <p onClick={togglelike}>
        {isliked ? (
          <i className="fa-solid fa-heart" style={likestyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </p>
    </div>
  );
}
