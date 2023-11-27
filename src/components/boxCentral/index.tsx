import { BoxIcons } from './components/boxIcons'
import { BoxPhoneMono } from './components/boxPhoneMono'
import style from './boxCentral.module.css'

export const BoxCentral = () => {
    return (
        <div className={style.boxCentral__main}>
            <div className={style['boxCentral__main--icons']}>
                <BoxIcons />
            </div>
            <div className={style['boxCentral__main--imgPhoneMono']}>
                <BoxPhoneMono />
            </div>
        </div>
    )
}