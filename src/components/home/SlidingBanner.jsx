import dev_back1 from '../../assets/images/dev_back1.jpg'
import dev_back from '../../assets/images/dev_back.jpg'
import dev_back2 from '../../assets/images/dev_back2.PNG';
import home from './Home.module.css'
import { useEffect, useState } from 'react';

const SlidingBanner = () => {
    const [image, setImage] = useState(0);
    const imgBanner = [dev_back1, dev_back, dev_back2];
    
    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prev) => (prev === imgBanner.length - 1 ? 0 : prev + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return(
        
        <div className={home.slider_container}>
        <div
            className={home.banner_section}
            style={{ transform: `translateX(-${image * 33.33}%)` }}
        >
                        {imgBanner.map((img, key) => (
                            <img key={key} src={img} className={home.banner_img} />
                        ))}
                    
                </div>
            </div>
    );
}

export default SlidingBanner