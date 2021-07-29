import React from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa1 extends React.Component {
    render() {
        return (
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <PerguntaAberta
                    pergunta={"1. Qual é o seu nome?"}
                />
                <PerguntaAberta
                    pergunta={"2. Qual é a sua idade?"}
                />
                <PerguntaAberta
                    pergunta={"3. Qual é o seu e-mail?"}
                />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value="Ensino Médio Incompleto">Ensino Médio Incompleto</option>
                    <option value="Ensino Médio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                </select>
            </div>
        )
    }
}

export default Etapa1