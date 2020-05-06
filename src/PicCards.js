import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import PicCard from './PicCard';
import { Col, Row } from 'antd';


function PicCards({ keyword, numPics }) {
  const [pic, setPic] = useState([]);

  async function connect() {
    const unsplash = new Unsplash({
      accessKey: process.env.REACT_APP_ACCESSKEY,
      secret: process.env.REACT_APP_SECRET,
    });

    unsplash.search
      .photos(keyword, 1, numPics, { orientation: 'portrait' })
      .then(toJson)
      .then((json) => {
        console.log(json);
        setPic(json.results);
      });
  }

  useEffect(() => {
    connect();
  }, [keyword, numPics]); // Only re-subscribe if props changes

  return (
    <div>
      <Row gutter={16} style={{ marginTop: 16 }}>
        {pic.map((pic, idx) => (
          <Col key={idx} span={6}>
            <PicCard 
            key={idx} pic={pic.urls.small} 
            title={pic.alt_description} 
            description={pic.description} 
            avatar={pic.user.profile_image.small}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PicCards;
