import React, { useState } from 'react';
import axios from 'axios'; // Certifique-se de que o axios está instalado: npm install axios

const UserForm = ({ onAstrologyDataCalculated }) => { // Recebe setAstrologyResult como prop
    const [userData, setUserData] = useState({
        nome: '',
        dataNascimento: '',
        horaNascimento: '',
        localNascimento: '',
    });

    // Função para lidar com mudanças nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();  // impede o recarregamento da pagina
        console.log('Dados do usuário:', userData);

        // TODO: Enviar os dados para o backend (API)
        try {
            // Substitua pela URL correta do seu backend
            const response = await axios.post('http://localhost:3001/calculate-astrology', userData);
            alert('Cálculo astrológico realizado com sucesso!');
            if (typeof onAstrologyDataCalculated === 'function') {
                onAstrologyDataCalculated(response.data);
            } else {
                console.log("onAstrologyDataCalculated é uma função");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            alert('Ocorreu um erro ao calcular sua mandala.');
        }
    };

    return (
        <div className="user-form-container">
            <h2>Preencha seus dados para gerar a sua mandala astral</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={userData.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        value={userData.dataNascimento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="horaNascimento">Hora de Nascimento:</label>
                    <input
                        type="time"
                        id="horaNascimento"
                        name="horaNascimento"
                        value={userData.horaNascimento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="localNascimento">Local de Nascimento:</label>
                    <input
                        type="text"
                        id="localNascimento"
                        name="localNascimento"
                        value={userData.localNascimento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Gerar minha Mandala</button>
            </form>
        </div>
    );
};

export default UserForm;