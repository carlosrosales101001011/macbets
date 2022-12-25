import React from 'react'
import styled from 'styled-components'

export const ContainerFooter = () => {
  return (
    <>
        <ContentFooter>
            <p>
                FOOTER
            </p>
        </ContentFooter>
    </>
  )
}
const ContentFooter = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;

    p{
        text-align: center;
    }
`