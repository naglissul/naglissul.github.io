interface readingInfo {
  name: string;
  src: string;
  date: string;
  wordCount: number;
}
function Reading(props: readingInfo) {
  return (
    <div style={{ border: "1px solid", height: "100px" }}>
      {`${props.name} | created on: ${props.date} | word count: ${props.wordCount} | `}
      <button>Read</button>
      <a href={props.src} download>
        | Download
      </a>
    </div>
  );
}

export default Reading;
