
import uiFormMixin from '../../../common-behavior/mixin-form';
export default {
  name: 'ui-form-checkbox',
  mixins: [uiFormMixin],
  components: {},
  props: {
    isChecked:{
      type: Boolean,
      default: false
    },
    text:{
      type: String,
      default: '選項文字'
    }
  },
  data () {
    return {
      dataIsChecked: this.privateIsChecked
    }
  },
  computed: {
    privateIsChecked:{
      get(){
        return this.isChecked;
      },
      set(val){
        this.$emit('update:isChecked',val);
      }
    } //end: privateIsChecked
  },
  watch:{

  },
  mounted () {

  },
  methods: {
  }
}


