import React from 'react'
import Form from '../components/Form'
import { useAppContext } from '../context/appContext.js'
import Alert from '../components/Alert'

const Products = () => {
  const {
    isLoading,
    isEditing,
    showAlert,
    displayAlert,

    productName,
    productCategory,
    productAmount,
    amountUnit,
    company,
    statusOptions,
    handleChange,
    clearValues,
    createProduct,
    editProduct,
  } = useAppContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    if ( !productName || !productCategory || !productAmount || !amountUnit) {
      displayAlert()
      return
    }
    if (isEditing) {
      editProduct()
      return
    }
    createProduct()
  }
  const handleProductInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    handleChange({ name, value })
  }

  return (
    <div>
      <div>

      </div>
      <form className='form'>
        <h4>{isEditing ? 'edit product' : 'Add Product'}</h4>
        {showAlert && <Alert />}
        <div className='form-center'>

          <Form
            type='text'
            name='Product Name'
            value={productName}
            handleChange={handleProductInput}
          />

          <Form
            type='text'
            labelText='Product Category'
            name='productCategory'
            value={productCategory}
            handleChange={handleProductInput}
          />
          
          <Form
            type='number'
            name='productAmount'
            labelText='Product Amount'
            value={productAmount}
            handleChange={handleProductInput}
            list={productAmount}
          />

          <Form
            type='number'
            name='Amount Unit'
            value={amountUnit}
            handleChange={handleProductInput}
            list={statusOptions}
          /> 

          <Form
            type='text'
            labelText='Company'
            name='Company'
            value={company}
            handleChange={handleProductInput}
          />

          <div className='btn-container'>
            <button
              type='submit'
              className='btn-submit'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
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


export default Products