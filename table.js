
const Table = (props)=>{
    return<>
        <table className="table table-dark table-striped w-50 mx-auto">
            <thead>

            <tr>
                <th>Date#</th>
                <th>Month#</th>
                <th>Years#</th>
            </tr>
            </thead>
<tbody>
                {props.datE}
{/* 
    <td>

                {props.datE.map((x, i) => <tr> <td className="w-25" key={i}>{x}</td></tr>)
                }
                </td>
                <td>

                {props.montH.map((x, i) => <tr> <td key={i}>{x}</td></tr>)}
                </td>
                    
                <td>

                {props.yeaR.map((x, i) => <tr> <td key={i}>{x}</td></tr>)}
                </td> */}
                    
    
</tbody>
        </table>
    </>
}

export default Table