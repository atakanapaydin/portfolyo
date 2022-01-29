import "./portfolyoList.scss";

export default function PortfolyoList({id, title, active, setSelected}) {
  return (
    <li className={active ? "portfolyoList active": "portfolyoList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
