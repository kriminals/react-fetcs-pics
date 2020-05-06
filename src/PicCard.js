import React from "react";
import { Card, Avatar } from "antd";
const { Meta } = Card;

const PicCard = ({ pic, title, description, avatar }) => {
  return (
    <div className="wrapper-pic">
      <Card
        hoverable
        cover={<img alt="example" src={pic} />}
      >
        <Meta 
        avatar={<Avatar src={avatar} />}
        title={title} 
        description={description} />
      </Card>
    </div>
  );
};

export default PicCard;
