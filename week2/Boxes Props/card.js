function Card({title, subtitle, description, backgroundColor, width}) {
    return (
        <div style={{backgroundColor, width}}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <h3>{description}</h3>
        </div>
    );
}

export default Card;