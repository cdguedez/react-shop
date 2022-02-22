import React from 'react'
import styled from 'styled-components'
import { useField } from 'formik'

const InputSearch = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Search {...field} {...props} placeholder={placeholder} />
  )
}

export default InputSearch

const Search = styled.input`
  background-color: #F6F7F6;
  color: #C7C7C7;
  padding: 8px 12px;
  margin: 4px;
  border: none;
  border-radius: 4px;
  outline: none;
  &::placeholder {
    font-weight: 400;
  }
`