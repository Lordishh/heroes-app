import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  const imagePath = `/assets/img-heroes/${id}.jpg`;

  return (
    <Tilt>
      <div className="col animate__animated animate__fadeIn animate__slower">
        <div className="card">

          <div className="row no-gutters">
            <div className="col-4">
              <img src={imagePath} className="card-img" alt="superhero" />
            </div>
            <div className="col-8">

              <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                <h6 className="card-subtitle text-muted">{alter_ego}</h6>
              </div>

              <p className="card-text">
              <small>
                {first_appearance}
              </small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>

            </div>
          </div>

        </div>
      </div>
    </Tilt>
  );
}
