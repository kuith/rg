function Footer({ data }) {
  return (
    <footer className="py-5">
      <p className="text-center mb-0">{data.texto}</p>
      <ul className="footer-links text-center p-0">
        <li>
          <a
            href={`mailto:${data.email}?body=Método: HIGH ACHIEVERS ASSESSMENT EDITION (Esta información es importante, por favor no la borre). Escriba su consulta a partir de aquí.`}
            className="d-block px-2"
            lang="es"
          >
            {data.contacto}
          </a>
        </li>
        <li>
          <a
            href="/condicionesdeuso"
            className="d-block px-2"
            lang="es"
            target="_blank"
          >
            {data.condicionesdeuso}{" "}
            <span className="visually-hidden">(abre una nueva pestaña)</span>
          </a>
        </li>
        <li>
          <a
            href="/politicadeprivacidad"
            className="d-block px-2"
            lang="es"
            target="_blank"
          >
            {data.politicadeprivacidad}{" "}
            <span className="visually-hidden">(abre una nueva pestaña)</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
