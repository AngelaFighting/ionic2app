/**
 * Created by Angela on 2018/7/29.
 */
import {Injectable} from '@angular/core';

import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';
import {ActionSheetController} from 'ionic-angular';

@Injectable()
export class PhotoService {

  constructor(public actionSheetCtrl: ActionSheetController,
              private camera: Camera,
              private transfer: FileTransfer,
              private file: File) {

  }

  takePicture(sourceType) {
    //定义相机参数
    var options = {
      quality: 100,//图片质量
      //图片类型
      //从图库中获取图片 this.camera.PictureSourceType.PHOTOLIBRARY
      //从拍照 this.camera.PictureSourceType.CAMERA
      sourceType: sourceType,
      saveToPhotoAlbum: true,//是否保存拍摄的照片到相册中去
      correctOrientation: true,//是否纠正拍摄照片方向
    }
    // 获取图片方法
    this.camera.getPicture(options).then((imgPath) => {
      //alert(imgPath);
      this.doUpload(imgPath);
    })
  }

  doUpload(filePath) {
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'file',//input type=file
      fileName: 'xxx.jpg',//
      mimeType: 'image/jpeg',//
      params: {//post
        name: 'angela',
        age: 28
      },
      headers: {}
    }
    var api = '';
    fileTransfer.upload(filePath, api, options).then((data) => {
      // success
      alert('success:' + JSON.stringify(data));
    }, (err) => {
      // error
      alert('error:' + JSON.stringify(err));
    })
  }

  presentPhotoActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your avatar',
      buttons: [
        {
          text: 'Select avatar from album',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Take photo',
          handler: () => {
            console.log('Archive clicked');
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
