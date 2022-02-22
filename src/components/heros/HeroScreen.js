import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from '../../helpers/getHeroById';

import './HeroScreen.css';

export const HeroScreen = () => {

  const { id } = useParams();



  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const handleReturn = () => navigate(-1);

  if (!hero) {
    return <Navigate to='/' />
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
      <div className="col-6">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft animate__slower"
        />
      </div>

      <div className="col-6 animate__animated animate__fadeInRight animate__slower">
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
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Go to Back
        </button>
      </div>
    </div>
  );
};
