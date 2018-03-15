import React from 'react';
import ReactDOM from 'react-dom';
import ReactAudioPlayer from 'react-audio-player';

const Multitrack = (props) => {
  const {
    artist,
    title,
    description,
    files,
    previewFile,
    genre,
    image,
    id,
    userId
  } = props.multiDetails
  const filePath = '../../userfiles/' + JSON.parse(previewFile).filename;
  const imgPath = '../../userfiles/' + JSON.parse(image).filename;

  return (
    <div className="clearfix mt-3 mb-4">
      <a href="">
        <img className="float-left artwork-thumbnail" src={imgPath} />
      <h6 className="lead font-weight-bold">{title}</h6>
      <p className="lead">{artist}</p>
      </a>
      <p className="artwork-user">
        <img className="pr-2" src="../images/icon-upload@2x.png"/>User Name [TBD]
      </p>
      <p><span className="artwork-genre">{genre}</span></p>
      <ReactAudioPlayer className="" src={filePath} controls />
    </div>
  )
}


export default Multitrack;