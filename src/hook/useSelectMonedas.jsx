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

    const SelectMonedas = () => (
        <>
       <Etiqueta>{label}</Etiqueta>
       <Selector>
        <option value="">Seleccione</option>

        {opciones.map(opcion => (
            <option 
            key={opcion.id} 
            value={opcion.id}
            >{opcion.nombre}</option>
        ))}
       </Selector>
       </>
    )
    return [SelectMonedas]     
}
export default useSelectMonedas