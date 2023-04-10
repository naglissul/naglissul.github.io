import Archive from "./components/Archive";
import BestMusic from "./components/BestMusic";
import Contacts from "./components/Contacts";

function HomePage() {
  return (
    <>
      <main>
        <aside></aside>
        <section>
          <BestMusic />
          <hr />
          <h5>
            <em>Blog. And more</em>
          </h5>
          <h1>Currently</h1>
          working on CODING and WRITING (check out these category pages with the
          links above)
          <div
            style={{
              display: "flex",
              marginTop: "10%",
              gap: "2em",
              flexWrap: "wrap",
            }}
          >
            <Archive />
            <Contacts />
          </div>
        </section>
        <aside></aside>
      </main>
      <footer>Naglis/Audrius 2023</footer>
    </>
  );
}

export default HomePage;
