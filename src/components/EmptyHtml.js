import React from 'react'
import styled from 'styled-components'

export const EmptyHtml = ({msg, fontSize}) => {
  return (
    <MessageEmpty fontSize={fontSize}>{msg}</MessageEmpty>
  )
}
const MessageEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: default;
    color: #535c68;
    text-align: center;
    font-size: ${props=>props.fontSize ? props.fontSize : "20px"};
`