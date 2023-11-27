import { IButtons } from "../../../../types"
import style from './buttons.module.css'

export const Buttons = ({title, colors}: IButtons) => {
    return (
        <div className={style.buttons__main }>
            <button className={`${style['buttons__main--button']} ${style[colors]}`}>
                { title === 'Recomendaciones' ? (
                    <span>Recomendaciones <br /> Vacaciones</span>
                ) :
                    <span>{title}</span>
                }
            </button>
        </div>
    )
} 