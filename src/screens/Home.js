import React from 'react'
import ImageUploade from '../components/Imageupload/ImageUploade'
import { Container } from '../components/Styles/Container/Container.style'
import { Header, MainHader } from '../components/Styles/Header/Header.styled'
import { Content, ContentH2, HeaderContainer, HeaderImage,TitleTmi,Arrangement,Arrangement2 } from '../components/Styles/Header/LectureHeader.style'
import '../App.css' 
import VideoInput from '../components/video/VideoInput'
import { Footer } from '../components/Footer/Footer';
import header from '../assets/images/image5.png'
import Videoload from '../components/video/Videoload'
import Imageresult from '../components/Imageupload/Imageresult'
import result from '../assets/images/face1.PNG'
import result3 from '../assets/video/output2.mp4'
import result5 from '../assets/video/output.mp4'
import Text from '../components/Text'

const Home = () => {
  return (
    <div>
    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>증언으로 몽타주를 만들자!</h1>
            </div>
            <h4>Text to Face</h4>
            <div className='arrangement'>
                <div className='andigh'>
                    <Text></Text>
                </div>
                <div className='andigh2'>
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
                <h1>AI 수배서</h1>
            </div>
            <h4>움직이는 AI 수배서</h4>
            <div className='arrangement'>
                <div className='andigh6'>
                    <ImageUploade/>
                </div>
                <div className='andigh2'>
                 <Videoload result={result5}/>
                </div>
            </div>
            </MainHader>
        </Header>
    </Container>

    <Container>
        <Header>
            <MainHader>
            <div className='space'>
                <h1>얼굴의 디지털화!</h1>
            </div>
            <h4>3d reconstruction</h4>
            <div className='arrangement'>
                <div className='andigh3'>
                    <ImageUploade/>
                </div>
                <div className='andigh5'>
                 <Videoload result={result3}/>
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