import React from 'react';

export const LiteraryContests = () => {
    const slides = [
        { image: "https://placehold.co/400x500/f7a81b/ffffff?text=Afiche+Concurso+2024", alt: "Afiche 2024" },
        { image: "https://placehold.co/400x500/005daa/ffffff?text=Afiche+Concurso+2023", alt: "Afiche 2023" },
        { image: "https://placehold.co/400x500/f7a81b/ffffff?text=Afiche+Concurso+2022", alt: "Afiche 2022" },
        { image: "https://placehold.co/400x500/005daa/ffffff?text=Entrega+de+Premios", alt: "Entrega de Premios" },
    ];

    return (
        <section id="concursos" className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-rotary-blue mb-4">Concursos Literarios</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">Fomentamos la cultura y la creatividad a través de nuestro tradicional Concurso de Cuento Breve, un certamen que ya es un clásico en la región.</p>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    className="pb-12"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="p-4">
                            <img src={slide.image} alt={slide.alt} className="rounded-lg shadow-xl mx-auto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};
