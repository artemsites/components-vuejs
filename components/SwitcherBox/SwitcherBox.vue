<template>
  <label class="switcher-box" :class="[(isSwitcherOn) ? '_on' : '_off']" :style="styles">
    <span class="switcher-box__label" v-if="$slots._">
      <slot />
    </span>

    <div class="switcher-box__box">
      <span ref="indicator" class="switcher-box__indicator" :class="{ '_bs': indicatorBoxShadow }"></span>
      <input class="switcher-box__checkbox" v-model="isSwitcherOn" type="checkbox">
    </div>
  </label>
</template>

<style scoped lang="scss">
  $size: var(--size, 1.8rem);
  $boxWidth: calc($size * 2.6);
  $padding: calc($size / 8);
  $boxColorActive: var(--c-accent, deepskyblue);
  $boxColor: var(--c-gray, darkgray);
  $transitionTime: 400ms;
  $ff: inherit;
  $fs: inherit;
  $boxHeight: calc($size + $padding * 2);

  .switcher-box {
    display: inline-flex;
    flex-direction: column;

    &__label {
      display: flex;
      align-items: center;

      font-family: $ff;
      font-size: $fs;

      margin-bottom: calc($size / 3);
    }

    &__box {
      width: $boxWidth;
      height: $boxHeight;

      display: flex;
      align-items: center;

      box-sizing: border-box;
      background: $boxColor;
      border-radius: $boxHeight;

      transition: background $transitionTime;

      position: relative;
    }

    &__indicator {
      width: $size;
      height: $size;

      background-color: var(--c-white, #fff);
      border-radius: 50%;

      transition: $transitionTime;

      position: absolute;
      left: $padding;

      &._bs {
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.25);
      }
    }

    &__checkbox {
      width: 100%;
      height: 100%;

      opacity: 0;
      cursor: pointer;

      margin: 0;
      position: absolute;
      left: 0;
      top: 0;
    }

    &._on & {
      &__indicator {
        animation-name: indicatorScaleBlur;
        animation-duration: $transitionTime;

        left: calc(100% - $size - $padding);

        &._bs {
          box-shadow: -2px 2px 8px 0 rgba(0, 0, 0, 0.25);
        }
      }

      &__box {
        background: $boxColorActive;
      }
    }

    &._off & {
      &__indicator {
        animation-name: indicatorScaleBlur;
        animation-duration: $transitionTime;

        // left: $padding;
      }
    }
  }

  @keyframes indicatorScaleBlur {
    0% {
      transform: scaleY(1);
      filter: blur(0.15rem);
    }

    10% {
      transform: scaleY(0.95);
    }

    30% {
      transform: scaleY(0.9);
    }

    50% {
      transform: scaleY(0.8);
    }

    70% {
      transform: scaleY(0.9);
    }

    90% {
      transform: scaleY(0.95);
    }

    100% {
      transform: scaleY(1);
      filter: blur(0);
    }
  }
</style>

<script setup>
/**
 * <switcher-box style="--c-accent: var(--bright-green);" indicatorBoxShadow size="3rem">label name</switcher-box>
 */
  import { ref, computed, watch } from "vue"

  let isSwitcherOn = ref(false)
  let indicator = ref()

  let props = defineProps({
    size: String,
    indicatorBoxShadow: Boolean,
  })

  watch(isSwitcherOn, () => {
    // Сброс анимации индикатора
    indicator.value.style.animationName = "none"
    requestAnimationFrame(() => {
      indicator.value.style.animationName = ""
    })
  })

  let styles = computed(() => {
    return "--size:" + (props.size) ? props.size : null
  })
</script>
