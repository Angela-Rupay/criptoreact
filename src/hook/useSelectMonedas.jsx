import { useState } from "react";
import styled from '@emotion/styled';

const Etiqueta = styled.label`
    color: #ffffff;
    display: block;
    font-family: 'Love Ya Like A Sister', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Selector = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`


const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
       <Etiqueta>{label}</Etiqueta>
       <Selector
       value={state}
       onChange={(e) => setState(e.target.value)}
         >
        <option value="">Seleccione</option>
        {/*  https://developers.coindesk.com/documentation/legacy/Toplist/TopTotalMktCapEndpointFull
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD */}

        {opciones.map(opcion => (
            <option 
            key={opcion.id} 
            value={opcion.id}
            >{opcion.nombre}</option>
        ))}
       </Selector>
       </>
    )
    return [state, SelectMonedas]     
}
export default useSelectMonedas