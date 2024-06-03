import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServicios = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/fotocuatro.png" width="300" height="300" className="w-full h-full " alt="Particles " />
        </MotionTransition>
    );
}

export default AvatarServicios;