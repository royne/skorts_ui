const url = 'http://localhost:4000/api/v1'

export const getSelecteds = async () => {
  const response = await fetch(`${url}/escorts_selected`)
  const data = await response.json()
  return data
}

export const getEscortProfile = async () => {
  const response = await fetch(`${url}/escort_profiles/1`)
  const data = await response.json()
  const dataSelected = { services: [], locations: [], categories: [] }
  data.services.map(e => dataSelected.services.push({ label: e.name, value: e.id }))
  data.categories.map(e => dataSelected.categories.push({ label: e.name, value: e.id }))
  data.locations.map(e => dataSelected.locations.push({ label: e.name, value: e.id }))

  return {data, dataSelected}
}

export const sendFormData = async data =>{
  data.categories = data.categories.map(e => e.value) 
  data.services = data.services.map(e => e.value) 
  data.locations = data.locations.map(e => e.value) 
  const response = await fetch(`${url}/escort_profiles/1`, {
    method: 'PUT',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
  })
  return response
}

export default { getSelecteds, getEscortProfile, sendFormData }