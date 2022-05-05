import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import styles from "./specialCategory.module.css";

import CardSlider from './../CardSlider/index';
import { Divider ,Button} from 'antd';
const Special = ({ title }) => {
  return (
   <div className={styles.specialCat}>
      <div className={styles.titleCat}><Divider orientation='center'><p className={styles.text}>{title}</p> </Divider>
 <Button danger>مشاهده همه</Button>
 </div>
 <div className={styles.productCat}>
<CardSlider/>
   </div>
   </div>
  );
};

export default Special;
