import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const slides = [
    { image: "https://placehold.co/1920x1080/5c6b73/ffffff?text=Paisaje+de+La+Falda", alt: "Paisaje de La Falda" },
    { image: "https://placehold.co/1920x1080/9a8c98/ffffff?text=Miembros+del+Club+en+Acción", alt: "Miembros del club" },
    { image: "https://placehold.co/1920x1080/778da9/ffffff?text=Evento+Comunitario", alt: "Evento comunitario" },
];

export const Hero = () => {
    return (
        <section id="inicio" className="relative h-[80vh] bg-gray-800 pt-20">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}></SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-6xl font-black mb-4 text-rotary-gold drop-shadow-lg">Rotary Club La Falda</h1>
                    <p className="text-xl md:text-3xl font-light mb-8">Somos Gente de Acción generando un cambio positivo en nuestra comunidad.</p>
                    <a href="#quienes-somos" className="bg-rotary-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-xl">
                        Conócenos
                    </a>
                </div>
            </div>
        </section>
    );
};