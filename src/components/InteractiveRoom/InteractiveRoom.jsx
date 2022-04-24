import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive'
import './InteractiveRoom.scss'

const InteractiveRoom = () => {
  const [loading, setLoading] = useState(true);
  const [spline, setSpline] = useState();

  const isBigScreen = useMediaQuery({ query: '(min-width: 2000px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 900px)' });
  const isMediaTablet = useMediaQuery({ query: '(max-width: 650px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })

  const onLoad = (spline) => {
    setLoading(false);

    if(isTablet){
      spline.setZoom(0.9);
    }
    if(isMediaTablet){
      spline.setZoom(0.7);
    }
    if(isMobile){
      spline.setZoom(0.8);
    }
  }

  return (
    <div className='app__room'>
      {loading && (
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }} 
          className="app__room-loading"
        >
         <img src={images.loading} alt="loading" />
        </motion.div>
      )}
	    <Spline 
        scene="https://prod.spline.design/3fnKuSynjj5etEPg/scene.spline"
        onLoad={onLoad} 
      />
    </div>
  );
}

export default InteractiveRoom