import { Link } from "react-router-dom";


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
    <div className="card mb-3">
      <h3 className="card-header">{superhero}</h3>
      <div className="row no-gutters">
        <img src={imagePath} className="card-img" alt="superhero" />
      </div>
      <div className="card-body">
        <h5 className="card-title">{publisher}</h5>
        <h6 className="card-subtitle text-muted">{alter_ego}</h6>
      </div>

      <div className="card-body">
        <p className="card-text">{first_appearance}</p>
      </div>

      <div className="card-body">
        <Link to={`/hero/${id}`}>
          More...
        </Link>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  );
}
