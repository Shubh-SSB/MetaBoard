"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";
import { ourServicesData } from "@/appData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../../styles/swiper.css";

const OurServicesSection = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation !== "boolean"
    ) {
      swiperInstance.params.navigation.prevEl = prevBtnRef.current;
      swiperInstance.params.navigation.nextEl = nextBtnRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const toggleExpanded = (serviceId: number) => {
    setExpandedCards((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <section id="services" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services We <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal technology solutions and professional services
            for modern law firms.
          </p>
        </div>

        {/* Film Strip Carousel */}
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center">
            <Swiper
              onSwiper={setSwiperInstance}
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                prevEl: prevBtnRef.current,
                nextEl: nextBtnRef.current,
              }}
              spaceBetween={20}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              slidesPerView={3}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {ourServicesData.map((service) => {
                const Icon = service.icon;
                const isExpanded = expandedCards.includes(service.id);

                return (
                  <SwiperSlide key={service.id}>
                    <div
                      onMouseEnter={() => swiperInstance.autoplay.stop()}
                      onMouseLeave={() => swiperInstance.autoplay.start()}
                      className="glass-hover bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-red-600/30 hover:scale-105 relative group"
                    >
                      <div className="flex justify-center mb-6 mt-8">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          {service.description}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleExpanded(service.id)}
                        className="w-full flex items-center justify-center gap-2 text-red-600 hover:text-red-400 transition-colors duration-300 mb-4"
                      >
                        <span className="text-sm font-medium">
                          {isExpanded ? "Hide Details" : "Show Details"}
                        </span>
                        {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                      </button>

                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="glass bg-white/5 backdrop-blur-md rounded-lg p-4 mb-4">
                          <p className="text-gray-300 text-sm mb-4">
                            {service.details}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, index) => (
                              <div
                                key={index}
                                className="text-xs text-gray-400 flex items-center"
                              >
                                <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 border border-red-600 text-red-600 hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 glass-hover">
                          Learn More
                        </button>
                        <button className="flex-1 bg-primary hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 ripple-effect">
                          Enquire Now
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="absolute -left-20 -right-20 flex justify-between ">
              <button
                ref={prevBtnRef}
                title="Previous slide"
                aria-label="Previous slide"
                className="z-20 -left-75 glass-hover bg-black/50 backdrop-blur-md text-white p-3 rounded-full border border-white/20 transition-colors transition-border duration-300 hover:border-red-600/50"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                ref={nextBtnRef}
                title="Next slide"
                aria-label="Next slide"
                className="z-20 glass-hover bg-black/50 backdrop-blur-md text-white p-3 rounded-full border border-white/20 transition-colors transition-border duration-300 hover:border-red-600/50"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="custom-pagination flex justify-center mt-8 gap-2" />
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
