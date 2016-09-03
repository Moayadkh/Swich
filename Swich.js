var Swich = function(){
this.status = 0, this.currentImg = null, this.currentBgColor;
};

/**
* @description
* @author
* @param
* @return
*/
Swich.prototype = function(){
  /**
  * @description
  * @param
  * @return
  */
  function setGallery(){
    // turn off
    setStatus(0);

    // createImg
    var img = document.createElement('img');

    // setAttributes
    setAttributes(img, {
        'alt':'',
        'id':'img',
        'class':'',
        'name':'',
        'src':'src/on.jpg',
    });



    // onClick
    img.addEventListener('click', function(x){
      
      // this id
      var id = x.srcElement.id || x.target.id;

      // currentImg
      var img = x.srcElement.src;

      // find /
      // get img.length
      var currentImg = img.substr(img.lastIndexOf('/')+1, img.length);

      // check status
      var crntSts = getStatus();
      // console.log(typeof crntSts);

      // // onProcess
      if(crntSts === 0){
          // console.log('ZERO');
          setStatus(1);
          // console.log(getStatus());
          SwitchImg(currentImg);
          SwitchBG();
          // console.log(id, currentImg);

      }else if (crntSts === 1){
          // console.log('ONE');
          setStatus(0);
          // console.log(getStatus());
          SwitchImg(currentImg);
          SwitchBG();
          // console.log(id, currentImg);
      }

    }, false);

    // insert into page
    document.getElementById('placeholder').appendChild(img);
  }



  /**
  * @description
  * @param
  * @return
  */
  function currentImg(img){
    this.currentImg = img;
    return this.currentImg;
  }

  /**
  * @description
  * @param
  * @return
  */
  function SwitchImg(data){

    switch(data){
      case 'on.jpg':
        document.getElementById('img').setAttribute('src', 'src/off.jpg');
        this.status = 0;
      break;

      case 'off.jpg':
        document.getElementById('img').setAttribute('src', 'src/on.jpg');
        this.status = 1;
      break;

      default:
        return null;
        break;
    }
  }

  /**
  * @description
  * @param
  * @return
  */
  function SwitchBG(){
    if(getStatus() === 0){
        document.body.style.background = '#000000';
    }else if(getStatus() === 1){
        document.body.style.background = '#ffffff';
    }
  }

  /**
  * @description
  * @param
  * @return
  */
  function getStatus(){
    return parseInt(this.status);
  }

  /**
  * @description
  * @param
  * @return
  */
  function setStatus(status){
    var stsInt = parseInt(status);
    this.status = stsInt;
    return this.status;
  }

  /**
  * @description
  * @param
  * @return
  */
  function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
  /**
  * @description
  * @param
  * @return
  */
  function init(){
      console.log('We are here.', 'Swich v0.1');
      setGallery();
  }

  return{
    init : init
  }
}();

var swich = new Swich();
swich.init();
