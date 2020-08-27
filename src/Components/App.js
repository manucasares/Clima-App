import React, { useState } from 'react';
import { Titulo } from './Titulo';
import { SelectZone } from './SelectZone';
import { ClimaResult } from './ClimaResult';


function App() {

  const [result, setResult] = useState(false);

  const [formValues, setFormValues] = useState({
    ciudad : '',
    pais : ''
  })

  
  
  return (
    <div className="container">
      <Titulo />

      <div className='row d-flex justify-content-between'>

        <div className='col-6'>

          <SelectZone formValues = { formValues }
                      setFormValues = { setFormValues }
                      setResult = { setResult }
          />
        </div>  

        {
          result 

          &&

          <div className='col-5 result d-flex flex-column justify-content-between bg-white'>
            <ClimaResult  formValues = { formValues }
                          setResult = { setResult }
            />
          </div>
        }

      </div>

    </div>
  );
}

export default App;
