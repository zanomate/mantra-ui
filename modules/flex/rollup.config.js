import dtsConfig from '../../config/rollup_dts'
import tsBundleConfig from '../../config/rollup_tsBundle'

export default [
  tsBundleConfig(),
  dtsConfig()
]
