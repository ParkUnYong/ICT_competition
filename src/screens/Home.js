import React from 'react'
import ImageUploade from '../components/Imageupload/ImageUploade'
import { Container } from '../components/Styles/Container/Container.style'
import { Header, MainHader } from '../components/Styles/Header/Header.styled'
import { Content, ContentH2, HeaderContainer, HeaderImage,TitleTmi,Arrangement,Arrangement2 } from '../components/Styles/Header/LectureHeader.style'
import '../App.css' 
import VideoInput from '../components/video/VideoInput'
import { Footer } from '../components/Footer/Footer';
import header from '../assets/images/image3.jpg'
import Videoload from '../components/video/Videoload'
import Imageresult from '../components/Imageupload/Imageresult'
import result from '../assets/images/blending.png'
import result2 from '../assets/images/enhance.png'
import result3 from '../assets/images/makeup.png'
import result4 from '../assets/images/remover.png'
import result5 from '../assets/video/ani.mp4'

const Home = () => {
  return (
    <div>
    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>내가 만드는 나만의 얼굴</h1>
            </div>
            <h4>Face Blending</h4>
            <div className='arrangement'>
                <div className='andigh'>
                    <ImageUploade/>
                </div>
                <div className='andigh2'>
                 {/* <Videoload/> */}
                 <Imageresult result={result}/>
                </div>
            </div>
            </MainHader>
        </Header>
    </Container>

    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>선명한 화질을 원한다면</h1>
            </div>
            <h4>Face Enhance</h4>
            <div className='arrangement'>
                <div className='andigh'>
                    <ImageUploade/>
                </div>
                <div className='andigh2'>
                 {/* <Videoload/> */}
                 <Imageresult result={result2}/>
                </div>
            </div>
            </MainHader>
        </Header>
    </Container>

    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>메이크업도 자유자재로!</h1>
            </div>
            <h4>Makeup Transfer</h4>
            <div className='arrangement'>
                <div className='andigh3'>
                    <ImageUploade/>
                </div>
                <div className='andigh4'>
                    <ImageUploade/>
                </div>
                <div className='andigh5'>
                 {/* <Videoload/> */}
                 <Imageresult result={result3}/>
                </div>
            </div>
            </MainHader>
        </Header>
    </Container>

    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>생동감 있는 연출</h1>
            </div>
            <h4>Face Animator</h4>
            <div className='arrangement'>
                <div className='andigh3'>
                    <ImageUploade/>
                </div>
                <div className='andigh4'>
                    <VideoInput width={576} height={324}/>
                </div>
                <div className='andigh5'>
                    <Videoload result={result5}/>
                </div>
            </div>
            </MainHader>
        </Header>
    </Container>
    <HeaderImage src={header}/>
    <Footer/>
    </div>
  )
}

export default Home