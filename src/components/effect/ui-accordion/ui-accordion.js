
export default {
  name: 'ui-accordion',
  components: {},
  props: {
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      Accordion:{
        active: this.activeIndex,
        count: 0
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  },
  provide(){
    return {Accordion : this.Accordion};
  }
}


