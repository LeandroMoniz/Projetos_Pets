import { useState, useContext } from 'react'

import Input from '../../form/Input'
import { Link } from 'react-router-dom'


import styles from '../../form/Form.module.css'

/* contexts */
import { Context } from '../../../context/UserContext'

function Register() {
    const [user, setUser] = useState({})
    //const { register } = useContext(Context)


    //function handleChange(e) {
       // setUser({ ...user, [e.target.name]: e.target.value })
    //}

   // function handleSubmit(e) {
      //  e.preventDefault()
        //enviar o usuario para o banco 
        //register(user)
    }

    return (
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite o seu nome"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite o seu telefone"
                    handleOnChange={handleChange}
                />
                <Input
                    text="E-mail"
                    type="email"
                    name="email"
                    placeholder="Digite o seu e-mail"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite o seu senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="confimação de Senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="confirme a seu senha"
                    handleOnChange={handleChange}
                />
                <input type="submit" valeu="Cadastrar" />
            </form>
            <p>Já tem conta? <Link to="/login">Clique aqui</Link> </p>
        </section>
    )
}

export default Register