import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import '../src/App.css';

function App() {
    const API_KEY = 'a5e35e3dae237de883fc51775646b6d1';
    const [location, setLocation] = useState('');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
    const [result, setResult] = useState({});

    const searchWeather = async (e) => {
        if (e.key === 'Enter') {
            try {
                const data = await axios({
                    method: 'GET',
                    url: url,
                });
                console.log(data);
                setResult(data);
            } catch (err) {
                alert(err);
            }
        }
    };
    return (
        <AppWrap>
            <h1 className="title">Weather</h1>
            <div className="appContentWrap">
                <input
                    placeholder="도시를 입력하세요."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    onKeyDown={searchWeather}
                />
                {Object.keys(result).length != 0 && (
                    <ResultWrap>
                        <div className="city">{result.data.name}</div>
                        <div className="temperature">{Math.round((result.data.main.temp - 273.15) * 10) / 10}°C </div>
                        <div className="sky">{result.data.weather[0].main}</div>
                    </ResultWrap>
                )}
            </div>
        </AppWrap>
    );
}

export default App;

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #101b3f, skyblue);

    .appContentWrap {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        padding: 20px;
    }
    input {
        padding: 16px;
        border: 2px black solid;
        border-radius: 16px;
    }
    .title {
        font-size: 3.5rem;
        text-align: center;
        color: white;
        letter-spacing: 5px;
        padding-top: 150px;
    }
`;

const ResultWrap = styled.div`
    margin-top: 60px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;
    background-color:lightslategray;
    .city {
        font-size: 24px;
    }
    .temperature{
      font-size: 60px;
      margin-top: 5px;
      text-align:center;
    }
    .sky{
      font-size 20px;
      text-align:right;
      margin-top:10px;
    }
`;
