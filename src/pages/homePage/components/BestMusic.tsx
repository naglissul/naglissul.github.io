function BestMusic() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        style={{ height: "80px", margin: "0 10%", padding: "1em 0" }}
        src="https://open.spotify.com/embed/track/4StypY6VnE9BqgqQ0ni1tg?utm_source=generator&theme=0"
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
