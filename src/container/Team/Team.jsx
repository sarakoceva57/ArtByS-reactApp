import React from "react";
import "./Team.css";
import { SubHeading } from '../../components';
import { data } from "../../constants";


const Card = ({ team: { imgUrl, name, position } }) => (
    <div className="app__team-card">
        <div className="card-team">
            <img src={imgUrl} alt="team" />

            <div className="app__team-card_content">
                <h1 className="app__team-name">{name}</h1>
                <h3 className="app__team-position">{position}</h3>
            </div>

        </div>
    </div>
);

const Team = () => {
    return (
        <div className="app__team app__bg flex__center section__padding">
            <div className="app__team-h1">
                <SubHeading title="Passionate and Diverse" />
                <h1 className='headtext__cormorant'>
                    Our team
                </h1>
            </div>

            <div className="app__team-p flex__center">
                <p className="p__opensans">
                    Our team is committed to providing the best possible experience for our customers. We work tirelessly to ensure that every piece of art we sell is of the highest quality and that our clients receive exceptional service.
                </p>
            </div>

            <div className="app__team-cards">
                {data.team.map((team) => (
                    <Card team={team} key={team.name} />
                ))}
            </div>
        </div>
    );
};

export default Team;
