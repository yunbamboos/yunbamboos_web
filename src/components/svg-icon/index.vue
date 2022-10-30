<template>
  <div :style="setIconImgOutStyle">
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1" :width="getWidth" :height="getHeight">
      <path :d="getIconName"></path>
    </svg>
  </div>
</template>
<script lang="ts">
import {computed} from "vue";
import {getPath} from "@/components/svg-icon";

export default {
  name: "home",
  props: {
    // svg 图标组件名字
    name: {
      type: String,
    },
    // svg 大小
    size: {
      type: String,
      default: () => '16',
    },
    // svg 颜色
    color: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    // 获取 icon 图标名称
    const getIconName = computed(() => {
      return getPath(props?.name);
    });
    const getWidth = computed(() => {
      return props?.size;
    });
    const getHeight = computed(() => {
      return props?.size;
    });
    // 设置图片样式
    const setIconImgOutStyle = computed(() => {
      return `width: ${props.size}px;
              height: ${props.size}px;
              line-height:${props.size}px;
              margin-right: 5px;
              fill:currentColor;
              display:inline-block;
              overflow: hidden;` + ((props?.color)?`color:${props.color}`:'');
    });
    return {
      getIconName,
      getWidth,
      getHeight,
      setIconImgOutStyle
    }
  }
}
</script>