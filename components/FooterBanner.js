import { urlFor } from '../lib/imageUrlBuilder';

const FooterBanner = ({ info }) => {
  return (
    <div className='container'>
      <div className='footer-banner'>
        <div className='left'>
          <p className='offer'>{info.discount}</p>
          <h1>{info.largeText1}</h1>
          <p className='offer-time'>{info.saleTime}</p>
        </div>
        <div className='mid'>
          <img src={urlFor(info.image).url()} alt='' />
        </div>
        <div className='right'>
          <p className='small-text'>{info.smallText}</p>
          <h2>{info.largeText2}</h2>
          <p className='desc'>{info.desc}</p>
          <a href='#products_list' className='btn'>
            {info.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
