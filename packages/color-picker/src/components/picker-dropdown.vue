<template>
  <transition name="xx-zoom-in-top" @after-leave="doDestroy">
    <div
      class="xx-color-dropdown"
      v-show="showPopper">
      <div class="xx-color-dropdown__main-wrapper">
        <hue-slider ref="hue" :color="color" vertical style="float: right;"></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine v-if="predefine" :color="color" :colors="predefine"></predefine>
      <div class="xx-color-dropdown__btns">
        <span class="xx-color-dropdown__value">
          <xx-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini">
          </xx-input>
        </span>
        <xx-button
          size="mini"
          type="text"
          class="xx-color-dropdown__link-btn"
          @click="$emit('clear')">
          清空
        </xx-button>
        <xx-button
          plain
          size="mini"
          class="xx-color-dropdown__btn"
          @click="confirmValue">
          确定
        </xx-button>
      </div>
    </div>
  </transition>
</template>

<script>
  import SvPanel from './sv-panel';
  import HueSlider from './hue-slider';
  import AlphaSlider from './alpha-slider';
  import Predefine from './predefine';
  import Popper from 'xxqx-ui/src/utils/vue-popper';
  import XxInput from 'xxqx-ui/packages/input';
  import XxButton from 'xxqx-ui/packages/button';

  export default {
    name: 'xx-color-picker-dropdown',

    mixins: [Popper],

    components: {
      SvPanel,
      HueSlider,
      AlphaSlider,
      XxInput,
      XxButton,
      Predefine
    },

    props: {
      color: {
        required: true
      },
      showAlpha: Boolean,
      predefine: Array
    },

    data() {
      return {
        customInput: ''
      };
    },

    computed: {
      currentColor() {
        const parent = this.$parent;
        return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
      }
    },

    methods: {
      confirmValue() {
        this.$emit('pick');
      },

      handleConfirm() {
        this.color.fromString(this.customInput);
      }
    },

    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },

    watch: {
      showPopper(val) {
        if (val === true) {
          this.$nextTick(() => {
            const { sl, hue, alpha } = this.$refs;
            sl && sl.update();
            hue && hue.update();
            alpha && alpha.update();
          });
        }
      },

      currentColor: {
        immediate: true,
        handler(val) {
          this.customInput = val;
        }
      }
    }
  };
</script>
