import styles from './BannerContent.module.css'

const BannerConntent = () => {
    return (
        <div className={styles.bannerContent}>
            <h1>FRONT-END</h1>
            <h2>SEO Com React</h2>
            <p>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho
                Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma
                sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo
                feito com todo o carinho do mundo construindo uma &quot;Pokedex&quot;!
            </p>
        </div>
    );
}

export default BannerConntent;