<template>
  <div class="xx-empty">
    <div class="xx-empty__image" :style="imageStyle">
      <img v-if="image" :src="image" ondragstart="return false">
      <slot v-else name="image">
        <img-empty />
      </slot>
    </div>
    <div class="xx-empty__description">
      <slot v-if="$slots.description" name="description"></slot>
      <p v-else>{{ emptyDescription }}</p>
    </div>
    <div v-if="$slots.default" class="xx-empty__bottom">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ImgEmpty from './img-empty.vue';

export default {
  name: 'XxEmpty',
  components: {
    [ImgEmpty.name]: ImgEmpty
  },
  props: {
    image: {
      type: String,
      default: ''
    },
    imageSize: Number,
    description: {
      type: String,
      default: ''
    }
  },
  computed: {
    emptyDescription() {
      return this.description || '暂无数据';
    },
    imageStyle() {
      return {
        width: this.imageSize ? `${this.imageSize}px` : ''
      };
    }
  }
};
</script>
