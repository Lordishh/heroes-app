import { useMemo } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import quertString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { HeroCard } from "../heros/HeroCard";


export const SeachScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = quertString.parse(location.search);

  const [ formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`?q=${ searchText }`)
  }


  return (
    <>
      <h1 className="animate__animated animate__fadeInUp animate__slower">
        Searches section
      </h1>
      <hr />

      <div className="row">
        <div className="col-5 animate__animated animate__fadeInLeft animate__slower">
          <h4>Search</h4>
          <hr />

          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-2 col-12"
              type="submit"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7 animate__animated animate__fadeInRight animate__slower">
          <h4>Results</h4>
          <hr />

          {
            (q === '')
                ? <div className="alert alert-info">Find a hero</div>
                : <div className="alert alert-danger">No results found</div>
          }

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
