"use client";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import Image from "next/image";

const Contacto = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
        Contacto <span className="font-bold text-secondary"> Flecha Truck</span>
        </h1>

        <p className="mb-3 text-xl text-gray-300">
        Para más información sobre nuestros pallets, no dudes en contactarnos. Estamos
aquí para ofrecerte la mejor solución.

¡Transportes Flecha Truck, tu socio confiable en transporte de carga y soluciones de pallets
en Chile!

Contacto@tft.cl
        </p>
        <div className="flex space-x-4">
        
        <Image
          src="/fototres.png"
          priority
          width="400"
          height="400"
          alt="Avatar"
          className="inline "
        />
         <Image
          src="/fotocinco.png"
          priority
          width="400"
          height="400"
          alt="Avatar"
          className="inline"
        />
         <Image
          src="/fotoseis.png"
          priority
          width="400"
          height="400"
          alt="Avatar"
          className="inline"
        />
        </div>
      </ContainerPage>
    </>
  );
};

export default Contacto;
