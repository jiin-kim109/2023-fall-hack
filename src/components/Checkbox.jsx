import React from 'react';
import styled from 'styled-components';

const NewCheckbox = styled.input`
    accent-color: #B665F3;
`

function Checkbox({onClick, children}) {
  return (
    <NewCheckbox type='checkbox'></NewCheckbox>
  )
}

export default Checkbox