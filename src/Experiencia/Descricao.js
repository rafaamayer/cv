const descricoes = [
    {
        id: 1,
        titulo: 'Estagiário de Inteligência de Mercado',
        empresa: 'Associação Empresarial de Florianópolis (02/21 - 07/21)',
        href: '',
        descricao: '', //Optional
        atividades: [
            "Análise de dados e desenvolvimento de relatórios de apoio comercial e estratégico para tomada de decisão dos gestores e do time de vendas",
            "Desenvolvimento de pesquisa de market share das operadoras de plano de saúde no Brasil, em Santa Catarina e na Grande Florianópolis",
            "Desenvolvimento e análise de parcerias e/ou potencial parceiros por meio de reuniões e pareceres de mercado na análise da solução",
            "Desenvolvimento de projeto de observatório via Google DataStudio, em que os painéis desenvolvidos eram: econômicos, financeiros, das filiais, de mercado e de gestão."
        ]
    },
    {
        id: 2,
        titulo: 'Estagiário de Desenvolvimento',
        empresa: 'BIX Tecnologia (07/21 - Atual)',
        href: '',
        descricao: '', //Optional
        atividades: [
            "Alocado no cliente DeuCrédito, fintech da J&A Holding tendo como objetivo a digitalização da operação, ofertando diversas modalidades de crédito de maneira totalmente digital.",
            "Web app SSR. Stack: AWS, Git, Postgres, Django, JQuery e Bootstrap.",
            "Trabalho orientado por feature branch, focado em aprimoramento de UI com implementação de funcionalidades no front-end e algumas em backend."
        ]
    },
    {
        id: 3,
        titulo: 'Diretor de Tecnologia e Inovação (Voluntariado)',
        empresa: 'Einstein Floripa (09/19 - 12/20)',
        href: '',
        descricao: 'Cursinho popular voltado a estudantes de baixa renda da grande Florianópolis, ofertado de maneira totalmente gratuita e realizado por estudantes universitários.', //Optional
        atividades: [
            "Realização de atividades de gestão como dinâmica 1:1, estabelecimento de OKR, definição de comitês estratégicos de modo a obter um relatório final sobre a gestão de conhecimento do cursinho.",
            "Desenvolvimento do departamento com mapeamento de processos, definição de metas, alinhamento estratégico, definição de seleção, treinamento de membros, coleta e análise de dados."
        ]
    },
    {
        id: 4,
        titulo: 'Jovem Aprendiz - Itaú',
        empresa: 'Itaú Unibanco (02/20 - 11/20)',
        href: '',
        descricao: '', //Optional
        atividades: [
            "Prospecção de clientes in loco",
            "Conversão de leads em potenciais clientes",
            " Oferta de produtos financeiros"
        ]
    },
    {
        id: 5,
        titulo: 'Estágio Financeiro',
        empresa: 'Grupo Nomura (11/19 - 01/20)',
        href: '',
        descricao: 'Empresa multi-franqueada de varejo na linha de calçados e vestuários contendo no portfólio empresas como: Arezzo, Schutz e Adidas.', //Optional
        atividades: [
            "Recebimento, verificação e programação de pagamentos (D-2) de todas as razões sociais administradas pela empresa (matriz e filiais).",
            "Desenvolvimento de planilha automatizada para análise de custos utilizando gráficos e VBA para busca e importação de arquivos."
        ]
    }
]

//TODO ==> Dinamic render class in description
function Descricao({ descricao }) {
    return (
        <div className="text-primary">
            <section>
                <h2 className="text-center font-extrabold mb-3 text-xl">{descricao.titulo}</h2>
                <h3 className="text-center font-bold my-2 text-lg">{descricao.empresa}</h3>
                <p className={`my-3 text-justify p-3 m-1 rounded-md ${descricao.descricao === '' ? 'hidden': 'bg-tertiary'}`}>{descricao.descricao}</p> 
                <ul>
                    {descricao.atividades.map((descricao, index) => {
                        return (
                            <li key={index} className="my-5 text-justify bg-tertiary p-3 rounded-md">{descricao}</li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}

export { descricoes, Descricao }