import {Link} from "react-router-dom"
function Home() {
  return (
    <section
      className="bg-warning  d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="container">
        <h1>Home Page</h1>
        <h2>
          This site gives you access to all the information <br />
          of countries around the world
        </h2>
        <Link to="/countries" className="btn btn-info">
          READ MORE
        </Link>
      </div>
    </section>
  );
}

export default Home;
