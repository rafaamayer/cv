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

export default function ListaHabilitidades() {
    return (
        <ul>
            {listaHabilidades.map((habilidades) => {
                return (
                    <div>
                        <label>{habilidades.tipo}</label>

                        {habilidades.habilidades.map((habilidade, index) => {
                            return (
                                <li key={index}>{habilidade}</li>
                            )
                        })}

                    </div>
                )
            })}
        </ul>
    )
}
