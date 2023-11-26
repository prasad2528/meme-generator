import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FormContainer = styled.form`
  padding: 20px;

  width: 50%;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: open sans;
  font-size: 40px;
`
export const CustomLabel = styled.label`
  color: #7e858e;
`
export const CustomInput = styled.input`
  width: 60%;
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  margin-top: 10px;
  outline: none;
  margin-bottom: 20px;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CustomSelect = styled.select`
  width: 60%;
  height: 40px;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #d7dfe9;
  margin-top: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  outline: none;
`
export const CustomOption = styled.option`
  cursor: pointer;
`
export const CustomButton = styled.button`
  height: 40px;
  width: 140px;
  background-color: #0b69ff;
  color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  height: 500px;
  width: 700px;
  background-image: url(${props => props.backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-size: cover;
  padding: 40px;
`

export const ParagraphElement = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #fff;
`
