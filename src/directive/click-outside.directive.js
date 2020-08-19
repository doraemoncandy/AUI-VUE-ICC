import Vue from 'vue';

Vue.directive('click-outside', {
  bind(el,binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // event.preventDefault();
      if (!(el == event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
      }
    }; // end: el.clickOutsideEvent
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  update() {

  },
  unbind(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
})