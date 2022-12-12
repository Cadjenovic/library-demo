import "./AuthorCard.css"

import Card from "../Card/Card"

const AuthorCard = ({name, image, yearBorn, yearDied, synopsis}) => {
    return <Card className="author-card">
             <img className="author-img" src={image} alt={name} />
             <div className="author-info">
                <div className="author-title">
                    <h2 className="author-name">{name}</h2>
                    <div className="author-age">({yearBorn} - {yearDied || "Present"})</div>
                </div>
                <p>{synopsis}</p>
             </div>
           </Card>
}

export default AuthorCard