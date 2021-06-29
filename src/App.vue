<style>
html, body{
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.ui-page .chart-block{
  display: inline-block;
  width: 500px;
  height: 500px;
}
.chart-block .chart{
  height: 100%;
}
</style>
<template>
  <div id="app" class="ui-page">
    <div class="title-block">
      <h2>UI WebSocket Test Page</h2>
    </div>

    
    <!-- temp button -->
    <!--<div class="websocket-block">
      <input type="text" v-model="inputVal"/>
      <button @click="sendMessage(inputVal)">send msg</button>
      <button @click="disconnet()">disconnect</button>
      <h5>Data From Server: {{ dataFromServer }}</h5>
    </div>-->
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
    <div class="ui-layout-content bg-color-main">
        <h3 class="ui-title">Line Chart</h3>
        <div class="chart-block">
          <line-chart class="chart" :chart-data="chartData" :options="chartOption"></line-chart>
        </div>
        <h3 class="ui-title">Switch Button</h3>
        <ui-switch-btn></ui-switch-btn>

        <h3 class="ui-title">File </h3>
        <ui-form-file></ui-form-file>

        <h6 class="ui-title--white">有標題</h6>
        <ui-form-file title="選擇檔案" :is-required="true" @onChangeFile="fileChange($event)"></ui-form-file>

        <h6 class="ui-title--white">Error</h6>
        <ui-form-file title="選擇檔案" :is-required="true" :is-error="true"></ui-form-file>

        <h3 class="ui-title">Checkbox </h3>
        <h6 class="ui-title--white">一般的checkbox</h6>
        <ui-form-checkbox :is-checked.sync="isCheck">測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字</ui-form-checkbox>
        <p>isChecked: {{isCheck}} </p>
        <h6 class="ui-title--white">一般的checkbox</h6>
        <ui-form-checkbox :is-required="true" :is-checked.sync="isCheck2">測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試</ui-form-checkbox>
        <p>isChecked: {{isCheck2}} </p>

        <h6 class="ui-title--white">自己給id</h6>
        <ui-form-checkbox id="checkid" :is-checked.sync="isCheck3">測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字</ui-form-checkbox>
        <p>isChecked: {{isCheck}} </p>

        <h3 class="ui-title">Textarea </h3>
        <h6 class="ui-title--white">有值的Textarea</h6>
        <ui-form-textarea title="標題" :is-required="true"></ui-form-textarea>

         

        <h6 class="ui-title--white">placeholder</h6>
        <ui-form-textarea placeholder="示範文字"></ui-form-textarea>
        <h6 class="ui-title--white">style: error</h6>
        <ui-form-textarea :is-error="true" :value.sync="inputValue1"></ui-form-textarea>
        <p>value: {{inputValue1}} </p>
        <h6 class="ui-title--white">style: disable</h6>
        <ui-form-textarea :is-disable="true" :value.sync="inputValue1"></ui-form-textarea>

        <!-- button -->
        <h3 class="ui-title">Input </h3>
        <h6 class="ui-title--white">有標題的Input</h6>
        <ui-form-input value="test" title="標題" :is-required="true"></ui-form-input>

        <h6 class="ui-title--white">有值的Input</h6>
        <ui-form-input value="test"></ui-form-input>

        <h6 class="ui-title--white">placeholder</h6>
        <ui-form-input placeholder="請輸入文字"></ui-form-input>

        <h6 class="ui-title--white">style: error</h6>
        <ui-form-input :isError="true" :value="inputValue1"></ui-form-input>

        <h6 class="ui-title--white">style: disable</h6>
        <ui-form-input :isDisable="true" :value="inputValue2"></ui-form-input>
        <!-- end of  button -->


        <!-- button -->
        <h3 class="ui-title">Button </h3>
        <ui-btn text="按鈕文字" @onClick="clickBtn()"></ui-btn>
        <!-- end of  button -->


        <!-- button -->
        <h3 class="ui-title">Button width btn-layout</h3>
        <ui-btn-layout>
          <ui-btn text="不可點擊的按鈕" theme="disable" @onClick="clickBtn()"></ui-btn>
          <ui-btn text="另開一頁" :isOpenOther="true" link="http://www.google.com.tw"></ui-btn>
          <ui-btn link="http://www.google.com.tw" text="按鈕文字2按鈕文字1按鈕文字1按鈕文字1按鈕文字1" wd="lg" @onClick="clickBtn()"></ui-btn>
        </ui-btn-layout>
        <!-- end of  button -->

        <!-- list -->
        <h3 class="ui-title">List </h3>
        <h6 class="ui-title--white">column: 2</h6>
        <ui-list-container :title="listTitle" :column="2">
          <ui-list-item>
            <div>測試測試測試測1</div>
          </ui-list-item>
          <ui-list-item>
            <h6>測試測試測試測2</h6>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          
        </ui-list-container>

        <h6 class="ui-title--white">column: 1</h6>
          <ui-list-container :title="listTitle" >
          <ui-list-item>
            <div>測試測試測試測1</div>
          </ui-list-item>
          <ui-list-item>
            <h6>測試測試測試測2</h6>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
          <ui-list-item>
            <a :href="testLink" target="_blank" style="color:white">Test Link</a>
          </ui-list-item>
           <ui-list-item>
             <a :href="testLink" target="_blank" style="color:white">Test Link</a>
           </ui-list-item>
          
        </ui-list-container>
        
        <!-- end of list -->

        <!-- Breadcrumb -->
        <h3 class="ui-title">Breadcrumb </h3>
        <ui-layout-breadcrumb></ui-layout-breadcrumb>
        <!-- end of Breadcrumb -->
        <!-- select -->
        <h3 class="ui-title">Select </h3>
        <p>父層：被選中的數值：{{selected}}</p>
        <div class="bg-color-main space-md-top-down">
          <h6 class="ui-title--white">預設樣式：一般下拉選單</h6>
          <div class="ui-page-select">
            <ui-form-select :value.sync="selected">
            </ui-form-select>
          </div>
          <h6 class="ui-title--white">沒有預設選項 - is-show-default-option</h6>
          <div class="ui-page-select">
            <ui-form-select :options="options1" :value.sync="selected1" :is-show-default-option="false" >
            </ui-form-select>
          </div>

          <h6 class="ui-title--white">選了預設選項不見 - is-seleted-hide-default-option</h6>
          <div class="ui-page-select">
            <ui-form-select :options="options1" :value.sync="selected2" :is-show-default-option.sync="isSelect2ShowOption" :is-seleted-hide-default-option="true" @on-click-option="selectClick(selected2)">
            </ui-form-select>
          </div>
        </div>

        <h6 class="ui-title--white">樣式2：type = style2</h6>
          <div class="ui-page-select">
            <ui-form-select :value.sync="selected" type="style2">
            </ui-form-select>
          </div>

        <h6 class="ui-title--white">樣式2：type = style2</h6>
        <div class="ui-page-select">
          <ui-form-select :value.sync="selected" type="style2" default-text="請選擇">
          </ui-form-select>
        </div>

        <h6 class="ui-title--white">樣式2：type = style2</h6>
          <ui-form-select title="下拉選單標題" :is-required="true" :value.sync="selected" type="style2" default-text="請選擇">
          </ui-form-select>
        
        
        <!-- end of select -->


        <!-- modal -->
        <h3 class="ui-title">Modal </h3>
        <button @click="isModalBasicOpen = true">開Modal</button>
        <ui-modal-basic :is-show-close="true" :is-open="isModalBasicOpen" @on-is-open-change="onIsOpenChange">
          <template v-slot:header>標題標題標題</template>
          <template v-slot:content>
            <div class="content-block">
              內容內容內容內容
              <div style="min-height: 650px;"></div>
            </div>
          </template>
          <template v-slot:footer>
            <button @click="onClickModalBtn()"> 關掉POPUP</button>
          </template>
        </ui-modal-basic>
        <!-- end of modal -->
        <!-- accordion -->
        <h3 class="ui-title">收合 accordion</h3>
        <ui-accordion class="accordion-block" :activeIndex="1">
          <ui-accordion-item @on-btn-click="onClickAccordion">
            <template v-slot:trigger>
              收合標題收合標題1
            </template>
            <template v-slot:content>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
            </template>
          </ui-accordion-item>
          <ui-accordion-item >
            <template v-slot:trigger>
              收合標題收合標題2
            </template>
            <template v-slot:content>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
              收合內容收合內容收合內容<br/>
            </template>
          </ui-accordion-item>
        </ui-accordion>
        
        <!-- end of accordion -->

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
        <!-- collapse -->
        <h3 class="ui-title">收合 min height </h3>
        <ui-collapse :is-collapse="false" :min-height="50">
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

        <h3 class="ui-title">收合 min height true </h3>
        <ui-collapse :is-collapse="true" :min-height="30">
          <template v-slot:trigger>
            收合標題收合標題20
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

<script src="./app.js"></script>

<style lang="scss">
// component scss

@import 'assets/sass/customize';
@import 'assets/sass/ui-page';

</style>
