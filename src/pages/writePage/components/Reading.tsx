interface readingInfo {
  name: string;
  src: string;
  read?: string;
}
function Reading({ name, src, read }: readingInfo) {
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
      <div style={{ fontSize: "20px" }}>
        <strong>{name}</strong>
      </div>
      <a style={{ fontSize: "18px" }} href={src} download>
        Atsisiųsti
      </a>
    </div>
  );
}

export default Reading;
