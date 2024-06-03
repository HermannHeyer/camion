"use client";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { Check } from "lucide-react";
import Link from "next/link";

const ServiciosPage = () => {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
        Nuestros <span className="font-bold text-secondary"> servicios</span>
        </h1>
        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Carga General:</p>
          Transportamos todo tipo de productos con la máxima seguridad.
        </div>

        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Carga Pesada:</p>
          Equipos especializados para manejar cargas de gran tamaño y peso.
        </div>

        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Distribución y Logística:</p>
          Soluciones integrales para optimizar tu cadena de
suministro.
        </div>

        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Nuestra Flota:</p>
          Contamos con una flota moderna y equipada con tecnología de seguimiento
en tiempo real, asegurando la máxima transparencia y seguridad durante todo el transporte.
        </div>

        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Calidad y Seguridad: </p>
          Tu tranquilidad es nuestra prioridad. Cumplimos con todas las
regulaciones de seguridad y trabajamos con los más altos estándares de calidad para
proteger tu carga.
        </div>
        <p className="mb-3 text-xl text-gray-300">
        Contacto: ¿Necesitas un presupuesto o tienes alguna consulta? ¡Contáctanos hoy mismo!
Estamos aquí para ayudarte.
        </p>

        <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
        Venta de  <span className="font-bold text-secondary"> Pallets</span>
        </h1>

        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> ¡Soluciones de almacenamiento eficientes!:  </p>
          Además del transporte, en Transportes Flecha Truck ofrecemos pallets de alta calidad para
tus necesidades de almacenamiento y transporte.
proteger tu carga.
        </div>
        <div className="mb-3 text-xl text-gray-300">
          <p className="font-bold md:inline-block"> <Check size={30} className="inline"/> Variedad de Pallets: </p>
         <p className="font-bold"> Pallets Nacionales y Certificados con la Norma NIMF 15 </p> <p>
         Personalización y Mantenimiento: Adaptamos nuestros pallets a tus necesidades
específicas y ofrecemos servicios de reparación para mantenerlos en óptimas condiciones.
         </p>
         <p className="font-bold"> Calidad Garantizada: </p> <p>
         Nuestros pallets cumplen con los más altos estándares de calidad,
asegurando durabilidad y resistencia.
         </p>
        </div>
        <Link href="/contacto" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
          Contacta conmigo
        </Link>
     
      </ContainerPage>
    </>
  );
};

export default ServiciosPage;
