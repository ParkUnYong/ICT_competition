import React from "react";
import ImageUploader from "react-images-upload";

class UploadComponent extends React.Component {
  onDrop = (pictureFiles, pictureDataURLs) => {
    const newImagesUploaded = pictureDataURLs.slice(
      this.props.defaultImages.length
    );
    console.warn("pictureDataURLs =>", newImagesUploaded);
    this.props.handleChange(newImagesUploaded);
  };

  render() {
    return (
      <ImageUploader
        withIcon={false}
        withLabel={false}
        withPreview={true}
        buttonText={"이미지 추가"}
        fileSizeError={"File size is too big!"}
        fileTypeError={"This extension is not supported!"}
        onChange={this.onDrop}
        imgExtension={this.props.imgExtension}
        maxFileSize={this.props.maxFileSize}
        defaultImages={false}
      />
    );
  }
}

export default UploadComponent;
