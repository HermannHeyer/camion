"use client";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <Image
          src="/fotodos.png"
          priority
          width="800"
          height="800"
          alt="Avatar"
        />
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            ¡Bienvenido a Transportes Flecha Truck!
            <br />
            <TypeAnimation
              sequence={[
                "Transporte de Carga por Carretera",
                1000,
                "¡Tu carga, nuestra prioridad!",
                1000,
                "Somos expertos en el transporte",
                1000,
                "Servicio rápido, seguro y eficiente",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            En Transportes Flecha Truck, somos expertos en el transporte de
            carga por carretera en Chile. Nos comprometemos a ofrecerte un
            servicio rápido, seguro y eficiente, adaptado a tus necesidades
            específicas.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <Link
              href="/servicios"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver Servicios
            </Link>

            <Link
              href="/contacto"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
