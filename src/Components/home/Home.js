import React, {useState, useEffect} from 'react';

const Home = () => {
  const [Escorts, setEscorts] = useState([])

  useEffect(() => {
    if(Escorts.length === 0){
      const getEscorts = async () => {
        const url = 'http://localhost:4000/api/v1/users'
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setEscorts(data)
      }
      getEscorts()
    }
  }, [])


  return ( 
    <div>
      <h1>home</h1>
      <ul>
        { Escorts.map(e => <li key={e.id}>{e.username}</li>)}
      </ul>
    </div>
   );
}
 
export default Home;