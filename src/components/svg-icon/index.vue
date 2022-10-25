<template>
  <div :style="setIconImgOutStyle">
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" version="1.1" :width="getWidth" :height="getHeight">
      <path d="M265.41696 492.13312l0 50.99264c72.064 39.32288 154.71616 61.67936 242.59328 61.67936s170.528-22.35648 242.59328-61.67936l0-50.99264c-70.55232 43.47264-153.63968 68.5632-242.59328 68.5632S335.96928 535.60576 265.41696 492.13312zM508.00896 2.43072l-33.08032 33.53216L0.76928 516.5888l163.65056 0 78.94144 507.23968 154.37696 0L397.73824 759.18208 618.2784 759.18208l0 264.6464 154.37696 0 79.24864-507.23968 163.34336 0L508.00896 2.43072zM816.76416 472.48128l-81.32096 507.23968L662.3872 979.72096 662.3872 715.07328 353.632 715.07328l0 264.6464-72.19712 0-82.18112-507.23968L107.4368 472.48 508.3392 69.40416l402.71488 403.07712L816.76416 472.48128z" :fill="getFill"></path>
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
      type: Number,
      default: () => 16,
    },
    // svg 颜色
    color: {
      type: String,
      default: () => '#ffffff',
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
    const getFill = computed(() => {
      return props?.color;
    });
    // 设置图片样式
    const setIconImgOutStyle = computed(() => {
      return `width: ${props.size}px;height: ${props.size}px;line-height:${props.size}px;margin-right: 5px;overflow: hidden;`;
    });
    return {
      getIconName,
      getWidth,
      getHeight,
      getFill,
      setIconImgOutStyle
    }
  }
}
</script>