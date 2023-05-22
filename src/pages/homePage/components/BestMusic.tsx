interface music {
  name: string;
}

function BestMusic({ name }: music) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      This week's music: {name}
    </div>
  );
}

export default BestMusic;
