// Components
import Button from "../UI/Button";
import Author from "./Details/Author";
import Description from "./Details/Description";

export default function VideoDetails() {
  return (
    <>
      <div className="flex flex-row justify-between p-4 md:p-0">
        <Author />
        <Button>Subscribe</Button>
      </div>
      <Description />
    </>
  );
}
