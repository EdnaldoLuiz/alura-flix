import styles from './BannerSection.module.css';
import BannerConntent from './components/BannerContent/BannerConntent';

const BannerSection = () => {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.homeBanner}>
                    <BannerConntent/>
                </div>
                <div className={styles.homeVideo}>
                    <div className={styles.homeVideo__content}>
                        <iframe
                            title="Vídeo"
                            src="https://www.youtube.com/embed/2G_mWfG0DZE"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSection;








// const BannerSection = () => {
//     return (
//         <>
//             <section className={styles.home}>
//                 <div className={styles.homeBanner}>
//                     <div className={styles.homeBanner__content}>
//                         <h1>FRONT-END</h1>
//                         <h2>SEO Com React</h2>
//                         <p>
//                             Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho
//                             Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma
//                             sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo
//                             feito com todo o carinho do mundo construindo uma &quot;Pokedex&quot;!
//                         </p>
//                     </div>
//                 </div>
//                 <div className={styles.homeVideo}>
//                     <div className={styles.homeVideo__content}>
//                         <iframe
//                             title="Vídeo"
//                             src="https://www.youtube.com/embed/2G_mWfG0DZE"
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                         />
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };