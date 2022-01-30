import {useState, useEffect} from 'react';
import './portfolyo.scss';
import PortfolyoList from '../portfolyoList/portfolyoList';
import {webPortfolio, lastPortfolio} from '../../data';

export default function Portfolyo() {
  const [selected, setSelected] = useState('last');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'last',
      title: 'Son Uygulamalar',
    },
    {
      id: 'web',
      title: 'Tüm Web Uygulamaları',
    }
  ];

  useEffect(() => {

    switch(selected){
      case 'last':
        setData(lastPortfolio);
        break;

        case 'web':
        setData(webPortfolio);
        break;
        
        default:
        setData(lastPortfolio);
    }

  }, [selected]);

  return (
    <div className="portfolyo" id="portfolyo">
      <h1>Portfolyo</h1>
      <ul>
        {list.map(item => (
          <PortfolyoList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        <div className="item">
          <img src={d.img} alt="" />
          <h3>{d.title}</h3>
        </div>
        ))}
      </div>
    </div>
  );
}
