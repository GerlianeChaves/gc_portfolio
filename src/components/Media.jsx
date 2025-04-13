import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Media.css";
import Academic from "../components/Academic";


import news1 from "../assets/jeci.png";
import news2 from "../assets/kalyne.png";
import news3 from "../assets/ifmaELAP.png";
import news4 from "../assets/fapema.png";

import news6 from "../assets/obr.jpg";

const mediaItems = [
  { id: 2, title: "From Maranhão to Canada", image: news2, url: "https://educapes.capes.gov.br/bitstream/capes/734459/2/Produto%20Educacional%20-%20Revista%20InfoIFMA%20-%20Kalyne%20Figueredo.pdf" },
  { id: 1, title: "The Life of a Roboticist", image: news1, url:"https://heyzine.com/flip-book/cb1c71fddb.html" },
  { id: 3, title: "Student from IFMA Campus Imperatriz Selected as Visiting Researcher in Canada", image: news3, url: "https://imperatriz.ifma.edu.br/2021/12/14/estudante-de-engenharia-sera-pesquisadora-visitante-no-canada/" },
  { id: 4, title: "2017 Fapema Neiva Moreira Award Winners", image: news4, url: "https://www.fapema.br/vencedores-do-premio-fapema-neiva-moreira-2017/" },
  
  { id: 6, title: "Students Awarded Bronze Medal at Robotics Olympiad", image: news6, url: "https://acailandia.ifma.edu.br/2015/10/02/estudantes-levam-bronze-em-olimpiada-de-robotica/" },
];

function Media() {
  return (
    <section id="media"className="media_section">
      <h2>In the Media</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation={true}
        coverflowEffect={{
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="media_carousel"
      >
        {mediaItems.map((item) => (
          <SwiperSlide key={item.id} className="media_slide">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more-button">
              Read more
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <Academic/>

    </section>
  );
}

export default Media;
