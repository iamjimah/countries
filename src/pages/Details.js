import Loading from "../components/Loading";
import useCountries from "../hooks/useCountries";

function Details({ match }) {
  const name = match.params.name;
  const { error, isPending, countries } = useCountries(
    `https://restcountries.com/v3.1/name/${name}`
  );
  return (
    <div className="container">
      <h1 className="m-5 border-bottom bg-transparent text-center">
        country's infromation
      </h1>
      <div className="d-flex align-items-center justify-content-center">
        {isPending && <Loading />}
        {error && (
          <div>
            <h3>Ooops!!! 404 The requested Page is currently unavailable </h3>
          </div>
        )}
        {countries &&
          countries.map((country, index) => (
            <div className="row" key={index}>
              <img
                src={country.flag}
                style={{ height: 300, width: "auto" }}
                alt={country.name}
              />
              <div className="m-2 p-3 card text-muted">
                <h2 className="mb-3 text-info">country : {country.name}</h2>
                <h2>Region : {country.region}</h2>
                <h3>Sub_region : {country.subregion}</h3>
                <h2 className="mb-3 text-warning">
                  Pops : {country.population}
                </h2>
                <h2>Capital city : {country.capital}</h2>
                {country.currencies &&
                  country.currencies.map((cur) => (
                    <span>
                      {cur.symbol}-{cur.name}
                    </span>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Details;
