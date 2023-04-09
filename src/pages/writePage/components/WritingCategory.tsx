interface categoryInfo {
  name: string;
}
function WritingCategory(props: categoryInfo) {
  return (
    <div
      style={{
        border: "1px solid",
        display: "flex",
        flexDirection: "column",
        margin: "1em 0",
        alignItems: "center",

        backgroundColor: "#f2f3f5",
      }}
    >
      <h4>{props.name}</h4>
      <details>
        <summary>About</summary>
        Text, describing this category
      </details>
    </div>
  );
}

export default WritingCategory;
