import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import { Input, Slider, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PicCards from './PicCards';
import './App.css';
import 'antd/dist/antd.css';
//const { Search } = Input;

const App = () => {
  const [keyword, setKeyword] = useState('cats');
  const [numPics, setNumPics] = useState(4);
  const message = `Start typing and I will fetch ${numPics} pics...`;
  function onNumPicsChange(value) {
    console.log('onChange: ', value);
    setNumPics(value);
  }

  return (
    <div className="App">
      <h1>{message}</h1>
      <Row justify="space-around" align="middle" gutter={16}>
          <Col span={8}>
          <Input
            size="large"
            prefix={<SearchOutlined />}
            placeholder={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          </Col>
        <Col span={6}>
          <h5>move the slider to fetch more/less pics</h5>
        </Col>
        <Col span={10}>
          <Slider
            min={1}
            max={10}
            step={1}
            defaultValue={4}
            onChange={onNumPicsChange}
          />
        </Col>
      </Row>

      
      <PicCards keyword={keyword} numPics={numPics} />
    </div>
  );
};

export default App;
