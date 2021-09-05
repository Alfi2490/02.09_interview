function RowLittle(props) {
    
    return <>
        <div className="Title">{props.title}</div>
        <div className="Year">{props.year}</div>
        <div className="Type">{props.type}</div>    
        <img src={props.poster} alt="Poster" />
    </>
}

export default RowLittle;