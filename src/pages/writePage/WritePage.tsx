import Reading from "./components/Reading";

function WritePage() {
  return (
    <>
      <h3 style={{ paddingTop: "5%", textAlign: "center" }}>
        <em>More coming soon...</em>
      </h3>
      <div>RadioVilnius (Blog most important)</div>
      <a
        href="https://radiovilnius.live/marija-kavtaradze-2/"
        rel="noreferrer"
        target="_blank"
      >
        01:10:46
      </a>

      <div>Blog newest</div>
      <div>Sniegas: about, texts</div>

      <div>Slemai: about, texts</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "2em" }}>
        <Reading
          name="Trumpas sapnas"
          src="assets/readings/slam/trumpas-sapnas.docx"
          date="2021-11-25"
          wordCount={368}
        />
      </div>
      <div>Kiti tekstai: about, texts</div>
      <div>contacts</div>
    </>
  );
}

export default WritePage;
