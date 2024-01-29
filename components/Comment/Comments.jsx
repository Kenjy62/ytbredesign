// Components
import Comment from "./Comment";

export default function Comments() {
  const comments = [
    {
      name: "TiboInShape",
      when: "1 day ago",
      like: "55k",
      message:
        "A very slow, gentle, beautiful shamanic tantra love music. Ideal as as spiritual soundbath, yoga or deep tantric love experience music. With deep, warm yet firm sound of the shaman drum.",
    },
    {
      name: "Charlotte White",
      when: "1 month ago",
      like: "6.8k",
      message:
        "A very slow, gentle, beautiful shamanic tantra love music. Ideal as as spiritual soundbath, yoga or deep tantric love experience music. With deep, warm yet firm sound of the shaman drum.",
    },
    {
      name: "Marion Cot",
      when: "3 month ago",
      like: "100",
      message:
        "A very slow, gentle, beautiful shamanic tantra love music. Ideal as as spiritual soundbath, yoga or deep tantric love experience music. With deep, warm yet firm sound of the shaman drum.",
    },
  ];

  return (
    <>
      {comments.map((item, id) => (
        <Comment key={id} item={item} id={id} />
      ))}
    </>
  );
}
