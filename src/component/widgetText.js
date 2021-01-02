import React from "react";

function widgetText(props) {
  return (
    <div>
      <div className="widgetWrap">
        <div className="widgetTitle">{props.title}</div>
      </div>
      <div className="widgetValue">
        <div class="value">{props.value}</div>
        <div class="description">{props.description}</div>
      </div>
    </div>
  );
}

export default widgetText;
