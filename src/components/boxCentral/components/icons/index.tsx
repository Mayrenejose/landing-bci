import style from './icons.module.css'
import { IListIcons } from '../../../../types'

export const Icons = ({image, subtitle}: IListIcons) => {
    return (
        <div className={style.icons__main} >
            <div className={style['icons__main--iconText']}>
                <img 
                    src={image}
                    alt='pig' 
                    width={100}
                />
                <p className={style['icons__main--paragraph']}>{subtitle}</p>
            </div>
        </div>
    )
}