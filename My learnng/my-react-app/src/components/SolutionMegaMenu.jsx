import { ExternalLink } from "lucide-react"
import { iconMap } from "../data/navbarData"
import "./megaMenu.css"
export default function SolutionMegaMenu({sections}){
    if (!sections || sections.length === 0) {
    return null;
    }
    return(
        <>
        <div className="mega-root">
            <div className="mega-inner">
{sections.map(section=>(
    <div key={section.title} className="mega-section">
        <h3 className="mega-section-title">{section.title}</h3>
<ul className="mega-items-list"> {section.items.map(item=>{
    const Icon=iconMap[item.icon]
return(
    <li key={item.label} className="mega-item">
<a href={item.url} className="mega-item-link"  target={item.external?"_blank":"_self"} rel={item.external?"noreferrer":undefined}>
{Icon &&  (
    <span className="mega-icon-wrap">
        <Icon size={18}/>
        </span>
)  }
<span className="mega-item-label">{item.label}</span>
{item.external &&(
    <span className="mega-external-icon"> <ExternalLink size={14}/> </span>
        )}

</a>
    </li>
)
})}

</ul>
    </div>
))}
            </div>
        </div>
        </>
    )
}