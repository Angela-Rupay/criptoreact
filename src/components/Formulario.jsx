import styled from "@emotion/styled"
import useSelectMonedas from "../hook/useSelectMonedas"
import monedas from "./data/monedas"
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
    const [SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

  return (
    <form>
        <SelectMonedas />
        <InputSubmit
        type="submit"
        value="Cotizar"
        />
    </form>
  )
}

export default Formulario