import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 550px;
  height: 65px;
  background: transparent;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgb(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  padding: 20px;
  margin-top: 30px;
  color: #fff;
  letter-spacing: 5px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    width: 90%;
  }
`
