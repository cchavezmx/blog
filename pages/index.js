import { useEffect, useState } from 'react'
import Head from 'next/head'
import a from 'next/link'
import Image from 'next/image'

const phone = '5215546371510'
const whatsappMessage = `https://api.whatsapp.com/send/?phone=${phone}&text=Me gustaria tener información`

export default function Home () {
  const [imgUrl, setImgUrl] = useState([])
  const [load, setLoad] = useState(false)

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setImgUrl(data.message))
      .catch(err => console.log(err))
      .finally(() => setLoad(true))
  }, [])

  return (
    <div lang="es_MX" className="styles">

    <Head>
    <title>Grupo Intecsa</title>
      <link rel='alternate' href='https://grupointecsa.com/' hrefLang='x-default' />
      <link rel='alternate' href='https://grupointecsa.com/es-CA' hrefLang='ca-es' />
      <link rel='alternate' href='https://grupointecsa.com/es-GA' hrefLang='gl-es' />
      <link rel='alternate' href='https://grupointecsa.com/es-EU' hrefLang='eu-es' />
      <link rel='alternate' href='https://grupointecsa.com/es-ES' hrefLang='es-es' />
      <meta name="description" content="Empresa dedicada a la venta, construcción, ingeniería, ejecución de obra eléctrica para el sector industrial, comercial y de edificios"></meta>
      <meta name="description" content="Integradores de autorizados ABB"></meta>
      <meta property="og:locale" content="es_MX" />
      <meta property="og:title" content="Grupo Intecsa | Venta ABB, Construcción, Energía, Instalaciónes Eléctricas, Canalización Eléctrica"/>
      <meta property="og:description" content="Somos empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricasen en industrias, comercios y edificios."/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <main>

        <nav className="navflex">
          <span className="nav--logo">
            <a href="/">
              <Image width="65" height="70" src="/logo/web-logo.webp" alt="logo grupo intecsa"/>
            </a>
          </span>

          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="nav--links">
            <a href="/">Nuestra Empresa</a>
            <a href="https://www.itamx.com" target="_blank" rel="noopener follow noreferrer" >Tienda</a>
            <a href="/">Contacto</a>
          </div>

        </nav>

      <section className="banner--empresa">
          <div>
            <h1 className="title color-ita">Bienvenido</h1>
            <p>Somos una Empresa dedicada a la fabricación, comercialización y montaje de instalaciones eléctricas en industrias, comercios y edificios.</p>
            <button>Contacto</button>
          </div>

          <div className="marco--img">
            <Image width="100%" height="100%" src="/bg/git-big-wb.webp" alt="logo de la empresa Grupo Intesca en un foto"/>
          {/* <video muted="true" loop="true" autoPlay="true" className="marco--img" style={{ width: "100%", height: "100%"}}>
            <source src="/video/videoModal.m4v" type="video/x-m4v"/>
          </video> */}
          </div>
      </section>

      <section className="productos--estrella">
        <div className="productos--estrella--a">
            <div>
                <h3 className="text-black">Certificaciones</h3>
                <p>Lorem tempor qui qui fugiat nisi ad minim. Elit magna elit aliquip irure. Cillum officia sit enim cupidatat est ea ad laboris minim do sit consequat.</p>
            </div>
            <div>
            <h3 className="text-black">Curriculum</h3>
                <p>Lorem tempor qui qui fugiat nisi ad minim. Elit magna elit aliquip irure. Cillum officia sit enim cupidatat est ea ad laboris minim do sit consequat.</p>
            </div>
            <div>
                <h3 className="text-black">Catálogo Virtual</h3>
                {/* <Image width={100} height={100} src="" /> */}
                <p>Lorem tempor qui qui fugiat nisi ad minim. Elit magna elit aliquip irure. Cillum officia sit enim cupidatat est ea ad laboris minim do sit consequat.</p>
            </div>
          </div>
      </section>

      <section className="descripciones">
        <h1 className="text-black">Nuestros Productos</h1>
          <div className="descripcion--item">
                <div className="marcos marco--tableros"></div>
                <div>
                    <h2>Tableros</h2>
                    <p>Velit sit sint anim deserunt enim ipsum ut officia tempor amet laboris nostrud voluptate. Dolore irure amet do ea reprehenderit Lorem sunt cupidatat Lorem anim non nostrud aute. Aliqua et anim occaecat ex aliquip minim eu amet nulla anim excepteur in fugiat reprehenderit. Lorem ullamco qui irure eu ipsum aute ea magna tempor occaecat. Deserunt ullamco elit in eiusmod occaecat sit. Irure occaecat incididunt fugiat veniam mollit proident dolore. Aliqua non ad laboris veniam sunt id amet ex culpa adipisicing fugiat minim mollit nulla.</p>
                </div>
          </div>
          <div className="descripcion--item reverse">
                <div>
                    <h2>Canalizacion</h2>
                    <p>Velit sit sint anim deserunt enim ipsum ut officia tempor amet laboris nostrud voluptate. Dolore irure amet do ea reprehenderit Lorem sunt cupidatat Lorem anim non nostrud aute. Aliqua et anim occaecat ex aliquip minim eu amet nulla anim excepteur in fugiat reprehenderit. Lorem ullamco qui irure eu ipsum aute ea magna tempor occaecat. Deserunt ullamco elit in eiusmod occaecat sit. Irure occaecat incididunt fugiat veniam mollit proident dolore. Aliqua non ad laboris veniam sunt id amet ex culpa adipisicing fugiat minim mollit nulla.</p>
                </div>
                <div className="marcos marco--canaliza"></div>
          </div>
          <div className="descripcion--item">
                <div className="marcos marco--ingenieria"></div>
                <div>
                    <h2>Ingeniería Eléctrica</h2>
                    <p>Velit sit sint anim deserunt enim ipsum ut officia tempor amet laboris nostrud voluptate. Dolore irure amet do ea reprehenderit Lorem sunt cupidatat Lorem anim non nostrud aute. Aliqua et anim occaecat ex aliquip minim eu amet nulla anim excepteur in fugiat reprehenderit. Lorem ullamco qui irure eu ipsum aute ea magna tempor occaecat. Deserunt ullamco elit in eiusmod occaecat sit. Irure occaecat incididunt fugiat veniam mollit proident dolore. Aliqua non ad laboris veniam sunt id amet ex culpa adipisicing fugiat minim mollit nulla.</p>
                </div>
          </div>
      </section>

      <section className="socios">
          <h2>Nuestros Socios Comerciales</h2>
      <section className="socios-a">
          { load && Object.values(imgUrl).map((img, index) => {
            return <Image key={index} width="100%" height="100%" src={`/socios/${img}`} alt="nuestros socios comerciales ica, carso, liverpool" />
          })}
      </section>
      </section>

      <section className="entradas--blog">
        <h2>Ultimos temas del Blog</h2>

          <div className="blog--entries">

          <div>
            <Image width="100%" height="100%" src="/blog/foto_blog.jpg" />
            <h3>Titulo 1 blog</h3>
            <p>Ut sunt quis ipsum dolore ex proident ullamco laborum dolore sit laboris. Labore quis qui proident eu consequat minim aute enim amet nisi elit. Irure eiusmod tempor est fugiat cillum. Sit ad proident eiusmod pariatur aliquip est fugiat deserunt Lorem cupidatat exercitation amet esse ullamco. Occaecat ut cupidatat incididunt laborum amet.</p>
          </div>

          <div>
            <Image width="100%" height="100%" src="/blog/foto_blog.jpg" />
            <h3>Titulo 2 blog</h3>
            <p>Ut sunt quis ipsum dolore ex proident ullamco laborum dolore sit laboris. Labore quis qui proident eu consequat minim aute enim amet nisi elit. Irure eiusmod tempor est fugiat cillum. Sit ad proident eiusmod pariatur aliquip est fugiat deserunt Lorem cupidatat exercitation amet esse ullamco. Occaecat ut cupidatat incididunt laborum amet.</p>
          </div>

          <div>
            <Image width="100%" height="100%" src="/blog/foto_blog.jpg" />
            <h3>Titulo 3 blog</h3>
            <p>Ut sunt quis ipsum dolore ex proident ullamco laborum dolore sit laboris. Labore quis qui proident eu consequat minim aute enim amet nisi elit. Irure eiusmod tempor est fugiat cillum. Sit ad proident eiusmod pariatur aliquip est fugiat deserunt Lorem cupidatat exercitation amet esse ullamco. Occaecat ut cupidatat incididunt laborum amet.</p>
          </div>

          </div>
      </section>

      <section id="contacto" className="footer">
          <h2>Información de Contacto</h2>

      <div className="footer--cotainer">
          <div className="redes">
            <a href={whatsappMessage}
            target="_blank"
            rel="noopener follow noreferrer"
            aria-label="Mandanos un whatsapp"
            >
            <Image width="100%" height="100%" src="/social/whatsapp.svg" className="imgnav" alt="Síguenos en Facebook"/>
            </a>

            <a href="https://www.facebook.com/Grupo-Intecsa-Mx-Oficial-213945636173987/"
            target="_blank"
            rel="noopener follow noreferrer"
            aria-label="Sígenos en facebook"
            >
            <Image width="100%" height="100%" src="/social/facebook.svg" className="imgnav" alt="Síguenos en Facebook"/>
            </a>

            <a href="https://www.instagram.com/grupointecsamx/?hl=es-la"
            target="_blank"
            rel="noopener follow noreferrer"
            aria-label="Sígenos en instagram"
            >
            <Image width="100%" height="100%" src="/social/insta.svg" className="hidden" alt="Síguenos en Instragram" />
            </a>

            <a href="https://www.linkedin.com/company/grupo-intecsa/linkbout/"
            target="_blank"
            rel="noopener follow noreferrer"
            aria-label="Nuestra empresa en linkedin"
            >
            <Image width="100%" height="100%" src="/social/linkedin.svg" className="hidden" alt="Síguenos" />
            </a>

            <a href="https://www.youtube.com/channel/UCLglnunszAKCtMYLaNDBpUw/featured"
            target="_blank"
            rel="noopener follow noreferrer"
            aria-label="Cómo llegar"
            >
            <Image width="100%" height="100%" src="/social/youtube.svg" className="imgnav" alt="Síguenos en Youtube" />
            </a>

            <div className="visitanos">
              <h5>Visitanos</h5>
              <iframe title="myMapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0" width="400px" height="200px" ></iframe>
            </div>

            </div>

          <div className="address">
            <span><h5>Dirección</h5><p>Raúl Zárate Machuca Cuevítas #11, 01220 Ciudad de México, CDMX</p></span>
            <span><h5>Nuestros horarios</h5><p>Lunes / Viernes 09:00 - 18:00</p></span>
            <span><h5>Correo:</h5><a href="mailto:contacto@grupointecsa.com" >contacto@grupointecsa.com</a></span>

          </div>

      </div>
        <div className="visitanos-small">
            <h5>Visitanos</h5>
            <iframe title="myMapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5322.527002406184!2d-99.22696839255828!3d19.38668419189787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201adefab9513%3A0xa5936acc13a69c0d!2sRa%C3%BAl%20Z%C3%A1rate%20Machuca%2011%2C%20Cuevitas%2C%20%C3%81lvaro%20Obreg%C3%B3n%2C%2001220%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1613650539398!5m2!1ses!2smx" frameBorder="0" style={{ border: '0' }} allowFullScreen="" aria-hidden="false" tabIndex="0" width="100%" height="280px" ></iframe>
          </div>
      </section>

      </main>
    </div>
  )
}
