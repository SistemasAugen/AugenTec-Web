import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  console.log(path.join(process.cwd(), 'app/public/files/brochure.pdf'));
  const rutaArchivo = path.join(process.cwd(), 'app/public/files/brochure.pdf');

  fs.readFile(rutaArchivo, (error, datos) => {
    if (error) {
      console.error(error);
      res.status(500).end();
    } else {
      res.setHeader('Content-Disposition', 'inline; filename="Brochure.pdf"'); 
      res.setHeader('Content-Type', 'application/pdf');
      res.send(datos);
    }
  });
}