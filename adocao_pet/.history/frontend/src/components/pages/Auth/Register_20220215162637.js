import Input from '../../form/Input'

function Register() {

    function handleChange(e) {

    }

    return (
        <section>
            <h1>Register</h1>
            <form>
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
        </section>
    )
}

export default Register