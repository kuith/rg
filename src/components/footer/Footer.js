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
            Contacto
          </a>
        </li>
        <li>
          <a
            href={data.condiciones}
            className="d-block px-2"
            lang="es"
            target="_blank"
          >
            Condiciones de uso
            <span className="visually-hidden">(abre una nueva pestaña)</span>
          </a>
        </li>
        <li>
          <a
            href={data.urlPrivacidad}
            className="d-block px-2"
            lang="es"
            target="_blank"
          >
            Política de privacidad
            <span className="visually-hidden">(abre una nueva pestaña)</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
