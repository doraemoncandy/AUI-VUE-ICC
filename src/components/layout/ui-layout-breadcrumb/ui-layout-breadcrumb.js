
export default {
  name: 'ui-layout-breadcrumb',
  components: {},
  props: {
    datas: {
      type: Array,
      default(){
        return [
          {
            name: '第一層',
            isLink: false,
            link: 'javascript:;'
          },
          {
            name: '第二層',
            isLink: true,
            link: '#'
          },
          {
            name: '第三層',
            isLink: false,
            link: '#'
          }
        ]
      } // end: default
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

  }
}


