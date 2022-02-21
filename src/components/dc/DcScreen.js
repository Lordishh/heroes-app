import { HeroList } from "../heros/HeroList";

export const DcScreen = () => {
  return (
    <div>
      <h1>DC Characters</h1>
      <hr />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
