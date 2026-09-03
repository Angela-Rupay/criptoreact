import styled from "@emotion/styled"

const InputSubmit = styled.input`
  background-color: #9497FF;
  border: none;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
`
const Formulario = () => {
  return (
    <form>
        <InputSubmit
        type="submit"
        value="Cotizar"
        />
    </form>
  )
}

export default Formulario