<template>
  <div id="app" class="ui-page">
    <div class="title-block">
      <h2>UICC UI Page</h2>
    </div>
    <!-- temp button -->
    <div class="websocket-block">
      <input type="text" v-model="inputVal"/>
      <button @click="sendMessage(inputVal)">send msg</button>
      <button @click="disconnet()">disconnect</button>
      <h5>Data From Server: {{ dataFromServer }}</h5>
    </div>
    <!-- end of temp button -->
    <!-- sidebar -->
    <!-- <div class="ui-layout-sidebar">
      <ul class="ui-sidebar-list-block">
          <li>
            <a href="javascript:;">Table</a>
          </li>
          <li>
            <a href="javascript:;">Table</a>
          </li>
      </ul>
    </div> -->
    <!-- end of sidebar -->
    <div class="ui-layout-content">
        <!-- collapse -->
        <h3 class="ui-title">收合 </h3>
        <ui-collapse :is-collapse="true">
          <template v-slot:trigger>
            收合標題收合標題
          </template>
          <template v-slot:content>
            收合內容收合內容收合內容<br/>
            收合內容收合內容收合內容<br/>
            收合內容收合內容收合內容<br/>
            收合內容收合內容收合內容<br/>
            收合內容收合內容收合內容<br/>
            收合內容收合內容收合內容<br/>
          </template>
        </ui-collapse>
        <!-- end of collapse -->
        <!-- table Layout-->
        <h3 class="ui-title">Table: 上下標題，小版滑動 </h3>
        <h5 class="ui-title--sub">STYLE00 - 藍線</h5>
        <t-table text-no-data="無資料" :is-empty="true">
          <template v-slot:thead>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>
        <h5 class="ui-title--sub">無資料置中</h5>
        <t-table text-no-data="無資料" align-no-data="center" :is-empty="true">
          <template v-slot:thead>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>

        <h5 class="ui-title--sub">STYLE01 - 灰線 (用在內頁)</h5>
        <t-table text-no-data="無資料" :is-empty="false" table-style="01">
          <template v-slot:thead>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>

        <h5 class="ui-title--sub">STYLE02 - 灰標(datamonitor)</h5>
        <t-table text-no-data="無資料" :is-empty="false" table-style="02">
          <template v-slot:thead>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>


        <h5 class="ui-title--sub">is-checkbox = true - 有checkbox樣式</h5>
        <t-table text-no-data="無資料" :is-empty="false" :is-checkbox="true">
          <template v-slot:thead>
            <t-th></t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>
                <input type="checkbox" > 
              </t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>
        <!-- end of table Layout-->

        <h5 class="ui-title--sub">小版等比縮</h5>
        <t-table text-no-data="無資料" :is-empty="false" :is-wd-full="true">
          <template v-slot:thead>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
            <t-th>Test</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr v-for="index in 5" :key="index"> 
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
              <t-td>t-content {{index}}</t-td>
            </t-tr>
          </template>
        </t-table>

        

        <!-- Table content demo -->
        <h3 class="ui-title">Table: 內容定義</h3>
        <t-table  :is-empty="false" >
          <template v-slot:thead>
            <t-th>點點連結</t-th>
            <t-th>連結</t-th>
            <t-th>顏色文字</t-th>
            <t-th>一般文字</t-th>
          </template>
          <template v-slot:tbody>
            <t-tr> 
              <t-td>
                <a href="#" class="t-link style--has-dot color-offline">
                  <span class="t-link-text">
                    offline測試點點文字offline測試點點文字offline測試點點文字offline測試點點文字
                  </span>
                </a>
              </t-td>
              <t-td>
                <a href="#" class="t-link ">
                  <span class="t-link-text">測試點點連結文字</span>
                </a>
              </t-td>
              <t-td class="color-level1">level1顏色文字 </t-td>
              <t-td>一般文字預設置左 </t-td>
            </t-tr>
            <!-- 1st tr -->
            <t-tr> 
              <t-td>
                <a href="#" class="t-link style--has-dot color-online">
                  <span class="t-link-text">
                    online測試點點連結文字online測試點點連結文字online測試點點連結文字online測試點點連結文字
                  </span>
                </a>
              </t-td>
              <t-td>
                <a href="#" class="t-link ">
                  <span class="t-link-text">測試點點連結文字</span>
                </a>
              </t-td>
              <t-td class="color-level2">level2顏色文字</t-td>
              <t-td class="align-center">一般文字置中</t-td>
            </t-tr>
            <!-- 2nd tr -->
            <t-tr> 
              <t-td>
                <a href="#" class="t-link style--has-dot color-online style--no-link">
                  <span class="t-link-text">online測試轉成不是連結</span>
                </a>
              </t-td>
              <t-td>
                <a href="#" class="t-link style--no-link"><span class="t-link-text">測試點點沒有連結文字</span></a>
              </t-td>
              <t-td class="color-level3">level3顏色文字</t-td>
              <t-td class="align-right">一般文字置右</t-td>
            </t-tr>
            <!-- 3rd tr -->
            <t-tr> 
              <t-td>
                <a href="#" class="t-link style--has-dot style--no-link color-online">
                  <span class="t-link-text">online測試轉成不是連結</span>
                </a>
              </t-td>
              <t-td>
                <a href="#" class="t-link ">
                  <span class="t-link-text">測試點點連結文字</span>
                </a>
              </t-td>
              <t-td class="color-level4">level4顏色文字</t-td>
              <t-td>t-content </t-td>
            </t-tr>
            <!-- 4th tr -->
            <!-- 5 tr -->
            <t-tr class="disable">
              <t-td>
                <a href="#" class="t-link style--has-dot color-online">
                  <span class="t-link-text">online測試點點連結文字</span>
                </a>
              </t-td>
              <t-td>
                <a href="#" class="t-link ">
                  <span class="t-link-text">測試點點連結文字</span>
                </a>
              </t-td>
              <t-td class="color-level4">level4顏色文字</t-td>
              <t-td>t-content </t-td>
            </t-tr>
            <!-- end: 5tr -->
          </template>
        </t-table>
        <!-- end of Table content demo -->

        <!-- Table 寬度定義 -->
        <h3 class="ui-title">Table: 寬度定義</h3>

        <!-- end of Table 寬度定義 -->
      </div>
      <!-- end of ui-layout-content -->
    
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import tTable from './components/ui/Table';
import tTh from './components/ui/TableTh';
import tTd from './components/ui/TableTd';
import tTr from './components/ui/TableTr';
import UiCollapse from './components/effect/collapse';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    tTable,
    tTh,
    tTd,
    tTr,
    UiCollapse
    
  },
  data: function(){
    return {
      connection: null,
      inputVal: '',
      dataFromServer: 'test'
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

    // 
  } // end: create
  

}

</script>

<style lang="scss">
// component scss

@import 'assets/sass/customize';
@import 'assets/sass/ui-page';

</style>
