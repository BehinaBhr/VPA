import "./Join.scss";
import { DocumentTitle } from "../../utils/utils";
import JoinPic from "../../assets/images/join.png";
import Members from "../../components/Members/Members";

const Join = () => {
  DocumentTitle("Join Us");

  return (
    <div className="join">
      <section className="join__intro">
        <h2 className="join__intro-title">Get Involved</h2>
        <div className="join__intro-banner">
          <img src={JoinPic} alt="passion lead us here" />
        </div>
      </section>
      <section className="join__section">
        <h3 className="join__section-header">Join the Vancouver Persian Architects Community Today</h3>
        <p className="join__section-content">
          Driven by our members' dedication, we offer year-round events and programs that benefit both our members and
          the public.
        </p>
        <p className="join__section-content">
          <span className="join__section-content--bold">Become a VPA Member</span> to support our mission of championing
          Persian architects and related professions by providing opportunities for career development, networking,
          advocacy, and growth. Your involvement helps our community thrive and enables us to sustain and expand our
          activities.
        </p>
        <div className="join__section-content">
          <Members />
        </div>
      </section>
    </div>
  );
};

export default Join;
