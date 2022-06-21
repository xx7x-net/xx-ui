<template>
  <transition-group
    tag="ul"
    :class="[
      'xx-upload-list',
      'xx-upload-list--' + listType,
      { 'is-disabled': disabled }
    ]"
    name="xx-list"
  >
    <li
      v-for="file in files"
      :class="['xx-upload-list__item', 'is-' + file.status, focusing ? 'focusing' : '']"
      :key="file.uid"
      tabindex="0"
      @keydown.delete="!disabled && $emit('remove', file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          class="xx-upload-list__item-thumbnail"
          v-if="file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(listType) > -1"
          :src="file.url" alt=""
        >
        <a class="xx-upload-list__item-name" @click="handleClick(file)">
          <i class="xx-icon-document"></i>{{file.name}}
        </a>
        <label class="xx-upload-list__item-status-label">
          <i :class="{
            'xx-icon-upload-success': true,
            'xx-icon-circle-check': listType === 'text',
            'xx-icon-check': ['picture-card', 'picture'].indexOf(listType) > -1
          }"></i>
        </label>
        <i class="xx-icon-close" v-if="!disabled" @click="$emit('remove', file)"></i>
        <i class="xx-icon-close-tip" v-if="!disabled">按 delete 键可删除</i> <!--因为close按钮只在li:focus的时候 display, li blur后就不存在了，所以键盘导航时永远无法 focus到 close按钮上-->
        <xx-progress
          v-if="file.status === 'uploading'"
          :type="listType === 'picture-card' ? 'circle' : 'line'"
          :stroke-width="listType === 'picture-card' ? 6 : 2"
          :percentage="parsePercentage(file.percentage)">
        </xx-progress>
        <span class="xx-upload-list__item-actions" v-if="listType === 'picture-card'">
          <span
            class="xx-upload-list__item-preview"
            v-if="handlePreview && listType === 'picture-card'"
            @click="handlePreview(file)"
          >
            <i class="xx-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled"
            class="xx-upload-list__item-delete"
            @click="$emit('remove', file)"
          >
            <i class="xx-icon-delete"></i>
          </span>
        </span>
      </slot>
    </li>
  </transition-group>
</template>
<script>
  import XxProgress from 'xxqx-ui/packages/progress';

  export default {

    name: 'XxUploadList',

    data() {
      return {
        focusing: false
      };
    },
    components: { XxProgress },

    props: {
      files: {
        type: Array,
        default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      handlePreview: Function,
      listType: String
    },
    methods: {
      parsePercentage(val) {
        return parseInt(val, 10);
      },
      handleClick(file) {
        this.handlePreview && this.handlePreview(file);
      }
    }
  };
</script>
