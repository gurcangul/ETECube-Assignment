import React from 'react'
import Form from '../components/Form'
import { useAppContext } from '../context/appContext.js'
import Alert from '../components/Alert'

const Companies = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,

    companyName,
    companyLegalNumber,
    incorporationCountry,
    companyWebsite,
    handleChange,
    clearValues,
    createCompany,
    editCompany,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !companyName || !companyLegalNumber || !incorporationCountry || !companyWebsite) {
      displayAlert()
      return
    }
    if (isEditing) {
      editCompany()
      return
    }
    createCompany()
  }
  const handleCompanyInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <div>
      <div>

      </div>
      <form className='form'>
        <h4>{isEditing ? 'edit company' : 'Add Company'}</h4>
        {showAlert && <Alert />}
        <div className='form-center'>

          <Form
            type='text'
            name='Company Name'
            value={companyName}
            handleChange={handleCompanyInput}
          />

          <Form
            type='text'
            labelText='Company Legal Number'
            name='companyLegalNumber'
            value={companyLegalNumber}
            handleChange={handleCompanyInput}
          />
          
          <Form
            name='incorporationCountry'
            labelText='Incorporation Country'
            value={incorporationCountry}
            handleChange={handleCompanyInput}
            list={incorporationCountry}
          />

          <Form
            name='Company Website'
            value={companyWebsite}
            handleChange={handleCompanyInput}
          />
          <div className='btn-container'>
            <button
              type='submit'
              className='btn-submit'
              onClick={handleSubmit}
              disabled={isLoading}>Submit
            </button>
            <button
              className='btn-register'
              onClick={(e) => {
                e.preventDefault()
                clearValues()
              }}
            >
              clear
            </button>       

          </div>
        </div>
      </form>  

    </div>
  )
}

export default Companies