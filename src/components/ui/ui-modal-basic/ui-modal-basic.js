
import vuescroll from 'vuescroll';
export default {
  components: {
    vuescroll
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    isShowClose:{
      type: Boolean,
      default: true
    },
    scrollbarStyle: {
      type: Object,
      default: function () {
        return { 
          rail: {
            opacity: '0.5',
            background: "rgba(42, 42, 42, 0.5)",
            border: 'none',
            size: '14px',
            gutterOfSide: 0
          },
          bar: {
            showDelay: 500,
            onlyShowBarOnScroll: true,
            keepShow: true,
            background: 'rgba(183, 191, 217, 0.5)',
            opacity: 0.5,
            size: '8px',
            minSize: 0,
          } 
        } // end: return
      }
  }, // end: scrollbarStyle
  },
  data () {
    return {
      _isOpen: null,
    }
  },
  watch: {
    isOpen(val){
      // console.log('in watch isOpen');
      this.handleModal(val);
      
      this._isOpen = val;
    },// end: isOpen
    _isOpen(val){
      // console.log('in watch _isOpen');
      this.handleModal(val);
      this.$emit('on-is-open-change', val);
    } //end: _isOpen
    
  },
  computed: {

  },
  mounted () {
    this._isOpen = this.isOpen;
    this.handleModal(this._isOpen);
  },
  methods: {
    onClose(){
      this._isOpen = false;
      this.$emit('on-is-open-change', this._isOpen);
    },
    handleModal(isOpen){
      console.log('isOpen', isOpen);
      var _isOpenModal = isOpen;
      if(_isOpenModal){
        document.body.classList.add('style--fixed');
      }//end: if
      else{
        document.body.classList.remove('style--fixed');
      }
      
    }//end: handlModal
  }
}


