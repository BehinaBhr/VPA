import "./About.scss";
import { DocumentTitle } from "../../utils/utils";
import Goals from "../../components/Goals/Goals";

const About = () => {
  DocumentTitle("About Us");
  return (
    <div className="about">
      <section className="about__section">
        <h2 className="about__section-title">About Us</h2>
        <p className="about__section-content">
          The Vancouver Persian Architects (VPA) Association is an independent, non-religious, non-political, and
          non-profit organization founded by Iranian graduate architects.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__section-title">Vision & Mission</h2>
        <p className="about__section-content">
          We gather to be the leading community for Persian architects in Vancouver, fostering a supportive environment
          where members thrive personally and professionally.
          <br />
          Our mission is to unite and support our members in achieving professional excellence and personal growth
          through the following objectives to unite and support our members in achieving professional excellence and
          personal growth.
        </p>
      </section>
      <section className="about__section">
        <h2 className="about__section-title">Goals & Objectives</h2>
        <Goals />
      </section>
    </div>
  );
};

export default About;
