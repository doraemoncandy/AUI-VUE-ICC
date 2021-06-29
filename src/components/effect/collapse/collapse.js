
export default {
  name: 'ui-collapse',
  components: {},
  props: {
    isCollapse: {
      type: Boolean,
      default: true
    },
    minHeight: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      // isOpen: this.isCollapse,
      isOpen: (this.isCollapse || (!this.isCollapse && (this.minHeight != 0))),
      isInitalContentShow: (!this.isCollapse && (this.minHeight != 0)),
      classMinHeightFirstInital: false,
    }
  },
  computed: {

  },
  mounted() {
    if ((!this.isCollapse) && this.minHeight != 0) {
      console.log('mount');
      this.$refs.content.style.height = this.minHeight + 'px';
      this.$refs.content.style.display = null;
      this.classMinHeightFirstInital = true;
    }
  },
  methods: {
    onClickCollapse(event) {
      event.preventDefault();
      if (this.isInitalContentShow) {
        this.isInitalContentShow = false;
        this.classMinHeightFirstInital = false;
        this.isOpen = false;
      }
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 100);
    },
    /**
     * @param {HTMLElement} element
     */
    beforeEnter(element) {

      requestAnimationFrame(() => {
        console.log('beforeEnter', this.isOpen, element)
        this.$refs.content.style.height = null;
        if (!this.isOpen && this.minHeight) {
          element.style.height = this.minHeight + 'px';;
        }
        else if (!element.style.height) {
          element.style.height = this.minHeight + 'px';
        }

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
          element.style.height = this.minHeight + 'px';
        });
      });
    },
    /**
     * @param {HTMLElement} element
     */
    afterLeave(element) {
      element.style.height = this.minHeight + 'px';
      element.style.display = null;
    },
    //end
  }
}


