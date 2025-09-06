const Carousel = () => (
  <div className="carousel slide" id="carouselExample">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <video
          src="https://www.rotary.org/sites/default/files/2018_156_PowerInOurConnections_Omnibus30_NOVO_1080-v2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="video-hero"
        />
        <div className="carousel-caption d-none d-md-block">
          <h1 className="fw-bold">Somos gente de acción</h1>
          <p>
            Nuestra red mundial de más de 1,2 millones de vecinos, amigos y líderes voluntarios
            ofrecen sus conocimientos y recursos para resolver problemas y abordar las necesidades de las comunidades.
          </p>
          
        </div>
      </div>
    </div>
  </div>
);

export default Carousel;
