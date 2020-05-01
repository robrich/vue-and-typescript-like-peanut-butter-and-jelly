declare module 'vue-parallax-js' {
  import { PluginObject } from 'vue';

  const vp: PluginObject<VueParallaxJsOptions>;
  export default vp;

  export interface VueParallaxJsOptions {
    container: string;
  }
}
