
export default {
  name: 'ui-list-container',
  components: {},
  props: {
    title:{
      type: Array,
      default(){
        return ['測試標題1', '測試標題2']
      },
      
    },
    column: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      childEle: null,
      isOrder: document.body.clientWidth > 1200
    }
  },
  computed: {

  },
  mounted () {
    this.childEle = this.$refs.listContainer.querySelectorAll('.ui-list-item');
    this.isNeedOrder();
    window.addEventListener('resize',  this.isNeedOrder);
  },
  methods: {
    isNeedOrder: function(){
      var _self = this;
      var _windowWidth = document.body.clientWidth;
      _self.isOrder = (_windowWidth > 1200) ? true: false;
    }// isNeedOrder
  }
}


