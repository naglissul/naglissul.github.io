interface readingInfo {
  name: string;
  src: string;
}
function Reading({ name, src }: readingInfo) {
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
        <strong>{name}</strong>
      </div>
      <a style={{}} href={src} download>
        Download
      </a>
    </div>
  );
}

export default Reading;
