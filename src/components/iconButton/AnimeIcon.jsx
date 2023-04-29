import React from "react";
import "./animeIcon.scss";
class AnimeIcon extends React.Component {
  render() {
    return (
      <div className={"anime-icon"}>
        <input type={"checkbox"} id={"anime-icon-checked"} />
        <label for={"anime-icon-checked"} className={"anime-icon-menu"}>
          <div className={"line"}></div>
          <div className={"line"}></div>
          <div className={"line"}></div>
        </label>
      </div>
    );
  }
}
export default AnimeIcon;
