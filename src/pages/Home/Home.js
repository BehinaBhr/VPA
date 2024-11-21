import "./Home.scss";
import { DocumentTitle } from "../../utils/utils";
import persian from "../../assets/images/persian.jpeg";
import ContactLink from "../../components/ContactLinks/ContactLink";
import { Link } from "react-router-dom";
import architects from "../../assets/images/architects.png";
import Activity from "../../components/Activity/Activity";
import ActivityElements from "./ActivityElements";

const Home = () => {
  DocumentTitle("VPA");
  return (
    <div className="home">
      <section className="home__intro">
        <h1 className="home__intro-title">Vancouver Persian Architects</h1>
        <div className="home__intro-banner">
          <img src={persian} alt="Azadi tower symbolizing persian architecture" />
        </div>
      </section>

      <section className="home__slogan">
        <div className="home__slogan-wrapper">
          <p className="home__slogan-text">Thriving Persian Architecture Community & Related Professions</p>
          <img src={architects} alt="VPA logo with building shapes symbolizing architecture." loading="lazy" />
        </div>
        <Link to="/about">
          <button>About VPA</button>
        </Link>
      </section>

      <section className="home__invite">
        <div className="home__invite-wrapper">
          <Link to="/contact">
            <h2 className="home__invite-title--link">Get in touch</h2>
          </Link>
          <ContactLink />
        </div>
        <div className="home__invite-wrapper">
          <h2 className="home__invite-title">Become a member</h2>
          <Link to="/join">
            <button>Join Us</button>
          </Link>
        </div>
      </section>

      <section className="home__activity" id="activity">
        {ActivityElements.map((activity) => (
          <Activity
            key={activity.id}
            id={activity.id}
            image={activity.image}
            title={activity.title}
            link_to={activity.link_to}
          />
        ))}
      </section>
    </div>
  );
};
export default Home;
