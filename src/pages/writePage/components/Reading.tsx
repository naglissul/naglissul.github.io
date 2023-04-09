interface readingInfo {
  name: string;
  src: string;
  date: string;
  wordCount: number;
}
function Reading(props: readingInfo) {
  return (
    <div
      style={{
        border: "1px solid",
        height: "120px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "290px",
        padding: "2px 10px",
        alignItems: "center",
      }}
    >
      <div style={{}}>
        <strong>{props.name}</strong>
      </div>
      <div style={{}}>{props.date}</div>
      <div style={{}}>{props.wordCount} words</div>
      <a style={{}} href={props.src} download>
        Download
      </a>
    </div>
  );
}

export default Reading;
