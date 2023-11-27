import style from './boxIcons.module.css'
import { Icons } from '../icons'
import iconsData  from '../../../../utils'

export const BoxIcons = () => {    
    return (
        <div className={style.boxIcons__main}>
            <h2 className={style['boxIcons__main--h2']}>
                <span className={style['red__phrase']}>Descarga la App BCI Móvil </span>
                y vive <br /> la experiencia de llevar tu banco a todas partes.
            </h2>

            <div className={style['boxIcons__main--icon']}>
            {iconsData.map((icon, index) => (
                <Icons 
                    image={icon.image} 
                    key={index} 
                    subtitle={icon.subtitle} 
                />
            ))}
            </div>
        </div>
    )
}