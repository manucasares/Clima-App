import React from 'react'

export const HayErrorONo = ({ error, ciudad, tempK, tempK_min, tempK_max }) => {
    return (
        <>
            {
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
            }
        </>
    )
}
