import noImage from '../assets/no-image-placeholder.webp';

const croppedImageURL = (url:string) => {
  if(!url) return noImage;
const endpoint='media/';
  const urlSplitted = url.split(endpoint);
  const croppedUrl = urlSplitted[0]+"media/" + "crop/600/400/"+urlSplitted[1];
  return croppedUrl;
}

export default croppedImageURL;