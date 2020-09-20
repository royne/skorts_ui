import React, {useState, useEffect} from 'react';
import MultiSelect from "react-multi-select-component";

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
  const [selectedcategory, setSelectedCategory] = useState([]);
  const [selectedservice, setSelectedService] = useState([]);
  const [selectedlocation, setSelectedLocation] = useState([]);

  const [options, setOptions] = useState({
    categories: [],
    services: [],
    locations: []
  })

  useEffect(() => {
    const url = 'http://localhost:4000/api/v1'
    const requestSelecteds = () => {
      fetch(`${url}/escorts_selected`)
      .then(response => response.json())
      .then(data => {
        setOptions({
          ...options,
          categories: data.categories,
          services: data.services,
          locations: data.locations
        })
      })
    }
    const requestEscortProfiles = () => {
      fetch(`${url}/escort_profiles/5`)
      .then(response => response.json())
      .then(data => {
        const dataSelected = { services: [], locations: [], categories: [] }
        data.services.map(e => dataSelected.services.push({ label: e.name, value: e.id }))
        data.categories.map(e => dataSelected.categories.push({ label: e.name, value: e.id }))
        data.locations.map(e => dataSelected.locations.push({ label: e.name, value: e.id }))
        setEscortData({
          ...EscortData,
          username: data.username,
          city: data.city,
          first_name: data.first_name,
          last_name: data.last_name,
          price: data.price,
          schedule: data.schedule,
          age: data.age,
          phone: data.phone,
          sex: data.sex,
          description: data.description,
          categories: dataSelected.categories,
          locations: dataSelected.locations,
          services: dataSelected.services
        })
      })
    }
    requestSelecteds()
    requestEscortProfiles()
  },[])
  
  
  return ( 
    <section className="edit_data_profile container">
      <form className="">
        <div className="form-group">
          <label>UserName</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={EscortData.username} />
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>Soy</label>
            <select 
              className="form-control"
              name="sex"
              value={EscortData.sex}>
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
              value={EscortData.city}>
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
              value={EscortData.first_name} />
          </div>
          <div className="form-group col-6">
            <label>Apellido</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              value={EscortData.last_name} />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>Precio</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={EscortData.price} />
          </div>
          <div className="form-group col-6">
            <label>Horario</label>
            <input
              type="text"
              name="schedule"
              className="form-control" 
              value={EscortData.schedule}/>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-6">
            <label>Edad</label>
            <input
              type="number"
              name="age"
              className="form-control" 
              value={EscortData.age}/>
          </div>
          <div className="form-group col-6">
            <label>Celular</label>
            <input
              type="number"
              name="phone"
              className="form-control" 
              value={EscortData.phone}/>
          </div>
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <textarea 
            className="form-control"
            name="description"
            ></textarea>
        </div>
        
        <div className="form-group">
          <label>Categorias</label>
          <p>
            {selectedcategory.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
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
            {selectedlocation.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
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
            {selectedservice.map(e => <span key={e.value}>&#8227; {e.label} </span>)}
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
          <button className="btn btn-block btn-dark">Actulizar</button>
        </div>
      </form>
    </section>
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