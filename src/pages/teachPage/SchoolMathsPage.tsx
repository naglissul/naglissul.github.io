import CalcGrade from "./components/CalcGrade";

function SchoolMathsPage() {
  return (
    <section>
      <ul>
        <li>Overleaf - slides...with more, with papildomi...</li>
        <li>Kahoot</li>
        <li>Dictionary for definitions EN-LT (or platform for that)</li>
        <li>Assignments/exams problems (but encrypted)</li>
      </ul>
      Links:
      <br />
      <a href="https://sodas.ugdome.lt/viesieji-puslapiai/7300">
        LT education programme till 2024-08-31
      </a>
      <CalcGrade />
      {/* Viskas apie LT švietimą. Įstatymai, egzaminai bei mano, kaip mokytojo,
        taisyklės */}
    </section>
  );
}

export default SchoolMathsPage;
