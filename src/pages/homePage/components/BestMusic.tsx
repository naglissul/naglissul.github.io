interface spotifySrc {
  src: string;
}

function BestMusic(props: spotifySrc) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        title={props.src}
        style={{ height: "80px", padding: "1em 0" }}
        src={props.src}
        width="100%"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default BestMusic;
