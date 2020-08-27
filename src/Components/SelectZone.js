import React, { useState } from 'react'
import { useForm } from '../Hooks/useForm'

export const SelectZone = ({formValues, setFormValues, setResult}) => {

    const [validation, setValidation] = useState(false)
    
    const [ {ciudad, pais}, handleInputChange ] = useForm({
       ciudad : '',
       pais : '' 
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!ciudad.trim() || !pais.trim()){
            setValidation(true);
            return;
        }
        setValidation(false);

        setFormValues({ciudad, pais});

            
        setResult(true);
    }

    
    return (
        <>
            <h3 className='text-light text-center mb-2'>Elija la Zona</h3>

            {
                validation
                &&
                <p className='bg-danger text-center text-light rounded mb-0'>Ingrese todos los campos</p>
            }

            <form onSubmit={handleSubmit}>
                {/* CIUDAD */}
                <div className='input'>
                    <p className='text-light mb-0'>Ciudad:</p>
                    <input
                        type='text'
                        className='form-control'
                        name='ciudad'
                        autoComplete='off'
                        onChange={ handleInputChange }
                        value={ ciudad }
                    />
                </div>

                {/* PAIS */}
                <div className = 'input'>
                    <p className = 'text-light mb-0'>Pais:</p>
                    <select className = 'custom-select'
                            name = 'pais'
                            value = {pais}
                            onChange={handleInputChange}
                    >
                        <option value={''}>--Selecione--</option>
                        <option value='argentina'>Argentina</option>
                        <option value='francia'>Francia</option>
                        <option value='islandia'>Islandia</option>
                        <option value='canada'>Canadá</option>
                        <option value='suiza'>Suiza</option>
                        <option value='japon'>Japón</option>
                    </select>
                </div>

                {/* BOTON */}
                <button className='btn btn-block btn-warning'
                        onSubmit={handleSubmit}
                >
                    BUSCAR CLIMA
                </button>
            </form>
        </>
    )
}
