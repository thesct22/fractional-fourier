import React, { useState } from 'react';
import { MDBRange } from 'mdb-react-ui-kit';
import Select from 'react-select';
import axios from 'axios';
import { backend_url } from './config';

function App() {
  const [range, setRange] = useState(0.5);
  const [select,setSelect] = useState('sq');
  const [ogGraph,setOgGraph]=useState({});
  const [ftGraph,setFtGraph]=useState({});
  const [fftGraph,setFftGraph]=useState({});

  const options = [
    { value: 'sq', label: 'Square' },
    { value: 'tri', label: 'Triangle' },
    { value: 'one', label: 'One' },
    { value: 'sine', label: 'Sine' } 
  ];

  const rangeOnChange = (e) => {
    setRange(e.target.value);
    fetchfft(e.target.value);
  }
  const selectOnChange=(e)=>{
    setSelect(e.value);
    fetchgraphs(e.value);
  }

  const fetchgraphs=(selectValue)=>{

    //square
    if(selectValue==='sq'){
      //fft
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      console.log(params)
      axios.get(backend_url+'/square', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })

      //ft
      axios.get(backend_url+'/squareft')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
      })

      //og
      axios.get(backend_url+'/squareog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
      })
    }

    //triangle
    if(selectValue==='tri'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      //fft
      axios.get(backend_url+'/tri', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })

      //ft
      axios.get(backend_url+'/trift')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
      })

      //og
      axios.get(backend_url+'/triog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
      })
    }

    if(selectValue==='sine'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": range};
      //fft
      axios.get(backend_url+'/sine', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })

      //ft
      axios.get(backend_url+'/sineft')
      .then(res => {
        const data = res.data;
        setFtGraph({ data });
      })

      //og
      axios.get(backend_url+'/sineog')
      .then(res => {
        const data = res.data;
        setOgGraph({ data });
      })
    }
    
  }
  const fetchfft=(rangeValue)=>{
    
    //square
    if(select==='sq'){
      //fft
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      console.log(params)
      axios.get(backend_url+'/square', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })
    }

    //triangle
    if(select==='tri'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      //fft
      axios.get(backend_url+'/tri', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })
    }

    if(select==='sine'){
      const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      }
      const params = {"alpha": rangeValue};
      //fft
      axios.get(backend_url+'/sine', {
        headers: headers,
        params: params
      })
      .then(res => {
        const data = res.data;
        setFftGraph({ data });
      })
    }
  }
  
  return (
    <div className="App">
      <div className='row m-5 p-2'>
        <div className='col-3 p-4'>
          <Select 
            options = {options} 
            onChange={selectOnChange}
          />
        </div>
        <div className='col-8 p-1'>
          <MDBRange
            value={range}
            id='customRange'
            label='Alpha'
            min='0'
            max='1'
            step='0.05'
            onChange={rangeOnChange}
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;
