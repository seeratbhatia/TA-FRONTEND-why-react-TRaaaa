import './stylesheet/index.css';
import colors from './colorsData';

function Colors(props) {
  let keys = Object.keys(colors);
  console.log(keys);
  return (
    <>
      {keys.map((key) => (
        <Color key={key} title={key} data={colors[key]} />
      ))}
    </>
  );
}

function Color(props) {
  return (
    <>
      <div className='jsutify-content'>
        <div>
          <h4>{props.title}</h4>
          <h5>`Colors.{props.title}`</h5>
        </div>
        <ul className='bigBox'>
          {props.data.map((hexcode, i) => (
            <li className='box'>
              <div className='colorBox' style={{ background: hexcode }}></div>
              <div className='flex'>
                <span>{i === 0 ? 50 : i * 100}</span>
                <span>{hexcode}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Colors;