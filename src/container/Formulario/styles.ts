import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Campo = styled.div`
  color: #fff;

  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    color: #fff;

    @media (max-width: 768px) {
      width: 70%;
      margin-bottom: 20px;
    }
  }
`
