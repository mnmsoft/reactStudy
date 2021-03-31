import react  , {useState} from 'react';

const App = () =>{
  const [mname,setMname] = useState('');

  const changeName = () => {
    setMname("유명훈");
  }


  return (
    <div>
      My Name = {mname}    
      <button onClick={changeName}>이름 변경</button>
    </div>
    
  )
}

export default App;
// module.export = App;