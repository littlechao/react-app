import React from 'react'

import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Imglist extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      loop:true
    })
  }
  render () {
    var swiperList = '';
    var style = {
      height: '200px',
      lineHeight: '200px',
      textAlign: 'center'
    };
    return (<div>
      <div className="swiper-container" style={style}>
        <div className="swiper-wrapper">
          {this.props.arr.map((item,index) => {
            return (<div className="swiper-slide" key={index}>
              <img  src={item} alt=""/>
            </div>)
          })}
        </div>
      </div>
    </div>)
  }
}

export default Imglist