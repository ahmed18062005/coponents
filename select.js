
const Select = (props)=>{
    return <>
        <select onChange={(e) => props.onchangE(e.target.value)} className="form-select w-25 mx-auto mt-4 bg-dark text-warning" >
            <option disabled selected>{props.selecteD}</option>
            {
                props.optioN
            }
            
        </select>
    </>
}


export default Select