import React, {Component} from 'react'
import './ImageUploade.css';
import UploadComponent from '../../upload';
import '../../App.css'

class ImageUploade extends Component{
    state = {
        upload: {
          pictures: [],
          maxFileSize: 5242880,
          imgExtension: [".jpg", ".png"],
          defaultImages: [
            ""
          ]
        }
      };
    
      handleChange = files => {
        const { pictures } = this.state.upload;
        console.warn({ pictures, files });
    
        this.setState(
          {
            ...this.state,
            upload: {
              ...this.state.upload,
              pictures: [...pictures, ...files]
            }
          },
          () => {
            console.warn("It was added!");
          }
        );
      };
    
      confirmUpload = () => {
        const { pictures, defaultImages } = this.state.upload;
        console.warn("Confirm Upload =>", [...pictures]);
      };  

  render(){
    return (
        <div>
            <div className='margin2'>
                <h4 className='tmi'>input</h4>
            </div>
           <hr />

            <button className='btn1' onClick={this.confirmUpload}>Confirm upload</button>

        <UploadComponent
              {...this.state.upload}
              handleChange={this.handleChange}
           />

        </div>
        
  )
 }
}

export default ImageUploade