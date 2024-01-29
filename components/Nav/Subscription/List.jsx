import Item from "./Item";

export default function List() {
  const subs = [
    { name: "TiboInShape", inLive: true, newVideo: true },
    { name: "Charlotte White", inLive: false, newVideo: true },
    { name: "Marion Cot", inLive: false, newVideo: false },
  ];

  return subs.map((item, id) => <Item key={id} user={item} id={id} />);
}
