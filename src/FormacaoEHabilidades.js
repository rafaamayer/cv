export default function FormacaoEHabilidade(){
    const listHabilities = [
        {
            'Softwares': [
                'Excel (Avançado)',
                'PowerBI (Intermediário)',
                'Google DataStudio (Intermediário)'
            ]
        },
        {
            'Linguagens': [
                'HTML (Avançado)',
                'CSS (Flexbox/ Grid/ SASS/ Bootstrap/ Tailwind)',
                'JavaScript (Intermediário)',
                'Python (Intermediário)'
            ]
        },
        {
            'Frameworks': ['React (Básico)', 'Django (Básico)']
        }
    ]

    const renderHabilities = listHabilities.forEach((el) => {
        console.log(Object.keys(el))
        console.log(el[0])
    })
    


    return (
        <div className="bg-secondary p-8 rounded-3xl mt-3 text-primary">
            <h1>Formação e Habilidades</h1>
            <h2>Universidade Federal de Santa Catarina</h2>
            <br/>
            <h3>Economia (2019 -2023)</h3>
            <ul>
                <label>Softwares</label>
                <li>Excel (Avançado)</li>
                <li>PowerBI (Intermediário)</li>
                <li>Google DataStudio (Intermediário)</li>

                <label>Linguagens</label>
                <li>HTML (Avançado)</li>
                <li>CSS (Flexbox/ Grid/ SASS/ Bootstrap/ Tailwind)</li>
                <li>JavaScript (Intermediário)</li>
                <li>Python (Intermediário)</li>

                <label>Frameworks</label>
                <li>React (Básico)</li>
                <li>Django (Básico)</li>
            </ul>
        </div>

    )
}