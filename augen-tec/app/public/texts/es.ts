import torre from "@/images/Torre.jpg";
import Laboratorio from "@/images/Laboratorio.jpg";
import Adios_Moldes from "@/images/Adios_Moldes.jpg";
import Bloqueadora from "@/images/Bloqueadora.png";
import Generador from "@/images/Generador.png";
import Pulidora from "@/images/Pulidora.png";
import Laser from "@/images/Laser.png";
import { BorderPosition } from "@/app/components/equipment/equipment";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const esData = {
  main: [
    {
      imageData: {
        src: torre,
        alt: "Torre augen labs",
      },
      title: "Innovación y desarrollo para la industria óptica",
      id: "AugenTec",
      text: "Somos parte de un grupo de compañías dedicadas a ofrecer soluciones a toda la cadena de necesidades de la industria óptica. Desde la investigación y el diseño de nuevos materiales, hasta nuestra red de laboratorios, ofrecemos a la industria maquinaria, insumos y materiales de la más alta calidad",
    },
    {
      imageData: {
        src: Laboratorio,
        alt: "Laboratorios augen labs",
      },
      colorTitle: {
        color: "#007960",
        text: "LabONE",
      },
      id: "Sistema",
      title: "Más que máquinas, un sistema.",
      text: "Si lo que buscas es montar un laboratorio óptico o, si bien, estás evaluando opciones para renovar el que ya tienes, te ofrecemos la respuesta más práctica del mercado: un sistema total que te simplificará la operación. Un equipo de máquinas eficientes por sí mismas que, juntas, completan un proceso ideal, fluido y bien coordinado. Porque no necesitas un par de máquinas nuevas que te darán nuevos problemas. Necesitas un sistema que solo te dé soluciones.",
    },
    {
      imageData: {
        src: Adios_Moldes,
        alt: "Adios  moldes",
      },
      title: "Adiós a los moldes.",
      text: "La evidencia más clara de que un laboratorio tiene que modernizarse son las pilas de moldes esperando a ser utilizados. Nuestro generador puede producir cualquier forma en una lente, sin necesidad de moldes. Esa versatilidad de nuestro Free Form te da la posibilidad de lograr cualquier índice de refracción, simplificando y abaratando tus procesos.",
    },
  ],
  equipos: [
    {
      imageData: {
        src: Bloqueadora,
        alt: "Bloqueadora rápida FF-SB",
        height: '200px'
      },
      colorBorder: {
        color: "#cfcece",
        position: BorderPosition.left
      },
      id: "Maquinaria",
      title: "Bloqueadora Rápida FF-SB",
      text: "Un sistema de sujeción de lentes por metal líquido de baja temperatura (52ºc). Utiliza sólo 1 mm de espesor de metal, que se enfría en solo 15 segundos, evitando la deformación de la lente. El prisma necesario para desplazar el centro óptico se da en el generador de superficies, evitando errores del operario",
    },
    {
      imageData: {
        src: Generador,
        alt: "Generador de Forma Libre",
        height: '350px'
      },
      colorBorder: {
        color: "#007960",
        position: BorderPosition.right
      },
      title: "Generador de Forma Libre FF-Víctor 4",
      text: "Su sistema de pivote evita la vibración típica de los generadores de Forma Libre. Se calibra en fábrica y produce superficies ópticas de alta precisión aún en diseños progresivos. Demanda un mínimo mantenimiento cada 5,000 lentes, por reemplazo de herramienta de corte y, además, su tecnología es amigable con el medio ambiente.",
    },
    {
      imageData: {
        src: Pulidora,
        alt: "Pulidora Rápida",
        height: '350px'
      },
      colorBorder: {
        color: "#c49907",
        position: BorderPosition.left
      },
      title: "Pulidora Rápida FF-COMPACT",
      text: "Una pulidora silenciosa, de dos minutos por ciclo. Con un pulido brillante y profundo, respeta fielmente el diseño y ofrece graduaciones con gran precisión. Con costos mínimos de insumos, es capaz de procesar hasta 100 superficies por herramienta. Sólo bastan 3 de ellas para todo el rango de graduaciones. Pantalla táctil.",
    },
    {
      imageData: {
        src: Laser,
        alt: "Grabado Láser",
        height: '330px'
      },
      colorBorder: {
        color: "#007960",
        position: BorderPosition.right
      },
      title: "Grabado Láser LFL-2020",
      text: "Graba en fracción de segundos. Es fácil de usar. Graba todo tipo de termoplásticos, metal, vidrio, madera y materiales orgánicos. La pantalla táctil de 17” permite un control máximo de programación y comandos. Cuenta con cámara de video para posicionamiento de monturas para grabados de logotipos y marcas registradas",
    },
  ],
  contact: {
    id: "Contacto",
    title: "Contáctanos",
    text: "Sabemos que hacerte de un laboratorio es una decisión compleja. Pero también sabemos que la mejor forma de tomar esa decisión es charlando y resolviendo tus dudas de una forma cercana. Contáctanos si tienes alguna duda o si te interesa conocer nuestros equipos. Estamos abiertos.",
    socials: [
      {
        icon: WhatsAppIcon,
        url: "https://wa.me/3310620319",
        text: "(+52) 33 1062 0319"
      },
      {
        icon: FacebookIcon,
        url: "https://www.facebook.com/Augen.Tec/",
        text: "Augen.Tec"
      },
      {
        icon: InstagramIcon,
        url: "https://www.instagram.com/augen_tec/ ",
        text: "Augen_tec"
      },
      {
        icon: YouTubeIcon,
        url: "https://www.youtube.com/@AugenTec",
        text: "@Augentec"
      },
      {
        icon: LinkedInIcon,
        url: "https://www.linkedin.com/company/augen-tec/",
        text: "Company/Augen-Tec"
      }
    ]
  }
};
