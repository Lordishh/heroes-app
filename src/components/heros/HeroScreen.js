import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from '../../helpers/getHeroById';

import './HeroScreen.css';

export const HeroScreen = () => {

  const { id } = useParams();

  const hero = getHeroById( id );

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
    navigate( -1 );
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imagePath = `/assets/img-heroes/${id}.jpg`;

  return (
    <div className="row mt-4">
      <div className="col-4">
        <img src={imagePath} alt={superhero} className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item listItem">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item listItem">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item listItem">
            <b>First Appearance ego:</b> {first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Character</h5>
        <p>{ characters }</p>

        <button
          className="btn btn-outline-info"
          onClick={ handleReturn }
        >
          Go to Back
        </button>
      </div>
    </div>
  );
};
