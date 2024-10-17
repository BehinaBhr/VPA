import "./Goals.scss";

const goals = [
  {
    title: "Facilitating Networking",
    content: "Foster connections and collaboration among members to enhance professional networks and support.",
  },
  {
    title: "Creating Business Relationships and Career Opportunities",
    content: "Facilitate opportunities for career advancement, business partnerships, and project collaborations.",
  },
  {
    title: "Organizing Recreational, Social, and Cultural Activities",
    content:
      "Plan and host events that promote social interaction, cultural exchange, and recreational activities among members.",
  },
  {
    title: "Promoting Continuous Education",
    content:
      "Offer seminars, workshops, and training sessions to enhance members' knowledge, skills, and professional development.",
  },
  {
    title: "Providing Guidance on Credentials Evaluation and Job Placement",
    content: "Assist members with navigating credential evaluation processes and job placement support.",
  },
];

const Goals = () => {
  return (
    <ul className="goals">
      {goals.map((goal, index) => (
        <li key={index} className="goals__item">
          <h3 className="goals__item-title">{goal.title}</h3>
          <p className="goals__item-content">{goal.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Goals;
