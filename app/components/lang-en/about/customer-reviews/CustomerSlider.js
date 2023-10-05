import { useState, useEffect } from 'react';
import useCheckDevice from '../../../../custom-hooks/CheckDevice';
import AutoplaySlider from '../../../ui/AutoplaySlider';

const CustomersSlider = (props) => {
  const deviceWidth = useCheckDevice();
  const [paddingTop, setPaddingTop] = useState('4rem');

  useEffect(() => {
    let paddingValue = deviceWidth >= 1024 ? '6rem' : '4rem'
    setPaddingTop(paddingValue);
  }, [deviceWidth]);

  return (
    <AutoplaySlider swiperClasses="mySwiper overflow-hidden pt-16 pb-10 text-center sm:text-lg lg:pt-24" sliderPadding={`${paddingTop} 0 2.5rem 0`} >
      {props.children}
    </AutoplaySlider>
  )
}

export default CustomersSlider;
