const Button = (props) => {

    function mensagem() {

        alert('A label desse botão é Baixar CV')
    }

    return <button onClick={mensagem}>{props.label}</button>
}

export default Button