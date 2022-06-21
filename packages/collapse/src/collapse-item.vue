<template>
  <div class="xx-collapse-item"
    :class="{'is-active': isActive, 'is-disabled': disabled }">
    <div
      role="tab"
      :aria-expanded="isActive"
      :aria-controls="`xx-collapse-content-${id}`"
      :aria-describedby ="`xx-collapse-content-${id}`"
    >
      <div
        class="xx-collapse-item__header"
        @click="handleHeaderClick"
        role="button"
        :id="`xx-collapse-head-${id}`"
        :tabindex="disabled ? undefined : 0"
        @keyup.space.enter.stop="handleEnterClick"
        :class="{
          'focusing': focusing,
          'is-active': isActive
        }"
        @focus="handleFocus"
        @blur="focusing = false"
      >
        <slot name="title">{{title}}</slot>
        <i
          class="xx-collapse-item__arrow xx-icon-arrow-right"
          :class="{'is-active': isActive}">
        </i>
      </div>
    </div>
    <xx-collapse-transition>
      <div
        class="xx-collapse-item__wrap"
        v-show="isActive"
        role="tabpanel"
        :aria-hidden="!isActive"
        :aria-labelledby="`xx-collapse-head-${id}`"
        :id="`xx-collapse-content-${id}`"
      >
        <div class="xx-collapse-item__content">
          <slot></slot>
        </div>
      </div>
    </xx-collapse-transition>
  </div>
</template>
<script>
  import ElCollapseTransition from 'xxqx-ui/src/transitions/collapse-transition';
  import Emitter from 'xxqx-ui/src/mixins/emitter';
  import { generateId } from 'xxqx-ui/src/utils/util';

  export default {
    name: 'XxCollapseItem',

    componentName: 'XxCollapseItem',

    mixins: [Emitter],

    components: { ElCollapseTransition },

    data() {
      return {
        contentWrapStyle: {
          height: 'auto',
          display: 'block'
        },
        contentHeight: 0,
        focusing: false,
        isClick: false,
        id: generateId()
      };
    },

    inject: ['collapse'],

    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        }
      },
      disabled: Boolean
    },

    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      }
    },

    methods: {
      handleFocus() {
        setTimeout(() => {
          if (!this.isClick) {
            this.focusing = true;
          } else {
            this.isClick = false;
          }
        }, 50);
      },
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('XxCollapse', 'item-click', this);
        this.focusing = false;
        this.isClick = true;
      },
      handleEnterClick() {
        this.dispatch('XxCollapse', 'item-click', this);
      }
    }
  };
</script>
