import Produto from "./Produto";


export const Trabalhamos = () => {
    return (

        <section className="flex flex-col justify-center items-center py-24">
            
            <div className="flex flex-wrap gap-6 justify-center mt-6">
                <Produto  nameProp="A Base do Sucesso do Projeto" descriptionProp="O planejamento define objetivos, estratégias e recursos, antecipando desafios e otimizando esforços. Ele alinha o projeto aos objetivos estratégicos, reduzindo riscos e garantindo execução eficiente." linkProp={`planejamento`} />
                <Produto nameProp="Transformando Ideias em Realidade" descriptionProp="A seção de Criação é onde as ideias ganham vida. A equipe criativa desenvolve soluções inovadoras, transformando conceitos do planejamento em designs, layouts e conteúdos que agregam valor ao projeto." linkProp={`criacao`} />
                <Produto  nameProp="Transformando ideias em uma experiência visual impactante" descriptionProp="A etapa de design é crucial para criar uma experiência visual envolvente e funcional. Nela, as ideias se transformam em layouts, cores, tipografia e elementos interativos, influenciando tanto a estética quanto a usabilidade e a experiência do usuário." linkProp={`design`} />
                <Produto  nameProp="Desenvolvimento: Um dos pilares para o sucesso" descriptionProp="Nesta fase, as ideias se transformam em soluções funcionais de alta qualidade, com a equipe de desenvolvimento criando uma experiência interativa. Utilizando tecnologias avançadas e metodologias ágeis, garantimos um produto final robusto e eficiente." linkProp={`desenvolvimento`} />
                <Produto  nameProp="A importância da etapa de solução em um projeto" descriptionProp="Neste processo, propõem-se soluções para atender às necessidades dos usuários e clientes, envolvendo análise de requisitos, design, prototipagem, desenvolvimento iterativo e entrega final. Essa abordagem garante soluções eficientes e alinhadas às expectativas de todos os envolvidos." linkProp={`solucao`} />
                <Produto nameProp="Decisões estratégicas baseadas em dados precisos e insights" descriptionProp="A etapa de Inteligência de Negócios coleta e analisa dados para apoiar decisões estratégicas, extraindo insights valiosos e proporcionando uma compreensão aprofundada do desempenho e do ambiente de negócios." linkProp={`inteligencia-negocio`} />
            </div>
        </section>

    )
}
