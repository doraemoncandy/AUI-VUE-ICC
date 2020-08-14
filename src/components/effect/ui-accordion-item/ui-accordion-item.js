export default {
  name: 'ui-accordion-item',
  components: {},
  inject: ['Accordion'],
  props: {
    isCollapse:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen:{
        type: Boolean,
        default: this.isCollapse
      },
      index: null
    }
  },
  computed: {
    isVisible(){
      return this.index == this.Accordion.active;
    }
  },
  mounted () {

  },
  methods: {
      onClickOpen(){
        if (this.isVisible) {
          this.Accordion.active = null;
        } else {
          this.Accordion.active = this.index;
        }
        this.$emit('on-btn-click');
        
      },
      /**
       * @param {HTMLElement} element
       */
      beforeEnter(element) {
        requestAnimationFrame(() => {
          if (!element.style.height) {
            element.style.height = '0px';
          }

          element.style.display = null;
        });
      },
      /**
       * @param {HTMLElement} element
       */
      enter(element) {
        requestAnimationFrame(() => {
            element.style.height = `${element.scrollHeight}px`;
        });
      },
      /**
       * @param {HTMLElement} element
       */
      afterEnter(element) {
        element.style.height = null;
      },
      /**
       * @param {HTMLElement} element
       */
      beforeLeave(element) {
        requestAnimationFrame(() => {
          if (!element.style.height) {
            element.style.height = `${element.scrollHeight}px`;
          }
        });
      },
      /**
       * @param {HTMLElement} element
       */
      leave(element) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            element.style.height = '0px';
          });
        });
      },
      /**
       * @param {HTMLElement} element
       */
      afterLeave(element) {
        element.style.height = null;
      },
    //end
  },
  created(){
    this.index = this.Accordion.count++;
  }
}


