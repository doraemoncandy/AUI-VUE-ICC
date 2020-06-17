<template lang="html">
  <vuescroll :ops="settingScrollbar">
    <table class="cp-table" :class="['wd-'+ sizeTable, {'style--wd-full': isWdFull}, {'style--no-data': isEmpty}, 'style--'+tableStyle, {'style--has-checkbox':isCheckbox}]" cellspacing="0" cellpadding="0">
      <thead>
        <slot name="thead"></slot>
      </thead> 
      <tbody>
        <!-- template has data -->
        <template v-if="!isEmpty">
          <slot name="tbody"></slot>
        </template>
        <!-- end: template has data -->

        <!-- template nodata -->
        <template v-else>
          <tr>
            <td colspan="100%" :class="['align-'+ alignNoData]">{{textNoData}}</td>
          </tr>
        </template>
        <!-- end: template no data -->
      </tbody> 
    </table>
  </vuescroll>
  
 

</template>

<script lang="js">
  import vuescroll from 'vuescroll';
  export default  {
    components: {
      vuescroll
    },
    name: 't-table',
    props: {
      isEmpty: {  
        type: Boolean,  // if content is empty, true: template -> 'no data', false: template -> normal style
      },
      alignNoData:{
        type: String,
        default: 'left'
      }, 
      textNoData: {
        type: String,
        default: 'no-data'
      },
      tableStyle:{  // 02 -> for table style grey
        type: String,
        default: '00'
      },
      isCheckbox:{
        type: Boolean,
        default: false
      },
      isWdFull:{  // 小版是否等比縮
        type: Boolean,
        default: false
      },
      sizeTable:{  // 整個table的size (在小版的時候)，預設800px
        type: String,
        default: 'base'
      }
    },
    computed: {
      
    },
    watch:{
     
    },
    mounted () {
      
    },
    data (){
      return {
        settingScrollbar:{
           bar: {
            showDelay: 500,
            onlyShowBarOnScroll: true,
            keepShow: true,
            background: '#fff',
            opacity: 0.4,
          } 
        } //end: settingScrollBar
      }
    },
    methods: {
     

    },
    beforeUpdate() {
    },
    created() {
    }
   
}


</script>


