
export default {
  components: {},
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    isShowClose:{
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      _isOpen: null
    }
  },
  watch: {
    isOpen(val){
      console.log('in watch isOpen');
      this.handleModal(val);
      
      this._isOpen = val;
    },// end: isOpen
    _isOpen(val){
      console.log('in watch _isOpen');
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


