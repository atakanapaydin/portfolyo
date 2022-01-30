import "./menu.scss";

export default function Menu({menuOpen, setmenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setmenuOpen(false)}><a href="#intro">Giriş</a></li>
            <li onClick={()=>setmenuOpen(false)}><a href="#portfolyo">Portfolyo</a></li>
            <li onClick={()=>setmenuOpen(false)}><a href="#work">İşlerim</a></li>
            <li onClick={()=>setmenuOpen(false)}><a href="#contact">İletişim</a></li>
        </ul>
    </div>
  )
}
