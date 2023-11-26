import { IImgMonos } from '../../types'

export const ImagesMonos = ({image, widthMono}: IImgMonos) => {
    return (
        <div>
            <img 
                alt='mono' 
                src={image} 
                width={widthMono}
            />
        </div>
    )
}