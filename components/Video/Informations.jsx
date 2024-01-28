// Components
import Button from "../Button";
import Avatar from "../Avatar";

export default function Informations() {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <Avatar h={50} w={50} style={"rounded-xl"} />
          <div className="flex flex-col gap-2 text-white">
            <span>Google Inc</span>
            <span className="text-sm text-textSecondary">
              5.55M Subscribers
            </span>
          </div>
        </div>
        <Button>Subscribe</Button>
      </div>
      <div className="w-full text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis
        nibh, sagittis ut venenatis eu, varius sit amet sem. Cras lacinia
        sodales libero, vel ullamcorper est sagittis ac. Proin lacinia et quam
        eget egestas. Aenean est dolor, vehicula ut velit et, congue fringilla
        sem. Nullam eu consequat nunc, ut gravida felis.
      </div>
      <span className="cursor-pointer text-textSecondary hover:text-red-500">
        Show more
      </span>
    </>
  );
}
