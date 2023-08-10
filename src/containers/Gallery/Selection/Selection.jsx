import './Selection.css'
import { RViewer, RViewerTrigger } from 'react-viewerjs'

const images = [
    'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2111892/pexels-photo-2111892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1031593/pexels-photo-1031593.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1436190/pexels-photo-1436190.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2091760/pexels-photo-2091760.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3637083/pexels-photo-3637083.jpeg?auto=compress&cs=tinysrgb&w=1200',
]

const Selection = () => {
  return (
    <RViewer imageUrls={images}>
      <div className='app__gallery-selection'>
          {images.map((imgUrl, index) => (
            <div className="app__gallery-selection_card" key={'images-' + index}>
              <RViewerTrigger index={index}>
                  <img src={imgUrl} alt={'building' + index} />
              </RViewerTrigger>
            </div>
          ))}
      </div>
    </RViewer>
  )
}

export default Selection