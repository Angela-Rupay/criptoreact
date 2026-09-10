import { useEffect } from "react"
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
  transition: background-color .3s ease;

  &:hover {
    background-color: #7A7DFE;
    cursor: pointer;
  }
`
const Formulario = () => {
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
           console.log(resultado)
        }
        consultarAPI()
    },[])

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