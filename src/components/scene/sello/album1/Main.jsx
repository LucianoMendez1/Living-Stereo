import "./Main.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Article from "./Article";
const INITIAL_CONTENT = [
  {
    id: `ar1`,
    imgSrc:
      "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071424/b2bAgusSimon/D870221E-7541-4B81-A3CE-79E1D58BC806_npxghh.jpg",
    desc: (
      <>
        South America
        <a
          // To open the link in a new tab
          target="_blank"
          rel="noreferrer"
          href="https://www.dylanbrouwer.design/work"
        ></a>
      </>
    ),
    title: "   Other Side",
    data_status: "active",
    button_error: "no-error",
    audioSrc:
      "https://res.cloudinary.com/dvnhn35l4/video/upload/v1698687934/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Other_Side_South_America_Avenue_zchegh.mp3",
  },
  {
    id: `ar2`,
    imgSrc:
      "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071409/b2bAgusSimon/4c24c54f-ec80-4e18-b996-db4ce2302057_awkiz9.jpg",
    desc: "Nicolas Nieves, Agustín Bragoni, Simon Di Marzio - Other Side [South America Avenue]",
    title: "DirtyPool",
    data_status: "inactive",
    button_error: "no-error",
    audioSrc:
    "https://res.cloudinary.com/dvnhn35l4/video/upload/v1698689314/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Dirty_Pool_South_America_Avenue_mqp7tw.mp3",
  },
  {
    id: `ar3`,

    imgSrc:
      "https://res.cloudinary.com/dvnhn35l4/image/upload/v1699071443/b2bAgusSimon/IMG_3719_hlged1.jpg",
    desc: "Nicolas Nieves, Agustín Bragoni, Simon Di Marzio",
    title: "Rivera Paradise",
    data_status: "inactive",
    button_error: "no-error",
    audioSrc: "https://res.cloudinary.com/dvnhn35l4/video/upload/v1698689471/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Rivera_Paradise_South_America_Avenue_imwpnj.mp3",
  },
  {
    id: `ar4`,
    imgSrc:
      "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939360/SimonlivingStereo/DSC02229_p7iqlb.jpg",
    desc: "Nicolas Nieves, Agustín Bragoni, Simon Di Marzio.",
    title: "....",
    data_status: "inactive",
    button_error: "no-error",
    audioSrc:"https://res.cloudinary.com/dvnhn35l4/video/upload/v1698087033/Nicolas_Nieves_Agust%C3%ADn_Bragoni_Simon_Di_Marzio_-_Rivera_Paradise_South_America_Avenue_xbidwr.mp3"
  },
];
const Main = () => {
  const [content, setContent] = useState(INITIAL_CONTENT[0]);
  const [contentIndex, setContentIndex] = useState({ old: 0, new: 0 });

  const leftClickHandler = (id) => {
    const selectedContentIndex = INITIAL_CONTENT.findIndex(
      (item) => item.id === id
    );
    setContent(INITIAL_CONTENT[selectedContentIndex]);
    let newIndex = selectedContentIndex - 1;
    if (newIndex < 1) {
      newIndex = 0;
      INITIAL_CONTENT[newIndex].button_error = "error";
    }

    setContentIndex({ old: selectedContentIndex, new: newIndex });
    INITIAL_CONTENT[selectedContentIndex].data_status = "inactive-to-left";
    INITIAL_CONTENT[newIndex].data_status = "active";
  };

  console.log({ contentIndex2: contentIndex });

  const rightClickHandler = (id) => {
    const selectedContentIndex = INITIAL_CONTENT.findIndex(
      (item) => item.id === id
    );
    setContent(INITIAL_CONTENT[selectedContentIndex]);
    let newIndex = selectedContentIndex + 1;
    if (newIndex > 3) {
      newIndex = 3;
    }

    setContentIndex({ old: selectedContentIndex, new: newIndex });
    INITIAL_CONTENT[selectedContentIndex].data_status = "inactive-to-right";
    INITIAL_CONTENT[newIndex].data_status = "active";
  };

  return (
    <main className="main">
      <Navbar />
      <div className="app_container"></div>
      {INITIAL_CONTENT.map((article, index) => (
    <Article
      key={`${index} ${article.title}`}
      id={article.id}
      imgSrc={article.imgSrc}
      desc={article.desc}
      title={article.title}
      data_index={index}
      data_status={article.data_status}
       audioSrc={article.audioSrc} 
      handleLeftClick={leftClickHandler.bind(null, article.id)}
      // handleLeftClick={leftClickHandler}
      handleRightClick={rightClickHandler.bind(null, article.id)}
      button_error={article.button_error}
    />
  ))
}
    </main>
  );
};

export default Main;
