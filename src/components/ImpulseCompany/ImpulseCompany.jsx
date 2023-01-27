import React from "react";
import './ImpulseCompany.css'
import { useNavigate } from "react-router-dom";

function ImpulseCompany() {

    const navigate = useNavigate()
    const voltar = () => {
        navigate('/')
    }

    return (
      <>
        <div id="tudo">
          <div class="voltar">
            <button onClick={voltar}>Voltar</button>
          </div>
          <div id="conteudo">
            <div id="projeto">
              <h1>Informações importantes</h1>

              <p>
                <b>Todo conteúdo do site é fictício.</b>
              </p>
              <br />

              <p>
                Projeto desenvolvido durante o curso de{" "}
                <span class="destaqueDevs">WebDev Full-Stack</span>, projetado
                pela <span class="destaqueDevs">Resilia Educação</span>, para o
                edital{" "}
                <span class="destaqueDevs">"Programadores Cariocas"</span>.
                <br />
                <span class="destaqueDevs">"Programadores Cariocas"</span> é um
                programa desenvolvido pela{" "}
                <span class="destaqueDevs">Prefeitura do Rio de Janeiro</span>{" "}
                em parceria com o <span class="destaqueDevs">Senac RJ</span>,
                com a missão de formar mais de 1000 jovens para atuar na àrea de
                tecnologia e ingressarem com qualificação no mercado de
                trabalho.
              </p>
            </div>

            <div id="desenvolvedores">
              <h1>Desenvolvedores</h1>

              <div id="todos">
                <div class="integrante">
                  <img
                    class="foto"
                    src="../../../../imgs/devs/amandaCardoso.jpg"
                  />
                  <div class="integranteInfos">
                    <h3>Amanda Cardoso</h3>
                    <p class="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/acardioli/">
                      <img
                        class="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/Acardioli9">
                      <img
                        class="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div class="integrante">
                  <img
                    class="foto"
                    src="../../../../imgs/devs/jordanLima.jpeg"
                  />
                  <div class="integranteInfos">
                    <h3>Jordan Lima</h3>
                    <p class="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/jordan-lima-03787a248/">
                      <img
                        class="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/jordanlima1">
                      <img
                        class="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div class="integrante">
                  <img
                    class="foto"
                    src="../../../../imgs/devs/julianaJesus.jpg"
                  />
                  <div class="integranteInfos">
                    <h3>Juliana Jesus</h3>
                    <p class="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/julianajesus93/">
                      <img
                        class="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/JulianaJesus93">
                      <img
                        class="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div class="integrante">
                  <img
                    class="foto"
                    src="../../../../imgs/devs/palloneSilva.jpg"
                  />
                  <div class="integranteInfos">
                    <h3>Pallone Silva</h3>
                    <p class="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/pallone-silva/">
                      <img
                        class="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/Pallone16">
                      <img
                        class="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>

                <div class="integrante">
                  <img
                    class="foto"
                    src="../../../../imgs/devs/luanCarlos.jpg"
                  />
                  <div class="integranteInfos">
                    <h3>Luan Carlos</h3>
                    <p class="funcao">
                      <i>Integrante</i>
                    </p>
                    <a href="https://www.linkedin.com/in/luan-carlos-8395051ba/">
                      <img
                        class="link"
                        src="../../../../imgs/icons/linkedIn.png"
                      />
                    </a>
                    <a href="https://github.com/LuanCarlozZ">
                      <img
                        class="link"
                        src="../../../../imgs/icons/github.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* todos> */}
            </div>
            {/* desenvolvedores */}
          </div>{" "}
          {/* fim conteudo */}
        </div>{" "}
        {/* fim tudo */}
      </>
    );
}

export default ImpulseCompany