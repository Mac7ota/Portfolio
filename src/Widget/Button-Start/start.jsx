import './start.css';

function Button() {
  return (
    <button className='Btn_Start'><img src={process.env.PUBLIC_URL + '/Img/IconeButtonWindows.png'} alt="IconeButton"/></button>
  );
}

export default Button;