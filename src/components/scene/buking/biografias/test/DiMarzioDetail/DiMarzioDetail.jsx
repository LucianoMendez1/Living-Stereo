import React, { useEffect } from "react";
import "../../styles/biography.css";
import HeroDetail from "../components/hero/HeroDetail";
import DescriptionDetail from "../components/description/DescriptionDetail";
import BookDetail from "../components/book/BookDetail";
import VideoDetail from "../components/videoDetail/VideoDetail";
import TecnicoRider from "../components/rider/TecnicoRider";

const DiMarzioDetail = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);


  const arrBook = [
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_7_tdgjte.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697851232/agusbragoni/alemna_v6rqni.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849793/agusbragoni/259816088_492493538611125_1617444028955560743_n_zesqyp.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_8_lgcr6g.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850814/agusbragoni/1_9_ixhipj.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850801/agusbragoni/1_3_kwe0yk.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850812/agusbragoni/1_5_v5sldy.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697849794/agusbragoni/258850834_648713199833873_412253203610088041_n_iq4ixd.jpg'
    },
    {
      img:'https://res.cloudinary.com/dvnhn35l4/image/upload/v1697850813/agusbragoni/1_6_ohzbo9.jpg'
    },
  ]

  
  return (
    <div className="container_hero">
      <HeroDetail
        name={"Simon Di Marzio"}
        img={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1702863532/livingStereo-Optimizado/simon/IMG_8760_k3oepw_1_vpcupd.jpg"
        }
      />

      <DescriptionDetail
        title1={
          "Simon di Marzio es un DJ oriundo de la ciudad de La Plata"
        }
        text1={
          "Comenzó su carrera hace 6 años inspirado en The Chemical Brothers, Jean-Michel Jarre, Sasha y Hernan Cattaneo"
        }
        img1={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1702863501/livingStereo-Optimizado/simon/8-DSC05676_mwbqtx_sgtzzy_b8mxwa.png"
        }
        title2={
          "Sus sets se destacan por contener transiciones largas ysonidos armónicos para crear atmósferas que cautivan alpúblico"
        }
        text2={
          "A la fecha, se encuentra dando sus primeros pasoscomo productor musical teniendo feedbacks positivos de grandes exponentes del género ademas recibio support de Hernán Cattaneo en su Podcasts semanal Resident"
        }
        img2={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697862778/5AB4639F-37D0-4EB6-9C95-D26B2147BD2E_nzdotm.jpg"
        }
        title3={"Su Trayectoria en los Clubes "}
        text3={
          "Se desempeñó en distintos clubes como The bow, Bahrein, Iconic Club,Zegre; así como también en ciclos como Rio Electronic Music,Hipico PM, Bodega Bonfati Mendoza, Parador Serena Mar delPlata"
        }
        img3={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1697939333/SimonlivingStereo/IMG_8755_u5fapx.jpg"
        }
        title4={
          "Por su parte es productor musical y DJ residente de Iconic Club."
        }
        text4={
          "En los últimos tiempos, ha tenido la oportunidad de incursionar dentro del género House."
        }
        img4={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1702863500/livingStereo-Optimizado/simon/DSC01761_p0lbu8_fvkzyp.jpg"
        }
        title5={
          "Identidad Musical"
        }
        text5={
          "Se siente identificado con el Progressive House, Deep House y Organic House."
        }
        img5={
          "https://res.cloudinary.com/dvnhn35l4/image/upload/v1702863498/livingStereo-Optimizado/simon/FF1F4B0A-1771-4A96-97F6-AA5CFA2D4DA0_hqelk0_pe4lqj.jpg"
        }
      />

      {/* <BookDetail arrBook={arrBook} /> */}

      <VideoDetail 
        name={'Simon Di Marzio'}
        video={'https://res.cloudinary.com/dvnhn35l4/video/upload/v1698108274/3_dl3rh9.mp4'}
      />

      <TecnicoRider/>

    </div>
  );
};

export default DiMarzioDetail