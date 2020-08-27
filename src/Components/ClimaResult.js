import React from 'react'
import { useFetch } from '../Hooks/useFetch';
import { Spinner } from './Spinner';
import { HayErrorONo } from './HayErrorONo';

export const ClimaResult = ({ formValues }) => {

      const { ciudad, pais } = formValues;


      //ARRANCA FETCH
      const {data, loading, error} = useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(ciudad)},${encodeURI(ciudad)},${encodeURI(pais)}&appid=04d1313d5d41565058de89fc98b8fc72`);

      const {main} = !!data && data;
      const {temp: tempK, temp_max: tempK_max, temp_min: tempK_min} = !!main && main;


      const hayerror = () => (
            error
            ?
            <h2>Hay error.</h2>
            :
            <>
                  <p className='text-center mb-3'>La temperatura actual de {ciudad} es: </p>

                  <h2 className='text-center mb-0'>°{(tempK - 273.15).toFixed(2)}</h2>

                  <div>
                        <h5 className='text-center'>La temperatura máxima es: °{(tempK_max - 273.15).toFixed(2)}</h5>
                        <h5 className='text-center mt-2'>La temperatura mínima es: °{(tempK_min - 273.15).toFixed(2)}</h5>
                  </div>
            </>
      )



      return (
            <>
                  {
                        loading
                        ?
                        <Spinner />
                        :
                        hayerror()
                  }
            </>
      )
}
