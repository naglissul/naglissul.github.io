import { useState } from "react";

export default function Counter() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);
  return (
    <div
      style={{
        padding: "10px",
        border: "1px solid black",
        borderRadius: "3px",
      }}
    >
      <h3>
        <strong>Give me motivation to do more!</strong>
      </h3>
      <div>
        <p
          style={{
            textAlign: `${window.innerWidth <= 768 ? "right" : "left"}`,
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: `${window.innerWidth <= 768 ? "10px" : "0px"}`,
          }}
        >
          <button
            disabled={isButtonClicked}
            style={{ padding: "5px" }}
            onClick={() => {
              if (!isButtonClicked) {
                setIsButtonClicked(true);
                fetch("http://sci-dict.lt:5001/api/counters/this-is-nice/inc", {
                  method: "PATCH",
                });
              }
            }}
          >
            This is nice
          </button>
        </p>
        <p>By clicking this button you are increasing the public counter</p>
      </div>
    </div>
  );
}
