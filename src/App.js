import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [ans , setAns] = useState('');
  const [sLanguage, setSlanguage] = useState('en');
  const [tLanguage , settlan] = useState('hi');
  const [outData , setOutData] = useState('');


  const callApi = async ()=>{

const encodedParams = new URLSearchParams();
encodedParams.set('source_language', sLanguage);
encodedParams.set('target_language', tLanguage);
encodedParams.set('text', outData);

const options = {
  method: 'POST',
  url: 'https://text-translator2.p.rapidapi.com/translate',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '1e937caf07msh7a9dcba0f4720c1p1a2718jsnce428543581b',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  },
  data: encodedParams,
};

try {
	const response = await axios.request(options);
	console.log(response.data.data.translatedText);
  setAns(response.data.data.translatedText);
} catch (error) {
	console.error(error);
  alert(error);
}
  }

  return (
    <div className="App">
      <header className="App-header">
        <select name="" id="lang" onChange={(e) => setSlanguage(e.target.value) }>
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
          <option value='bn'>Bengali</option>
          <option value='da'>Danish</option>
          <option value='de'>German</option>
          <option value="s2">Spanish</option>
          <option value='fi'>Finnish</option>
          <option value='fr'>French</option>
          <option value='it'>Italian</option>
          <option value='ja'>Japanese</option>
          <option value='ko'>Korean</option>
          <option value='ru'>Russian</option>
          <option value='sv'>Swedish</option>
          <option value='tr'>Turkish</option>
          <option value='zh'>Chinese (Simplified)</option>
        </select>
        <span>To</span>
        <select name="" id="tleng" onChange={(e) => settlan(e.target.value) }>
          <option value='hi'>Hindi</option>
          <option value='bn'>Bengali</option>
          <option value='da'>Danish</option>
          <option value='de'>German</option>
          <option value="s2">Spanish</option>
          <option value='fi'>Finnish</option>
          <option value='fr'>French</option>
          <option value='it'>Italian</option>
          <option value='ja'>Japanese</option>
          <option value='ko'>Korean</option>
          <option value='ru'>Russian</option>
          <option value='sv'>Swedish</option>
          <option value='tr'>Turkish</option>
          <option value='zh'>Chinese (Simplified)</option>
          <option value='en'>English</option>
        </select>
        <br />
        <div className='flex'>
              <input type="text" name="" id="input" value={outData} onChange={e => setOutData(e.target.value)}/>
              <button onClick={callApi}>translate</button>
        </div>
        <br />
        <p>{ans}</p>

      </header>
    </div>
  );
}

export default App;
