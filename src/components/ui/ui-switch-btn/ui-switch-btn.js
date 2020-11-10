
export default {
  name: 'ui-switch-btn',
  components: {},
  props: {
      datas:{
        type: Array,
        default(){
          return [{
              link: 'javascript:;',
              text: '按鈕1'
          },
          {
            link: 'javascript:;',
            text: '按鈕2'
          },
          {
            link: 'javascript:;',
            text: '按鈕3'
          },
          {
            link: 'javascript:;',
            text: '按鈕4'
          }]
        }
      } //datas
  },
  data () {
    return {
      actvieIndex: 0
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    onClick: function onClick(item) {
      this.actvieIndex = item;
    } // end:  onClick
  }
}


