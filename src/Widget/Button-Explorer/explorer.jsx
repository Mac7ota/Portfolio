import './explorer.css';

function explorer() {
  return (
    <button className='Btn_Explorer'><img src={process.env.PUBLIC_URL + '/Img/ExplorerIcone.png'} alt="IconeButton"/></button>
  );
}

export default explorer;