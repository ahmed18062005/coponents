
const Card = (props) => {
    return <>
        <div className="card " style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush ">
                    {props.lI}
            </ul>
        </div>
    </>
}

export default Card