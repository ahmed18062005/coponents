const Button = (props)=>{
return<>
    <button type="button" className="btn btn-outline-dark px-3 mx-2" onClick={props.onclicK}>{props.label}</button>

</>
}


export default Button