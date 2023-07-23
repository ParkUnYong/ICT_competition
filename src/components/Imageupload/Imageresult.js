import React, { useEffect, useState } from 'react';
import LoadingButton from '../button/Lodingbuttton';
import '../../App.css' 
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest(props) {
  return new Promise((resolve) => setTimeout(resolve, 10000));
}


const Imageresult = ({result}) => {
  const [source,setSource] = useState();
  const [isLoading, setLoading] = useState(false);
   console.log(result,"리절트");
  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
  const imageIn = () => setSource(result);

  const basic = () => {
    return !isLoading ? handleClick : null;
  }
 
  return (
    <div>
      <div className='areaSize'>
        <h4>output</h4>
        <hr />
        {!source && <div className='fileContainer3'></div>}
        {source && (
          <div className='fileContainer3'>
            <img
              className='imgInput_img'
              width="512px"
              height="480px"
              controls
              src={source}
              alt=""
            />
          </div>
        )}
      </div>
      <div className='Buttonlocation' style={{marginTop:'10px'}}>
        <Button
          variant="primary"
          disabled={isLoading}
          onClick={()=>{
            setTimeout(()=>imageIn(),10000);
            handleClick(null);
          }}
        >   {isLoading ? 'Loading…' : '결과'}
        </Button>
      </div>
    </div>
  )
}

export default Imageresult