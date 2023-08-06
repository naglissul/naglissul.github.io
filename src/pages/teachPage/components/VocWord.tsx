interface wordtrans {
  lt?: string;
  en?: string;
  nl?: string;
}
export default function VocWord({ lt, en, nl }: wordtrans) {
  return (
    <tr>
      <td>{lt ? lt : <em>no translation</em>}</td>
      <td>{en ? en : <em>no translation</em>}</td>
      <td>{nl ? nl : <em>no translation</em>}</td>
    </tr>
  );
}
