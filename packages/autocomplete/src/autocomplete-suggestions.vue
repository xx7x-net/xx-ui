<template>
  <transition name="xx-zoom-in-top" @after-leave="doDestroy">
    <div
      v-show="showPopper"
      class="xx-autocomplete-suggestion xx-popper"
      :class="{ 'is-loading': !parent.hideLoading && parent.loading }"
      :style="{ width: dropdownWidth }"
      role="region">
      <xx-scrollbar
        tag="ul"
        wrap-class="xx-autocomplete-suggestion__wrap"
        view-class="xx-autocomplete-suggestion__list">
        <li v-if="!parent.hideLoading && parent.loading"><i class="xx-icon-loading"></i></li>
        <slot v-else>
        </slot>
      </xx-scrollbar>
    </div>
  </transition>
</template>
<script>
  import Popper from 'xxqx-ui/src/utils/vue-popper';
  import Emitter from 'xxqx-ui/src/mixins/emitter';
  import XxScrollbar from 'xxqx-ui/packages/scrollbar';

  export default {
    components: { XxScrollbar },
    mixins: [Popper, Emitter],

    componentName: 'XxAutocompleteSuggestions',

    data() {
      return {
        parent: this.$parent,
        dropdownWidth: ''
      };
    },

    props: {
      options: {
        default() {
          return {
            gpuAcceleration: false
          };
        }
      },
      id: String
    },

    methods: {
      select(item) {
        this.dispatch('XxAutocomplete', 'item-click', item);
      }
    },

    updated() {
      this.$nextTick(_ => {
        this.popperJS && this.updatePopper();
      });
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$refs.input.$refs.input || this.$parent.$refs.input.$refs.textarea;
      this.referenceList = this.$el.querySelector('.xx-autocomplete-suggestion__list');
      this.referenceList.setAttribute('role', 'listbox');
      this.referenceList.setAttribute('id', this.id);
    },

    created() {
      this.$on('visible', (val, inputWidth) => {
        this.dropdownWidth = inputWidth + 'px';
        this.showPopper = val;
      });
    }
  };
</script>
