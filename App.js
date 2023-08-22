import './App.css';
import Heading from './coponents/heading';
import Button from './coponents/buttons';
import Input from './coponents/inputs';
import { useState } from 'react';
import Select from './coponents/select';
import Table from './coponents/table';
import Card from './coponents/cards';
function App() {
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  const [btn, setBtn] = useState("");
  const [selected, setSelected] = useState("");

  let Date = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  let Month = [1,2,3,4,5,6,7,8,9,10,11,12];
  let Year = [2001,2002,2003,2003,2004,2005,2006,2007,2008,2009,2010];

let arrofobj = [
  {
    Id : "A-01",
    UserName : "Ahmed",
    Age : 18,
    Isactive : "true",
    Institute : "Jawan Pakistan",
    Category :"A"
  },
  {
    Id : "A-02",
    UserName : "Adil",
    Age : 21,
    Isactive : "true",
    Institute : "Jawan Pakistan",
    Category :"B"
  },
  {
    Id : "A-03",
    UserName : "Ubaid",
    Age : 24,
    Isactive : "true",
    Institute : "Jawan Pakistan",
    Category :"C"
  },
];

  return (
    <div className="App">
      <div>
        <Heading contant="Input" />
        <Input typE="search" placeholdeR="Serch" onchangE={setSearch} />
        <p>{search}</p>
        <Input typE="password" placeholdeR="Enter Password" onchangE={setPassword} />
        <p>{password}</p>
        <Input typE="file" placeholdeR="Choose File" />
      </div>

      <div className='my-5'>
        <Heading contant="Button" />
        <Button label="Open" onclicK={() => setBtn("Open")} />
        <Button label="Close" onclicK={() => setBtn("Close")} />
        <Button label="Ok" onclicK={() => setBtn("ok")} />
        <p>{btn}</p>
      </div>

      <div>
        <Heading contant="Select"/>
        <Select selecteD="Select Date" optioN={Date.map((x, i) => <option key={i} value={x}>{x}</option>)} onchangE={setSelected}/>
        <Select selecteD="Select Month"optioN = {Month.map((x,i)=> <option key={i} value={x}>{x}</option>)} onchangE={setSelected}/>
        <Select selecteD="Select Year" optioN = {Year.map((x,i)=> <option key={i} value={x}>{x}</option>)} onchangE={setSelected}/>

        <h1>{selected}</h1>
      </div>

<div>
        <Heading contant="Table"/>
        <Table datE={
          Date.map((x, i) => <tr>
          <td key={i[0]}>{x}</td>
        <td key={i[1]}>{x}</td>
        <td key={i[2]}>{x}</td>
        </tr>
        )
      } />
</div>

<div>
      <Heading  contant="Card"/>
        <div className=''>
          <Card lI={arrofobj.map((x, i) =>
          < >
             <li className="list-group-item" > {x.Id}</li>
             <li className="list-group-item" > {x.UserName}</li>
             <li className="list-group-item" > {x.Age}</li>
             <li className="list-group-item" > {x.Isactive}</li>
             <li className="list-group-item">  {x.Institute}</li>
             <li className="list-group-item" > {x.Category}</li>
          </>
             )
            }
             />
          <Card lI={arrofobj.map((x, i) =>
          < >
             <li className="list-group-item" > {x.Id}</li>
             <li className="list-group-item" > {x.UserName}</li>
             <li className="list-group-item" > {x.Age}</li>
             <li className="list-group-item" > {x.Isactive}</li>
             <li className="list-group-item">  {x.Institute}</li>
             <li className="list-group-item" > {x.Category}</li>
          </>
             )
            }
             />
          <Card lI={arrofobj.map((x, i) =>
          < >
             <li className="list-group-item" > {x.Id}</li>
             <li className="list-group-item" > {x.UserName}</li>
             <li className="list-group-item" > {x.Age}</li>
             <li className="list-group-item" > {x.Isactive}</li>
             <li className="list-group-item">  {x.Institute}</li>
             <li className="list-group-item" > {x.Category}</li>
          </>
             )
            }
             />

</div>
</div>

    </div>
  );
}

export default App;
