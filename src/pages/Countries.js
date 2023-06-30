import React from "react";
import useCountries from "../hooks/useCountries";
import Card from "../components/Card";
import Loading from "../components/Loading";

function Countries() {
  const url = "https://restcountries.com/rest/v3.1/all";
  const { countries, isPending, error } = useCountries(url);
  return (
    <section>
      <div className="container">
        <input type="search" placeholder="Search a Country" />
        <button className="btn btn-danger">SEARCH</button>
        <div className="text-center">
          <h1>List of Countries</h1>
        </div>
        <div className="row text-center">
          {isPending && <Loading />}
          {error && <div>oops!! something went wrong</div>}
          {countries &&
            countries.map((country) => (
              <Card
                name={country.name}
                img={country.flag}
                population={country.population}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;
