// import HelloWorld from './components/HelloWorld.vue';
import tTable from './components/ui/Table';
import tTh from './components/ui/TableTh';
import tTd from './components/ui/TableTd';
import tTr from './components/ui/TableTr';
import UiCollapse from './components/effect/collapse';
import UiModalBasic from './components/ui/ui-modal-basic';
import UiFormSelect from './components/ui/ui-form-select';
import UiAccordion from './components/effect/ui-accordion';
import UiAccordionItem from './components/effect/ui-accordion-item';
import UiLayoutBreadcrumb from './components/layout/ui-layout-breadcrumb';
import uiListContainer from './components/ui/ui-list-container';
import uiListItem from './components/ui/ui-list-item';
import uiBtn from './components/ui/ui-btn';
import uiBtnLayout from './components/ui/ui-btn-layout';
import uiFormInput from './components/ui/ui-form-input';
import uiFormTextarea from './components/ui/ui-form-textarea';
import uiFormCheckbox from './components/ui/ui-form-checkbox';
import uiFormFile from './components/ui/ui-form-file';
import uiSwitchBtn from './components/ui/ui-switch-btn';
import LineChart from '@/components/ui/LineChart';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    tTable,
    tTh,
    tTd,
    tTr,
    UiCollapse,
    UiModalBasic,
    UiFormSelect,
    UiAccordion,
    UiAccordionItem,
    UiLayoutBreadcrumb,
    uiListContainer,
    uiListItem,
    uiBtn,
    uiBtnLayout,
    uiFormInput,
    uiFormTextarea,
    uiFormCheckbox,
    uiFormFile,
    uiSwitchBtn,
    LineChart
  },
  data: function(){
    return {
      connection: null,
      inputVal: '',
      dataFromServer: 'test',
      isModalBasicOpen: false,
      selected: '1',
      selected1: 'item1',
      isSelect2ShowOption: true,
      selected2: 'default',
      fill: false,
      options1: [
        {
          value: 'item1',
          name: '第一個'
        },
        {
          value: 'item2',
          name: '第2個'
        }
      ],
      testLink: 'https://www.google.com.tw',
      listTitle: ['測試標題1', '測試標題2', '測試標題3', '測試標題4', '測試標題5', '測試標題6', '測試標題7' ],
      inputValue1: '文字文字',
      inputValue2: '文字文字222',
      isCheck: true,
      isCheck2: false,
      isCheck3: false,
      chartData :  {
        "datasets": [
          {
            // "backgroundColor": "#80d7fe4d",
            "backgroundColor": "rgba(128, 215, 254, 0.3)",
            "borderColor": "#80d7fe",
            "borderWidth": 2,
            "pointRadius": [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ],
            "pointBorderWidth": 5,
            "pointHitRadius": 5,
            "pointHoverRadius": 5,
            "lineTension": 0.15,
            // "pointBackgroundColor": "#80d7fe",
            "data": [
              {
                "x": "2020-08-31T10:12:59+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T10:13:37+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T10:16:14+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T10:21:16+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T10:22:36+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T10:25:06+08:00",
                "y": 25
              },
              {
                "x": "2020-08-31T10:25:23+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T10:26:57+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T10:29:21+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T10:32:28+08:00",
                "y": 21
              },
              {
                "x": "2020-08-31T10:38:14+08:00",
                "y": 20
              },
              {
                "x": "2020-08-31T10:38:41+08:00",
                "y": 18
              },
              {
                "x": "2020-08-31T10:41:22+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T10:42:29+08:00",
                "y": 20
              },
              {
                "x": "2020-08-31T10:44:11+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T10:44:30+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T10:45:13+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T10:45:19+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T10:48:53+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T10:50:17+08:00",
                "y": 29
              },
              {
                "x": "2020-08-31T10:51:25+08:00",
                "y": 21
              },
              {
                "x": "2020-08-31T10:54:45+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T10:55:21+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T10:56:21+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T10:56:58+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T10:58:58+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T11:00:39+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T11:01:35+08:00",
                "y": 29
              },
              {
                "x": "2020-08-31T11:05:04+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T11:13:00+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T11:13:25+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T11:14:54+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T11:15:25+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T11:26:26+08:00",
                "y": 18
              },
              {
                "x": "2020-08-31T11:28:01+08:00",
                "y": 29
              },
              {
                "x": "2020-08-31T11:28:31+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T11:29:37+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T11:29:47+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T11:43:02+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T11:50:35+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T11:55:28+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T11:55:35+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T11:57:38+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T11:58:51+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T12:01:18+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T12:01:24+08:00",
                "y": 18
              },
              {
                "x": "2020-08-31T12:06:23+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T12:10:54+08:00",
                "y": 19
              },
              {
                "x": "2020-08-31T12:15:36+08:00",
                "y": 20
              },
              {
                "x": "2020-08-31T12:27:50+08:00",
                "y": 19
              },
              {
                "x": "2020-08-31T12:28:56+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T12:35:10+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T12:42:32+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T12:45:50+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T12:52:30+08:00",
                "y": 25
              },
              {
                "x": "2020-08-31T12:52:33+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T13:05:14+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T13:16:42+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T13:27:50+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T13:28:32+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T13:29:49+08:00",
                "y": 20
              },
              {
                "x": "2020-08-31T13:43:50+08:00",
                "y": 19
              },
              {
                "x": "2020-08-31T13:55:29+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T14:09:32+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T14:18:10+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T14:19:46+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T14:29:39+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T14:32:32+08:00",
                "y": 21
              },
              {
                "x": "2020-08-31T14:41:22+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T15:01:45+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T15:11:32+08:00",
                "y": 25
              },
              {
                "x": "2020-08-31T15:15:40+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T15:15:46+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T15:20:47+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T15:20:59+08:00",
                "y": 33
              },
              {
                "x": "2020-08-31T15:22:51+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T15:25:13+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T15:27:47+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T15:33:26+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T15:39:31+08:00",
                "y": 18
              },
              {
                "x": "2020-08-31T15:41:33+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T15:46:12+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T15:47:57+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T16:17:40+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T16:27:55+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T16:31:57+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T16:35:01+08:00",
                "y": 19
              },
              {
                "x": "2020-08-31T16:37:05+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T16:39:32+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T16:51:47+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T16:57:21+08:00",
                "y": 21
              },
              {
                "x": "2020-08-31T16:57:55+08:00",
                "y": 28
              },
              {
                "x": "2020-08-31T17:01:23+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T17:06:02+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T17:35:22+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T17:50:30+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T18:02:04+08:00",
                "y": 18
              },
              {
                "x": "2020-08-31T18:24:15+08:00",
                "y": 33
              },
              {
                "x": "2020-08-31T18:38:30+08:00",
                "y": 20
              },
              {
                "x": "2020-08-31T18:54:58+08:00",
                "y": 29
              },
              {
                "x": "2020-08-31T19:03:50+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T19:07:39+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T19:10:42+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T19:21:45+08:00",
                "y": 15
              },
              {
                "x": "2020-08-31T19:26:11+08:00",
                "y": 19
              },
              {
                "x": "2020-08-31T19:37:16+08:00",
                "y": 30
              },
              {
                "x": "2020-08-31T19:37:21+08:00",
                "y": 24
              },
              {
                "x": "2020-08-31T19:46:05+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T19:47:32+08:00",
                "y": 35
              },
              {
                "x": "2020-08-31T20:10:39+08:00",
                "y": 21
              },
              {
                "x": "2020-08-31T20:23:56+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T21:11:50+08:00",
                "y": 17
              },
              {
                "x": "2020-08-31T21:20:43+08:00",
                "y": 29
              },
              {
                "x": "2020-08-31T21:47:54+08:00",
                "y": 16
              },
              {
                "x": "2020-08-31T21:48:37+08:00",
                "y": 32
              },
              {
                "x": "2020-08-31T21:56:32+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T22:30:13+08:00",
                "y": 15
              },
              {
                "x": "2020-08-31T23:07:14+08:00",
                "y": 15
              },
              {
                "x": "2020-08-31T23:14:49+08:00",
                "y": 22
              },
              {
                "x": "2020-08-31T23:19:01+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T23:39:07+08:00",
                "y": 27
              },
              {
                "x": "2020-08-31T23:44:04+08:00",
                "y": 23
              },
              {
                "x": "2020-08-31T23:50:56+08:00",
                "y": 26
              },
              {
                "x": "2020-08-31T23:52:44+08:00",
                "y": 31
              },
              {
                "x": "2020-08-31T23:54:47+08:00",
                "y": 28
              },
              {
                "x": "2020-09-01T00:02:06+08:00",
                "y": 22
              },
              {
                "x": "2020-09-01T00:32:23+08:00",
                "y": 19
              },
              {
                "x": "2020-09-01T00:39:39+08:00",
                "y": 26
              },
              {
                "x": "2020-09-01T00:46:55+08:00",
                "y": 17
              },
              {
                "x": "2020-09-01T01:45:02+08:00",
                "y": 21
              },
              {
                "x": "2020-09-01T01:56:55+08:00",
                "y": 17
              },
              {
                "x": "2020-09-01T02:11:51+08:00",
                "y": 22
              },
              {
                "x": "2020-09-01T02:24:10+08:00",
                "y": 33
              },
              {
                "x": "2020-09-01T02:41:37+08:00",
                "y": 29
              },
              {
                "x": "2020-09-01T02:43:14+08:00",
                "y": 25
              },
              {
                "x": "2020-09-01T02:58:55+08:00",
                "y": 19
              },
              {
                "x": "2020-09-01T03:26:28+08:00",
                "y": 26
              },
              {
                "x": "2020-09-01T03:34:23+08:00",
                "y": 20
              },
              {
                "x": "2020-09-01T03:40:27+08:00",
                "y": 24
              },
              {
                "x": "2020-09-01T03:57:01+08:00",
                "y": 20
              },
              {
                "x": "2020-09-01T05:27:56+08:00",
                "y": 24
              },
              {
                "x": "2020-09-01T05:45:00+08:00",
                "y": 30
              },
              {
                "x": "2020-09-01T06:08:29+08:00",
                "y": 16
              },
              {
                "x": "2020-09-01T07:03:58+08:00",
                "y": 18
              },
              {
                "x": "2020-09-01T08:01:29+08:00",
                "y": 27
              }
            ]
          }
        ]
      },
      chartOption: {
            "responsive": true,
            // "maintainAspectRatio":false,
            "title":{
              "display":false,
              "text": "耗損量",
              "position":"top"
            },
            "animation":{
              "duration":0
            },
            // "tooltips":{
            //   "mode":"nearest",
            //   "intersect":true,
            //   "enabled":true
            // },
            
            "hover":{
              "mode":"nearest",
              "intersect":true
            },
            "legend":{
              "display":false
            },
            "scales":{
              "xAxes":[
                {
                  "type":"time",
                  "display":true,
                  "time":{
                    "unit":"hour",
                    "displayFormats":{
                      "hour":"HH",
                      "day":"MMM D"
                    }
                  },
                  "gridLines":{
                    "display": true,
                    "backgroundColor":[
                      "rgba(20, 21, 25, 0.3)",
                      "rgba(20, 21, 25, 0.2)"
                    ],
                    "backgroundColorRepeat":true,
                    "z": -1
                  },
                  "ticks":{
                    "min":1598840374585,
                    "max":1598926774585,
                    "fontColor":"rgba(255,255,255,0.3)"
                  }
                }
              ],
              "yAxes":[
                {
                  "gridLines":{
                    "display":false
                  }
                }
              ]
            }
      } //end: chartOption
    }
  },// end: data
  methods: {
    sendMessage: function sendMessage(message) {
      console.log(this.connection);
      this.connection.send(message);
    },
    disconnet: function disconnet(){
      console.log('in disconnect');
      this.connection.close();
    },
    onIsOpenChange(val){
      this.isModalBasicOpen = val;
    },
    onClickModalBtn(){
      this.isModalBasicOpen = false;
    },
    onClickAccordion(){
      console.log('onClickAccordion');
    },
    selectClick(val){
      // var _self = this;
      console.log('on select click', val);
      setTimeout(() =>{
        this.selected2 = 'default';
        console.log('this.selected2 ', this.selected2 );
      },500);
      
    },
    fileChange(event){
      console.log('change file',event, event.target.files[0]);
    }

  },
  created: function(){
    
    var _self = this;
    
    // this.connection = new WebSocket("wss://echo.websocket.org")
    this.connection = new WebSocket("ws://192.168.50.145:3000");
    // this.connection = new WebSocket("ws://localhost:3000");
    
    // 連接建立時
    this.connection.onopen = function(event){
      console.log(event)
      console.log("Successfully connected to the echo websocket server...")
    }

    // client 收到 server時
    this.connection.onmessage = function(event) {
      console.log('==== on msg ====');
      console.log(event);
      console.log('data:', event.data);
      _self.dataFromServer = event.data;
      console.log('data from server', _self.dataFromServer);
    }

    // 通訊發生錯誤的時候
    this.connection.error = function(event){
      console.log('==== on error ====');
      console.log(event);
    }

    // 通訊關閉的時候
    this.connection.close = function(){
      console.log('=== on close ===' + this.readyState);
    }

    // tooltip
            
    let tooltipContent = {
      mode: 'nearest',
      intersect: false,
      enabled: false,
      custom: function(tooltipModel) {
        console.log('in custom');
        // Tooltip Element
        var tooltipEl = document.getElementById('chartjs-tooltip');
        var position = this._chart.canvas.getBoundingClientRect();

        // Create element on first render
        if (!tooltipEl) {
          tooltipEl = document.createElement('div');
          tooltipEl.id = 'chartjs-tooltip';
          tooltipEl.innerHTML = '<table style="width: 100%"></table>';
          document.body.appendChild(tooltipEl);
        }

        // Hide if no tooltip
        if (tooltipModel.opacity === 0) {
          tooltipEl.style.opacity = 0;
          return;
        }

        // Set caret Position
        tooltipEl.classList.remove('above', 'below', 'no-transform');
        if (tooltipModel.yAlign) {
          tooltipEl.classList.add(tooltipModel.yAlign);
        } else {
          tooltipEl.classList.add('no-transform');
        }

        function getBody(bodyItem) {
          return bodyItem.lines;
        }
        // Set Text
        if (tooltipModel.body) {
          var titleLines = tooltipModel.title || [];
          var bodyLines = tooltipModel.body.map(getBody);
          var innerHtml = '<thead>';
          const dataArr = [];
          let num = {
            1: [
              {
                "name": "溫度",
                "timestamp": 1598853963612,
                "type": "number",
                "value": 23,
              },
              {
                "name": "溫度",
                "timestamp": 1598854270151,
                "type": "number",
                "value": 26,
              }
            ]
          }
          titleLines.forEach(function(title) {
            innerHtml += '<tr><th colspan="2" style="text-align: left; padding-left: 30px;">' + 'Hello' + '</th></tr>';
          });
          innerHtml += '</thead><tbody>';

          
          innerHtml += '</tbody>';

          var tableRoot = tooltipEl.querySelector('table');
          tableRoot.innerHTML = innerHtml;
        }

        // `this` will be the overall tooltip
        var position = this._chart.canvas.getBoundingClientRect();

        // Display, position, and set styles for font
        tooltipEl.style.opacity = 1;
        tooltipEl.style.position = 'absolute';
        if (window.innerWidth < 512) {
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 125 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 10 + 'px';
        } else if (tooltipModel.caretX > position.width / 2) {
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 252 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.getBoundingClientRect().height / 2 + 'px';
          if(tooltipEl.getBoundingClientRect().top + tooltipEl.getBoundingClientRect().height > self.$refs.contentSection.getBoundingClientRect().bottom) {
            tooltipEl.style.top = self.$refs.contentSection.getBoundingClientRect().bottom  + window.pageYOffset- tooltipEl.getBoundingClientRect().height + 'px';
          }
        } else {
          tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 12 + 'px';
          tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.getBoundingClientRect().height / 2 + 'px';
          if(tooltipEl.getBoundingClientRect().top + tooltipEl.getBoundingClientRect().height > self.$refs.contentSection.getBoundingClientRect().bottom) {
            tooltipEl.style.top = self.$refs.contentSection.getBoundingClientRect().bottom + window.pageYOffset - tooltipEl.getBoundingClientRect().height + 'px';
          }
        }
        tooltipEl.style.top = 0;
        tooltipEl.style.left = 0;
        tooltipEl.style.opacity = 1;
        tooltipEl.style.width = '240px';
        tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
        tooltipEl.style.fontSize = '15px';
        tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
        tooltipEl.style.color = '#fff';
        tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        tooltipEl.style.pointerEvents = 'none';
        tooltipEl.style.backgroundColor = '#141519E6';
        tooltipEl.style.border = 'solid 1px #51596b';
        tooltipEl.style.borderRadius = '5px';
      }
    };

    // option
    this.chartOption['tooltips'] = tooltipContent;



    

    //end toolteip

    // 
  } // end: create
  

}