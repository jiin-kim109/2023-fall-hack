import React from 'react'
import styled from 'styled-components'

const NewButton = styled.button`
    background-color: transparent;
    border: none;
    background-image: linear-gradient(to bottom right, #B665F3, #362989);
    color: white;
    margin: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 30px;
    &:hover {
        text-decoration: underline;
    }
`

function Button({onClick, children}) {
  return (
    <NewButton onClick={onClick}>{children}</NewButton>
  )
}

export default Button