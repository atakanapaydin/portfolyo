import {useState, useEffect} from 'react';
import './portfolyo.scss';
import PortfolyoList from '../portfolyoList/portfolyoList';
import {webPortfolio, featuredPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data';

export default function Portfolyo() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'web',
      title: 'Web',
    },
    {
      id: 'mobile',
      title: 'Mobile App',
    },
    {
      id: 'graphic',
      title: 'Graphic Design',
    },
    {
      id: 'content',
      title: 'Content',
    },
  ];

  useEffect(() => {

    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;

        case 'web':
        setData(webPortfolio);
        break;
        
        case 'mobile':
        setData(mobilePortfolio);
        break;
        
        case 'design':
        setData(designPortfolio);
        break;
        
        case 'content':
        setData(contentPortfolio);
        break;
        default:
        setData(featuredPortfolio);
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
