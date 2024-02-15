import './navagador.css';

function navegador() {
    return (
        <button className='Btn_Navegador'><img src={process.env.PUBLIC_URL + '/Img/NavegadorIcone.png'} alt="IconeButton"/></button>
    )
}

export default navegador;