import style from './tips.module.css'
import { ITips } from '../../types'

export const Tips = ({ 
    iconTips,
    numberTips, 
    textTips 
}: ITips) => {
    return (
        <div className={style.tips__main}>
            <div className={style['tips__main--icon']}>
                <img 
                    alt='img'
                    width={40}
                    src={iconTips} 
                />
            </div>
            <div className={style['tips__main--text']}>
                <h3>Consejo {numberTips}:</h3>
                <p>{textTips}</p>
            </div>
        </div>
    )
}