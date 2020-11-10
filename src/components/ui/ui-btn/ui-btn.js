
export default {
  name: 'ui-btn',
  components: {},
  props: {
    text: {
      type: String,
      default: '按鈕文字'
    },
    link:{
      type: String,
      default: 'javascript:;'
    },
    theme:{
      type: String,
      default: 'main'
    },
    wd:{
      type: String,
      default: 'md'
    },
    isOpenOther:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onClick: function(){
      this.$emit('onClick');
    }
  }
}


