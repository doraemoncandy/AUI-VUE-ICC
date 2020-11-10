
 import '../../../directive/click-outside.directive';
 import uiFormMixin from '../../../common-behavior/mixin-form';
// import clickOutside from '../../../directive/click-outside.directive';

  
export default {
  name: 'ui-form-select',
  // directive: [clickOutside],
  components: {
    
  },
  mixins: [uiFormMixin],
  props: {
    value: {
      default: 'default' //下拉選單選擇的值
    },
    // options 選項
    options:{
      type: Array,
      default(){
        return [
          {
            name: '選項一',
            value: 0
          },
          {
            name: '選項2',
            value: 1
          }
        ]
      }// end: default
    }, // end: options
    // 一開始是否顯示default選項
    isShowDefaultOption: {
      type: Boolean,
      default: true
    },
    // 選擇後是否要隱藏default選項
    isSeletedHideDefaultOption: {
      type: Boolean,
      default: false
    },
    // style1 --> default  style2--> , style3 --->
    type:{
      type: String,
      default: 'style1'
    },
    defaultText: {
      type: String,
      default: 'Select'
    }
  },
  data () {
    return {
      selected: null, // selected text
      selectOptionText: '',
      isOpen: false
      
    }
  },
  watch: {
    value(val){
      this.getSelectedValue(val);
    }
  },
  computed: {
    privateValue:{
      get(){
        return this.value;
      },
      set(val){
        console.log('in privateValue set',val );
        this.getSelectedValue(val);
        this.$emit('update:value', val);
      }
    },// end: privateValue
    privateIsShowDefaultOption:{
      get(){
        return this.isShowDefaultOption;
      },
      set(val){
        this.$emit('update:isShowDefaultOption', val);
      }
    } // end: privateIsShowDefaultOption
    
  },
  mounted () {
    this.getSelectedValue(this.privateValue);
  },
  methods: {
    getSelectedValue: function getSelectedValue(val){
      const selected = val;

      var _self = this;
      if(selected === 'default'){
        _self.selected = this.defaultText;
        // console.log('if',this.selected);
      }
      else{
        // console.log('else');
        this.options.map((item)=>{
          // console.log('map', item.name);
          if(item.value.toString() === val.toString()){
            // console.log('item.value',item.value);
            _self.selected =  item.name;
          }
        }) // end: map
      }
      // this.$emit('update:privateValue', event.target.value);
    },
    onClickOption: function onClickOption(val){
      console.log('in on onClickOption');
      const selected = val;
      this.privateValue = selected;
      this.isOpen = false;
      // if(this.isSeletedHideDefaultOption && this.isShowDefaultOption){
      //   this.privateIsShowDefaultOption = false;
      // }
      // output click
      this.$emit('on-click-option');
    },
    onClickDropdown: function onClickDropdown(event){
      event.preventDefault();
      this.isOpen = !this.isOpen;
    },
    onClickOutsideSelect: function onClickOutsideSelect(){
      this.isOpen = false;
    }

  }
}


