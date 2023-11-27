import { Buttons } from './components/buttons'
import layerTwo from '../../imgs/layer2.png'
import layerThree from '../../imgs/layer3.png'
import { ImagesMonos } from './components/imagesMonos'
import title from '../../imgs/title.png'
import style from './boxBtn.module.css'

export const BoxButtons = () => {
    const titleOne = '¿Qué puedo hacer?'
    const titleTwo = 'Recomendaciones'
    const titleThree = 'Beneficios'

    return (
        <div className={style.boxBtn__main}>
            <div className={style['boxBtn__main--monos']}>
                <ImagesMonos image={layerTwo} widthMono={180}/>
                <div>
                    <ImagesMonos image={title} widthMono={400}/>
                </div>
                <ImagesMonos image={layerThree} widthMono={230}/>
            </div>

            <div className={style['boxBtn__main--btns']}>
                <Buttons title={titleOne} colors='button-red'/>
                <Buttons title={titleTwo} colors='button-blue'/>
                <Buttons title={titleThree} colors='button-green'/>
            </div>
        </div>
    )
}