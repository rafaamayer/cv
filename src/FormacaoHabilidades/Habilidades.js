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
        <ul>
            <label>{habilidade.tipo}</label>

            {habilidade.habilidades.map((habilidade, index) => {
                return (
                    <li key={index}>{habilidade}</li>
                )
            })}
        </ul>
    )
}

export { listaHabilidades, ListaHabilitidades }