import React from "react";
import styles from "./header.module.css";
import { Divider,Image } from 'antd';
const Header = () => {
  return (
    <div className={styles.headcontainer}>
      <div className={styles.headerimg1}>
        
        <img className={styles.headerimg}
          src={"/assets/headerBanner/3fc4c049bef12397eadcdcc78e268bf9.jpg"}
          alt=""
        />
              <button  className={styles.btnBannerTop}>
                  مشاهده
        </button>
      </div>
  
      <div className={styles.headerimg2}>
        <img className={styles.headerimg}
          src={"/assets/headerBanner/15e1f32178480d2e76c3e133b91bf86e.jpg"}
          alt=""
              />
                  <button  className={styles.btnBannerDown}>
                  مشاهده
        </button>

      </div>

    </div>
  );
};

export default Header;
