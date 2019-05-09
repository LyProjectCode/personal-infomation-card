import { Component, OnInit } from '@angular/core';
// import{NavController} from 'ion ic-angular';
import { PersonDataService } from '../../person-data.service';

declare let AMap: any;

@Component({
  selector: 'app-exercise-map',
  templateUrl: './exercise-map.component.html',
  styleUrls: ['./exercise-map.component.css']
})
export class ExerciseMapComponent implements OnInit {
  public mapObj:any;
  constructor(private personDataService: PersonDataService) { }

  ngOnInit() {
    this.getMap();
  }

  getMap() {
    let that = this;
    let address = '';
    that.mapObj = new AMap.Map('map-box', {
      resizeEnable: true,
      zoom: 16,
      center: [116.397428, 39.90923]
    });

    that.mapObj.plugin('AMap.Geolocation', function () {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      that.mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete');
      AMap.event.addListener(geolocation, 'error');
    });
    that.mapObj.plugin(["AMap.Scale"], function () {    //加载比例尺插件      
      let scale = new AMap.Scale({
        position: 'RB'
      });
      that.mapObj.addControl(scale);
      scale.show();
    });
    that.mapObj.plugin(["AMap.MapType"], function () {
      //地图类型切换
      var type = new AMap.MapType({
        showTraffic: true,
        defaultType: 0 //使用2D地图
      });
      that.mapObj.addControl(type);
    });
    that.mapObj.plugin(["AMap.ToolBar"], function () {
      //加载工具条
      var tool = new AMap.ToolBar();
      that.mapObj.addControl(tool);
    });

    AMap.event.addListener(that.mapObj, "click", function (e: any) {
      let geocoder: any;
      if (!geocoder) {
        geocoder = new AMap.Geocoder({
          // city: "024", //城市设为北京，默认：“全国”
          radius: 1000 //范围，默认：500
        });
      }
      geocoder.getAddress(e.lnglat, function (status: string, result: any) {
        if (status === 'complete' && result.regeocode) {
          address = result.regeocode.formattedAddress;
          let info = [];
          info.push("<div><div><img style=\"float:left;\" src=\" ../../../../../assets/img/autonavi.png \"/></div> ");
          info.push("<div style=\"padding:7px 0px 0px 0px;\"><h4>高德软件</h4>");
          
          if(address.indexOf('IT国际')!=-1){
            info.push('<a href=\"info\">个人信息 :' + that.personDataService.person.name + '</a></div></div>');
          }else{
            info.push('<p>地址 :' + address + '</p></div></div>');
          }
          
          let infoWindow = new AMap.InfoWindow({
            autoMove: true,
            closeWhenClickMap: true,
            content: info.join("")  //使用默认信息窗体框样式，显示信息内容
          });

          infoWindow.open(that.mapObj, e.lnglat);
        } else {
          alert(JSON.stringify(result))
        }
      });

    });
  }
}
