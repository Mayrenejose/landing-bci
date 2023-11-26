import style from './boxBlue.module.css'
import card from '../../imgs/card.png'
import camera from '../../imgs/camera.png'
import speak from '../../imgs/speak.png'
import eye from '../../imgs/eye.png'
import { Tips } from '../tips/Tips'

export const InformationBox = () => {
    const tipsOne = 'Realiza directamente tus transacciones o mantén tu tarjeta a la vista todo el tiempo.'
    const tipsTwo = 'Cuando uses cajeros automáticos cubre con tu mano la contraseña.'
    const tipsThree = 'Nunca permitas que fotografíen tus tarjetas.'
    const tipsFor = 'No des nunca tu clave en voz alta.'

    return (
        <div className={style.boxInformation}>
            <div className={style.boxInformation__boxBlue}>
                <h2 className={style['boxInformation__boxBlue--title']}>
                    ¡Estas vacaciones cuídate del Skimming o Clonación de Tarjetas!
                </h2>

                <div className={style.boxInformation__boxTips}>
                    <Tips
                        iconTips={card} 
                        numberTips={1} 
                        textTips={tipsOne}
                    />
                    <Tips 
                        iconTips={eye}
                        numberTips={2} 
                        textTips={tipsTwo}
                    />
                    <Tips 
                        iconTips={camera}
                        numberTips={3} 
                        textTips={tipsThree}
                    />
                    <Tips 
                        iconTips={speak}
                        numberTips={4} 
                        textTips={tipsFor}
                    />
                </div>
            </div>
        </div>
    )
}