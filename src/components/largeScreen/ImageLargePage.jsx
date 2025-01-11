import '../../styles/image_large_page.css'
import Phone from '../../assets/phone.svg'

function ImageLargePage() {
    return (
        <article id='article_image_large_page' style={{ flex: '1'}}>
            <img className='image' src={Phone}/>
        </article>
        
    )
}

export default ImageLargePage