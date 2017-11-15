<template>
  <page>
      <scroll-view>
          <stack-layout>
              <button @tap="onTap">Ciao</button>
              <button @tap="textRed = !textRed" style="color: white; background-color: darkcyan;">TAP HERE</button>
              <label :style="{color: textRed ? 'red' : 'blue'}"
                      style="text-align: center; margin-top: 20; font-size: 40"
                      :text="showTrick ? 'Poof!' : 'Wait for it!'"></label>
              <button @tap="showTrick = !showTrick">Tap to see a trick!</button>

              <image-viewer v-if="showTrick" :imgSrc="imgSrc"></image-viewer>
          </stack-layout>
      </scroll-view>
  </page>
</template>
<script>
export default {
  name: "main-template",
  data: {
      textRed: false,
      showTrick: false,
      imgSrc: '~/images/apple.jpg'
  },
  methods: {
    onTap() {
        alert('Nice Tap!')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
