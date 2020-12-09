import React, {useState, useEffect} from 'react';
import { axios } from '../../services/settings'

const Home = () => {
  const [Escorts, setEscorts] = useState([])

  useEffect(() => {
    if(Escorts.length === 0){
      const getEscorts = async () => {
        const url = '/users'
        const { data } = await axios.get(url)
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