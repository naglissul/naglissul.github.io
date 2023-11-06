import { Link } from "react-router-dom";
import CalcGrade from "./components/CalcGrade";

function TeachPage() {
  return (
    <section>
      <h1>Currently</h1>working on other projects (Coding and Writing), but when
      I get to the teaching category - first I will be creating some rules as of
      a teacher and writing summaries/tutorials about school maths/physics
      according to the national education programme in Lithuania. After that
      maybe improve my, as a math and physics tutor, work. Everything will be
      listed in this page.
      <h1>Lifetime idea:</h1>
      <p>
        To make a revolution in education system (everywhere) - add more
        phylosophy (related with math)
      </p>
      <h2>A few ideas that could possibly make a huge impact on education</h2>
      <p>
        I've always had a question in my mind, an unsolved mystery - why math
        and other science is so damn easy, but yet so many students fail it? I
        am no special person - not some kind of genius, and many others could
        achieve much more than I had. And everything seems so simple as you get
        an explanation from peer student. And so damn dificult as you learn
        everything by the pace of an average Lithianian school.
      </p>
      <p>
        I tried tutoring, also tried teaching - but is probably seems obvious,
        that you cannot change a lot in education by makiing difference only
        when you spend your own time. A lot of your own time. And not using what
        other people have already created/invented.
      </p>
      <p>
        The real answer to this question is long solved. It's called the SDT -
        Self Determination Theory. It is a psychology theory about what is
        needed to spark intrinsic motivation to learn or do something. And
        intrinsic motivation is long proved to be the best type of motivation -
        motivation which rises within us and cannot be incited with some
        materialistic rewards, such as a good grade or a great pay. And with
        this intrinsic motivation students can achive the most. And be happiest
        and self trusted.{" "}
      </p>
      <p>
        SDT has pointed out 3 main things for intrinsic motivation to appear:
      </p>
      <ol>
        <li>
          Autonomy - you need to be able to decide by yourself what you want to
          learn/do.
        </li>
        <li>
          Competence - you need to do something that that has
          importance/competence and can be used in the world
        </li>
        <li>
          Relatedness - you need some other people that would do the same /
          share the same interest
        </li>
      </ol>
      <p>
        And to implement this in real life, I created{" "}
        <strong>
          <Link to="/teach/mokslo-gildija/">
            The Science Guild (Mokslo gildija)
          </Link>
        </strong>
        , where people with similar interest in learning science would gather
        around (Relatedness) and present what they have learned abot some
        complex and important (Competence) science stuff, which is, of course,
        not mandatory, and for which topics to learn are chosen freely
        (Autonomy).
      </p>
      <h3>Science Dictionary</h3>
      <p>
        Another question that I was contemplating a lot is how could I help
        students learn math? And what is needed for everyone to get opportunity
        to have a really good quality education.{" "}
      </p>
      <p>
        It seems obvious, that the Internet has all the solutions - you could
        find tutorials for any education topic, and in many different styles.
        Youtube is SUFFED with really good tutorials. The only problem is -
        school students usually don't get a vocabulary with Lithuanian-English
        translations of sometimes complex science terms. And sometimes those
        translations really doesn't make sense and no way could be googled or
        translated with google translate.
      </p>
      <p>
        And for that I started making the{" "}
        <strong>
          {" "}
          Science Dictionary LT {"->"} EN (
          <a href="http://sci-dict.lt">sci-dict.lt (external link)</a>).
        </strong>{" "}
        Where students could find all the school (and beyond) math terms with
        translations from Lithuanian to English, and then successfully google,
        youtube and research in other ways their important school topics.
      </p>
      <h1>
        <Link to="/teach/korep/">Korepetitorius</Link>
      </h1>
      <h1>
        <Link to="/teach/mgbi/">MGBI (mirus iniciatyva)</Link>
      </h1>
      <h1>
        <Link to="/teach/konsp/">Konspektai (suspended iniciatyva)</Link>
      </h1>
      <h1>
        <Link to="/teach/mokslo-gildija/">Mokslo gildija</Link>
      </h1>
      <h1>Fair grade calculator</h1>
      <CalcGrade />
    </section>
  );
}

export default TeachPage;
