import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './InteractiveRoom.scss'

const InteractiveRoom = () => {
  const [loading, setLoading] = useState(true);
  const [spline, setSpline] = useState();

  const onLoad = (spline) => {
    setLoading(false);

    spline.setZoom(0.3);
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