import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MoreiraCode | Desenvolvimento de Software</title>
        <meta
          name="description"
          content="MoreiraCode é uma empresa especializada em desenvolvimento de software, automação de processos e integração de sistemas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>MoreiraCode</h1>

        <p className={styles.description}>
          A <strong>MoreiraCode</strong> é especializada no desenvolvimento de
          software, automação de processos e integração de sistemas para empresas.
        </p>

        <section>
          <h2>Serviços</h2>
          <ul>
            <li>Desenvolvimento de APIs</li>
            <li>Automação de processos empresariais</li>
            <li>Integração com sistemas e plataformas</li>
            <li>Desenvolvimento Web</li>
          </ul>
        </section>

        <section>
          <h2>Contato</h2>
          <p>Email: alex@moreiracode.com</p>
          <p>
            Github:{' '}
            <a
              href="https://github.com/MoreiraAlex"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/MoreiraAlex
            </a>
          </p>
        </section>

        <section>
          <h2>Política de Privacidade</h2>
          <p>
            Consulte nossa política de privacidade para entender como tratamos os dados
            de usuários e clientes.
          </p>
        
          <a href="/privacy-policy">
            Ver Política de Privacidade
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <p>Desenvolvido por Alex Moreira</p>
          <p className={styles.cnpj}>
            41.925.661 ALEX INOCENCIO MOREIRA - CNPJ: 41.925.661/0001-05
          </p>
        </div>
      </footer>
    </div>
  )
}
