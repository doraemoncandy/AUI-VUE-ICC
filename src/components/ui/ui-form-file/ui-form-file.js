import uiFormMixin from '../../../common-behavior/mixin-form';
import uiBtn from '../ui-btn/index.vue';
export default {
  name: 'ui-form-file',
  mixins: [uiFormMixin],
  components: {
    uiBtn
  },
  props: [],
  data () {
    return {
      fileName: ''
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onChangeFile(event){
      let file = event.target.files[0];
      this.fileName = file.name;
      this.$emit('onChangeFile',event);
    },
    clickBtn(){
      this.$refs.fileInput.click();
    } //end: clickBtn
  } //end: methods
}


