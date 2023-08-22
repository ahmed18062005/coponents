const Input = (props)=>{
    return  <input 
     style={{backgroundColor: 'black',color:"goldenrod", fontWeight: "bold", padding: "10px", marginLeft:'10px'}}
      type={props.typE} placeholder={props.placeholdeR} 
      onChange={(e)=> 
          props.onchangE(e.target.value)
    }/>
}

export default Input