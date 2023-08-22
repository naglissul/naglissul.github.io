interface wordtrans {
  lt?: string;
  en?: string;
  nl?: string;
  comments?: string;
}
export default function VocWord({ lt, en, nl, comments }: wordtrans) {
  return (
    <tr>
      <td>{lt ? lt : <em>no translation</em>}</td>
      <td>{en ? en : <em>no translation</em>}</td>
      <td>{nl ? nl : <em>no translation</em>}</td>
      <td>{comments ? comments : <em>no comments</em>}</td>
    </tr>
  );
}
