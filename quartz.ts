import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { CustomDirectives } from "./quartz/plugins/transformers/custom-directives"

const config = await loadQuartzConfig({
  plugins: {
    transformers: [
      CustomDirectives(),
    ],
  },
})

export default config
export const layout = await loadQuartzLayout()
