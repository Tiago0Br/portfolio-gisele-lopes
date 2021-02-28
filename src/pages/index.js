import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import Experience from "../components/Experience"
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Atuar na área Ambiental.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experiência</h2>

          <Experience occupation="Estagiária" company="Implantar Soluções Ambientais"
          period="Março 2020 - Janeiro 2021">
            Atividades: Relatório de atividades, planejamento e organização de documentos com fotos.
          </Experience>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Assistente administrativo</h3>
              <div className="subheading mb-3">Alcalá e Vieira Lava Jato</div>
              <p>
              Atividades: Emissão de notas ficais, boletos, organização dos documentos da empresa, organização
              das atividades financeira da empresa e contas a pagar.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Maio 2019 - Março 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Estagiária em facilities</h3>
              <div className="subheading mb-3">Bosch Campinas</div>
              <p>
              Atividades: Atua no suporte do planejamento das atividades de limpeza e jardinagem, bem como na
              manutenção da planta; acompanhamento dos laudos semestrais e processos de compensação
              ambiental; acompanhamento e organização de itens de estoque referente a limpeza; interface com
              cientes, usuários e fornecedores.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2017 - Janeiro 2019</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Educação</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">PUC - Campinas</h3>
              <div className="subheading mb-3">Bacharelado</div>
              <div>Engenharia Ambiental e Sanitária</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janeiro 2017 - Dezembro 2021</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Habilidades</h2>

          {/* <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div> */}
          {/* <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-less"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-gulp"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-grunt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
          </ul> */}

          <div className="subheading mb-3">Habilidades</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Inglês básico
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Pacote Office nível intermediário
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              AutoCad básico
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Rotinas administrativas
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Conhecimentos na plataforma SAP em compras, ordem de serviço e consulta a centro de custo
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Conhecimentos em compra pela plataforma “Bonaparte"
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Conhecimento nas funções do Excel (planilhas e cálculos: PROCV, CONCATENAR, SE e gráficos).
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interesses</h2>
          <p>
            Estou em busca de novas oportunidades na área de Engenharia Ambiental.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="courses"
      >
        <div className="w-100">
          <h2 className="mb-5">Cursos</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Gerenciamento de projetos
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Auditoria e perícia ambiental
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              AutoCad básico
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Rotinas administrativas
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
