import './work.scss';
import {useState, useEffect} from 'react';

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Web Design',
      desc: 'Geliştirmesinde en uzun bulunduğum ve birçok yönden beni en fazla geliştiren web sayfasın Türk Telekom DİGITT web sitesine en önde yer vermek istedim',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Web Design',
      desc: 'Vue.js ile yazılan ve benim vue deneyimi kazanmama olanak sağlayan NYFX web sitesi',
      img: 'https://mir-s3-cdn-cf.behance.net/projects/404/ab1ee8126550151.Y3JvcCwyNzI4LDIxMzQsMzMsMA.png',
    }
  ];

  const handleClick = way => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="work" id="work">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="Mobile" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href="#portfolyo">Projeler</a> </span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="Arrow Left" onClick={() => handleClick('left')} />
      <img src="assets/arrow.png" className="arrow right" alt="Arrow Right" onClick={() => handleClick('right')} />
    </div>
  );
}
