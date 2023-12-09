import React from "react";
import "./descriptionDetail.css";

const DescriptionDetail = (
  {
    text1, 
    text2 , 
    text3 , 
    text4, 
    text5, 
    title1 , 
    title2 , 
    title3 , 
    title4, 
    title5, 
    img1,
    img2,
    img3,
    img4,
    img5, 
  }) => {

    const arrData = [
      {
        img:img1,
        title:title1,
        text:text1
      },
      {
        img:img2,
        title:title2,
        text:text2
      },
      {
        img:img3,
        title:title3,
        text:text3
      },
      {
        img:img4,
        title:title4,
        text:text4
      },
      {
        img:img5,
        title:title5,
        text:text5
      },
    
    ]

  return (
      <div className={`bio-wrapper_detail`}>
      {
        arrData.map((data, index) => (
          <div className={`box_biography_detail  wrapper_detail${index}`} key={index}>
              <div className="text_biography_detail">
                <h2>
                  {
                    data.title
                  }
                </h2>
                <p>
                  {data.text}
                </p>
              </div>

              <div className="video_biography_detail">
              <   img
                    src={data.img}
                    alt="Imagen biography"
                ></img>
              </div>
            </div>

        ))
      }

    </div>
  );
};

export default DescriptionDetail;
