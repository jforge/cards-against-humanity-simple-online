import React from 'react'
import styled from 'styled-components'
import Logout from './Logout'
import NewGame from './NewGame'

const Bar = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`

const Username = styled.p`
  margin: 10px 0px;
  font-size: 18px;
  position: absolute;
  left: 10px;
  top: 0px;
`

function Toolbar () {
  return (
    <Bar>
      <Username>{window.localStorage.getItem('username')}</Username>
      <Logout />
      <NewGame />
    </Bar>
  )
}

export default Toolbar