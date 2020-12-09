import React, {useState, useEffect} from 'react';
import MultiSelect from "react-multi-select-component";
import { getSelecteds, getEscortProfile, sendFormData } from '../../services/profileService'
import Menubar from './Menubar';
import { Redirect } from 'react-router-dom';

const EditData = () => {
  const [EscortData, setEscortData] = useState({
    username: '',
    city: 0,
    first_name:'',
    last_name: '',
    price: '',
    schedule: '',
    age: '',
    phone: '',
    sex: '',
    description: '',
    categories: [],
    locations: [],
    services: []
  })

  const [options, setOptions] = useState({
    categories: [],
    services: [],
    locations: [],
    status: true
  })

  const [selectedcategory, setSelectedCategory] = useState([]);
  const [selectedservice, setSelectedService] = useState([]);
  const [selectedlocation, setSelectedLocation] = useState([]);

  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (options.status) {
      const requestSelecteds = async () => {
        const reponseSelect = await getSelecteds()
        setOptions({
          ...options,
          categories: reponseSelect.categories,
          services: reponseSelect.services,
          locations: reponseSelect.locations,
          status: false
        })
      }
      const requestEscortProfiles = async () => {
        const response = await getEscortProfile()
        setEscortData({
          ...EscortData,
          username: response.data.username,
          city: response.data.city,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
          price: response.data.price,
          schedule: response.data.schedule,
          age: response.data.age,
          phone: response.data.phone,
          sex: response.data.sex,
          description: response.data.description,
          categories: response.dataSelected.categories,
          locations: response.dataSelected.locations,
          services: response.dataSelected.services
        })
      }
      requestSelecteds()
      requestEscortProfiles()
    }
  }, [])
  
  useEffect(() => {
    setEscortData({
      ...EscortData,
      categories: selectedcategory
    })  
  }, [selectedcategory])

  useEffect(() => {
    setEscortData({
      ...EscortData,
      locations: selectedlocation
    })
  }, [selectedlocation])

  useEffect(() => {
    setEscortData({
      ...EscortData,
      services: selectedservice
    })
  }, [selectedservice])


  const getData = e => {
    setEscortData({
      ...EscortData,
      [e.target.name]: e.target.value
    })
  }

  const sendForm = async e => {
    e.preventDefault()
    const response = await sendFormData(EscortData)
    if (response.ok) setStatus(!status)
  }

  return ( 
    <main className="profile">
      <Menubar />
      <section className="edit_data_profile container">
        <h1>Hola</h1>
        <form className="" onSubmit={sendForm}>
          <div className="form-group">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              className="form-control"
              defaultValue={EscortData.username}
              onChange={getData}
              />
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Soy</label>
              <select 
                className="form-control"
                name="sex"
                value={EscortData.sex}
                onChange={getData}>
                <option value=""></option>
                <option value="0">Mujer</option>
                <option value="1">Hombre</option>
              </select>
            </div>
            <div className="form-group col-6">
              <label>Ciudad</label>
              <select 
                className="form-control"
                name="city"
                defaultValue={EscortData.city}
                onChange={getData}>
                <option value="0">Bogota</option>
              </select>            
            </div>  
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Nombre</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                defaultValue={EscortData.first_name} 
                onChange={getData} />
            </div>
            <div className="form-group col-6">
              <label>Apellido</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                defaultValue={EscortData.last_name}
                onChange={getData} />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Precio</label>
              <input
                type="number"
                name="price"
                className="form-control"
                defaultValue={EscortData.price}
                onChange={getData} />
            </div>
            <div className="form-group col-6">
              <label>Horario</label>
              <input
                type="text"
                name="schedule"
                className="form-control" 
                defaultValue={EscortData.schedule}
                onChange={getData}/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-6">
              <label>Edad</label>
              <input
                type="number"
                name="age"
                className="form-control" 
                defaultValue={EscortData.age}
                onChange={getData}/>
            </div>
            <div className="form-group col-6">
              <label>Celular</label>
              <input
                type="number"
                name="phone"
                className="form-control" 
                defaultValue={EscortData.phone}
                onChange={getData}/>
            </div>
          </div>
          <div className="form-group">
            <label>Descripcion</label>
            <textarea 
              className="form-control"
              name="description"
              onChange={getData}
              value={EscortData.description}
              ></textarea>
          </div>
          
          <div className="form-group">
            <label>Categorias</label>
            <p>
              {EscortData.categories.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
            </p>
            <MultiSelect
              options={options.categories}
              value={EscortData.categories}
              onChange={setSelectedCategory}
              labelledBy={"Selecciona Categorias"}
              className="multiselects"
              overrideStrings={overrideStrings} />       
          </div>
          <div className="form-group">
            <label>Lugares</label>
            <p>
              {EscortData.locations.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
            </p>
            <MultiSelect
              options={options.locations}
              value={EscortData.locations}
              onChange={setSelectedLocation}
              labelledBy={"Selecciona Lugares"}
              className="multiselects"
              overrideStrings={overrideStrings} />        
          </div>
          <div className="form-group">
            <label>Servicios</label>
            <p>
              {EscortData.services.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
            </p>
            <MultiSelect
              options={options.services}
              value={EscortData.services}
              onChange={setSelectedService}
              labelledBy={"Selecciona Servicios"}
              className="multiselects"
              overrideStrings={overrideStrings} />     
          </div>

          <div className="form-group">
            <button className="btn btn-block btn-dark" >Actulizar</button>
          </div>
        </form>
      </section>
      { status && <Redirect to="/perfil" />}
    </main>
   );
}

const overrideStrings = {
  "selectSomeItems": "Selecciona",
  "allItemsAreSelected": "Todos los elementos están seleccionados..",
  "selectAll": "Seleccionar todo",
  "search": "Buscar",
  "clearSearch": "Borrar búsqueda"
}

export default EditData;