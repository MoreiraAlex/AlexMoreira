import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function PoliticaPrivacidade() {
  return ( 
    <div> 
      <Head> 
        <title>Política de Privacidade — OS Upflow</title> 
        <meta name="description" content="Política de Privacidade do OS Upflow. Saiba como tratamos e protegemos seus dados." /> 
      </Head>

      <main className={styles.policyContainer}>
        <h1>Política de Privacidade — OS Upflow</h1>

        <p><strong>Última atualização:</strong> 02 de março de 2026</p>

        <p>
          A OS Upflow valoriza a privacidade e a proteção dos dados pessoais de
          seus usuários. Esta Política de Privacidade descreve como coletamos,
          utilizamos, armazenamos e protegemos as informações quando você
          utiliza nossa plataforma.
        </p>

        <h2>1. Quem somos</h2>
        <p>
          <strong>Produto:</strong> OS Upflow<br />
          <strong>Responsável:</strong> Alex Inocencio Moreira — CNPJ
          41.925.661/0001-05<br />
          <strong>Contato:</strong> alex@moreiracode.com
        </p>

        <h2>2. Dados que coletamos</h2>

        <h3>2.1 Dados fornecidos pelo usuário</h3>
        <ul>
          <li>Nome</li>
          <li>Email</li>
          <li>Telefone</li>
          <li>CNPJ da empresa</li>
          <li>Informações inseridas nas ordens de serviço</li>
        </ul>

        <h3>2.2 Dados coletados automaticamente</h3>
        <ul>
          <li>Endereço IP</li>
          <li>Informações do dispositivo e navegador</li>
          <li>Logs de acesso</li>
          <li>Dados de uso da plataforma</li>
        </ul>

        <h3>2.3 Dados recebidos de integrações</h3>
        <p>
          Quando você conecta serviços de terceiros (como a API oficial do
          WhatsApp/Meta), podemos receber dados necessários para o funcionamento
          das automações, sempre conforme autorizado por você.
        </p>

        <h2>3. Como usamos seus dados</h2>
        <ul>
          <li>Fornecer e operar o OS Upflow</li>
          <li>Criar e gerenciar contas de usuário</li>
          <li>Processar ordens de serviço</li>
          <li>Melhorar a experiência do usuário</li>
          <li>Prestar suporte técnico</li>
          <li>Cumprir obrigações legais</li>
          <li>Garantir segurança e prevenir fraudes</li>
        </ul>

        <p><strong>Não vendemos dados pessoais.</strong></p>

        <h2>4. Compartilhamento de dados</h2>
        <p>Seus dados podem ser compartilhados apenas quando necessário:</p>
        <ul>
          <li>Com provedores de infraestrutura (ex: hospedagem e banco de dados)</li>
          <li>Para cumprimento de obrigação legal</li>
          <li>Mediante seu consentimento</li>
        </ul>

        <h2>5. Armazenamento e segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais para proteger seus dados
          contra acesso não autorizado, vazamento, alteração indevida ou
          destruição.
        </p>

        <h2>6. Seus direitos (LGPD)</h2>
        <p>
          Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018),
          você pode solicitar:
        </p>
        <ul>
          <li>Confirmação do tratamento</li>
          <li>Acesso aos dados</li>
          <li>Correção de dados incompletos ou desatualizados</li>
          <li>Exclusão de dados (quando aplicável)</li>
          <li>Portabilidade</li>
          <li>Revogação do consentimento</li>
        </ul>

        <p>
          Para exercer seus direitos, entre em contato pelo email informado
          acima.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Podemos utilizar cookies e tecnologias similares para manter você
          autenticado, melhorar a performance e entender o uso da plataforma.
          Você pode gerenciar cookies nas configurações do seu navegador.
        </p>

        <h2>8. Retenção de dados</h2>
        <p>
          Mantemos os dados pessoais apenas pelo tempo necessário para cumprir
          as finalidades desta política e obrigações legais.
        </p>

        <h2>9. Alterações nesta política</h2>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente.
          Recomendamos a revisão regular desta página.
        </p>

        <h2>10. Contato</h2>
        <p>
          <strong>Email:</strong> alex@moreiracode.com<br />
          <strong>Site:</strong> https://moreiracode.com
        </p>

        <p>
          <strong>
            Ao utilizar o OS Upflow, você declara estar ciente desta Política
            de Privacidade.
          </strong>
        </p>
      </main>

      <footer>
        <div>
          <p>Desenvolvido por Alex Moreira</p>
          <p>
            41.925.661 ALEX INOCENCIO MOREIRA - 41.925.661/0001-05
          </p>
        </div>
      </footer>
    </div>
)}
