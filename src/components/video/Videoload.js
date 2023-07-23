import React, { useEffect, useState } from 'react';
import LoadingButton from '../button/Lodingbuttton';
import '../../App.css' 
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest(props) {
  return new Promise((resolve) => setTimeout(resolve, 10000));
}


const Videoload = ({result}) => {
  const [source,setSource] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  const videoIn = () => setSource(result);

  const basic = () => {
    return !isLoading ? handleClick : null;
  }
  // const videoIn = (event) =>{
  //   console.log("ddd");
  //   setSource(sample);
  // }

  return (
    <div>
      <div className='areaSize' style={{width:"576px"}}>
        <h4 className='tmi2'>output</h4>
        <hr />
        {!source && <div className='fileContainer2'></div>}
        {source && (
          <div className='fileContainer2'>
            <video
              className='VideoInput_video'
              width="576px"
              height="480px"
              controls
              src={source}
            />
          </div>
        )}
      </div>
      <div className='Buttonlocation' style={{marginTop:'10px'}}>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={()=>{
            setTimeout(()=>videoIn(),10000);
            handleClick(null);
          }}
        >   {isLoading ? 'Loading…' : '결과'}
        </Button>
      </div>
    </div>
  )
}

export default Videoload