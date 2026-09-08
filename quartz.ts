import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { CustomDirectives } from "./quartz/plugins/transformers"

const config = await loadQuartzConfig()

config.plugins.transformers.push(CustomDirectives())

export default config
export const layout = await loadQuartzLayout()
