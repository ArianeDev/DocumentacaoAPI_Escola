import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Objetivo do projeto',
    description: (
      <>
        O presente projeto visa o desenvolvimento de um sistema de gerenciamento escolar focado na administração do cadastro de professores. A principal funcionalidade do sistema consiste na implementação de um CRUD (Create, Read, Update e Delete) que permite a gestão eficiente e a atualização das informações relativas aos docentes de uma instituição educacional.<br/>
        O sistema proporciona uma interface simples e intuitiva para realizar o cadastro completo de professores, incluindo dados como nome completo, matérias que cada docente ministra, turno de atuação, informações de contato, entre outros dados relevantes. Além disso, o sistema possibilita a atualização dessas informações, a visualização das informações de maneira organizada e a exclusão de registros quando necessário.
      </>
    ),
  },
  {
    title: 'Visão geral',
    description: (
      <>
        A aplicação foi projetada para atender a necessidade da escola SENAI “Roberto Mange” que busca uma solução eficiente para o gerenciamento dos dados relacionados aos seus professores. Com funcionalidades que incluem a adição de novos professores ao banco de dados, a atualização de informações dos docentes, a consulta rápida das informações e a remoção de registros desnecessários ou incorretos, o sistema facilita o acompanhamento e controle da equipe pedagógica.
        A solução também visa garantir a integridade e a consistência dos dados, além de fornecer uma experiência de uso clara e objetiva para os administradores e responsáveis pelo gerenciamento dos registros.
      </>
    ),
  },
  {
    title: 'Benefícios esperados',
    description: (
      <>
        A implementação do sistema de gerenciamento de professores trará diversos benefícios para a instituição, entre os quais destacam-se:
        <ul>
            <li>Agilidade na consulta e atualização dos dados dos professores, reduzindo o tempo gasto em processos administrativos.</li>
            <li>Facilidade na consulta, com uma interface amigável que possibilita a utilização por parte de profissionais sem grande experiência em tecnologia.</li>
            <li>Organização centralizada dos dados, facilitando o acesso a informações detalhadas sobre cada docente, suas responsabilidades e turnos de trabalho.</li>
            <li>Segurança e confiabilidade na manipulação dos dados, com controles que garantem a integridade das informações.</li>
        </ul>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
