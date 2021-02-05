import { css } from 'styled-components'

import screens from './screens'

const setPaddings = ({
  pt, pr, pb, pl, px, py
} = {}) => css`
  ${pt && `padding-top: ${pt};`}
  ${pl && `padding-left: ${pl};`}
  ${pr && `padding-right: ${pr};`}
  ${pb && `padding-bottom: ${pb};`}
  ${px && `padding: 0 ${px};`}
  ${py && `padding: ${py} 0;`}
`

const setPaddingsXs = ({
  ptxs, prxs, pbxs, plxs, pxxs, pyxs,
} = {}) => css`
  ${screens.md(css`
    ${ptxs && `padding-top: ${ptxs};`}
    ${plxs && `padding-left: ${plxs};`}
    ${prxs && `padding-right: ${prxs};`}
    ${pbxs && `padding-bottom: ${pbxs};`}
    ${pxxs && `padding: 0 ${pxxs};`}
    ${pyxs && `padding: ${pyxs} 0;`}
  `)}
`

const setPaddingsMd = ({
  ptmd, prmd, pbmd, plmd, pxmd, pymd,
} = {}) => css`
  ${screens.md(css`
    ${ptmd && `padding-top: ${ptmd};`}
    ${plmd && `padding-left: ${plmd};`}
    ${prmd && `padding-right: ${prmd};`}
    ${pbmd && `padding-bottom: ${pbmd};`}
    ${pxmd && `padding: 0 ${pxmd};`}
    ${pymd && `padding: ${pymd} 0;`}
  `)}
`

const setPaddingsLg = ({
  ptlg, prlg, pblg, pllg, pxlg, pylg,
} = {}) => css`
  ${screens.lg(css`
    ${ptlg && `padding-top: ${ptlg};`}
    ${pllg && `padding-left: ${pllg};`}
    ${prlg && `padding-right: ${prlg};`}
    ${pblg && `padding-bottom: ${pblg};`}
    ${pxlg && `padding: 0 ${pxlg};`}
    ${pylg && `padding: ${pylg} 0;`}
  `)}
`

export {
  setPaddings,
  setPaddingsXs,
  setPaddingsMd,
  setPaddingsLg
};