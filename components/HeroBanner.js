import { urlFor } from '../lib/imageUrlBuilder';

const HeroBanner = ({ heroBannerInfo }) => {
  return (
    <div className='container'>
      <div className='hero-banner'>
        <div className='left-content'>
          <p className='mid-text'>{heroBannerInfo.midText}</p>
          <h3 className='large-text-2'>{heroBannerInfo.largeText2}</h3>
          <h1 className='large-text-1'>{heroBannerInfo.largeText1}</h1>
          <a href='#products_list' className='btn'>
            {heroBannerInfo.buttonText}
          </a>
          <div className='img'>
            <img src={urlFor(heroBannerInfo.image).url()} alt='' />
          </div>
        </div>
        <div className='right-content'>
          <p>{heroBannerInfo.smallText}</p>
          <p>{heroBannerInfo.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
