const listaHabilidades = [
    {
        'tipo': 'Softwares',
        'habilidades': [
            'Excel (Avançado)',
            'PowerBI (Intermediário)',
            'Google DataStudio (Intermediário)'
        ]
    },
    {
        'tipo': 'Linguagens',
        'habilidades': [
            'HTML (Avançado)',
            'CSS (Flexbox/ Grid/ SASS/ Bootstrap/ Tailwind)',
            'JavaScript (Intermediário)',
            'Python (Intermediário)'
        ]
    },
    {   'tipo': 'Frameworks',
        'habilidades' : [
            'React (Básico)', 
            'Django (Básico)'
        ]
    }
]

function ListaHabilitidades({habilidade}) {
    return (
        <ul className="bg-tertiary p-2 m-3 rounded-xl md:flex md:flex-col md:flex-1">
            <h4 className="font-bold text-primary text-center">{habilidade.tipo}</h4>
            {habilidade.habilidades.map((habilidade, index) => {
                return (
                    <li key={index} className="my-2 mx-4">{habilidade}</li>
                )
            })}
        </ul>
    )
}

export { listaHabilidades, ListaHabilitidades }