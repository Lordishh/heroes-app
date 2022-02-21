import { HeroList } from "../heros/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel Characters</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </div>
  );
};
