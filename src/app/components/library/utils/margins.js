import { css } from 'styled-components'

import screens from './screens'

const setMargins = ({
  mt, mr, mb, ml, mx, my
} = {}) => css`
  ${mt && `margin-top: ${mt};`}
  ${ml && `margin-left: ${ml};`}
  ${mr && `margin-right: ${mr};`}
  ${mb && `margin-bottom: ${mb};`}
  ${mx && `margin: 0 ${mx};`}
  ${my && `margin: ${my} 0;`}
`

const setMarginsXs = ({
  mtxs, mrxs, mbxs, mlxs, mxxs, myxs,
} = {}) => css`
  ${screens.md(css`
    ${mtxs && `margin-top: ${mtxs};`}
    ${mlxs && `margin-left: ${mlxs};`}
    ${mrxs && `margin-right: ${mrxs};`}
    ${mbxs && `margin-bottom: ${mbxs};`}
    ${mxxs && `margin: 0 ${mxxs};`}
    ${myxs && `margin: ${myxs} 0;`}
  `)}
`

const setMarginsMd = ({
  mtmd, mrmd, mbmd, mlmd, mxmd, mymd,
} = {}) => css`
  ${screens.md(css`
    ${mtmd && `margin-top: ${mtmd};`}
    ${mlmd && `margin-left: ${mlmd};`}
    ${mrmd && `margin-right: ${mrmd};`}
    ${mbmd && `margin-bottom: ${mbmd};`}
    ${mxmd && `margin: 0 ${mxmd};`}
    ${mymd && `margin: ${mymd} 0;`}
  `)}
`

const setMarginsLg = ({
  mtlg, mrlg, mblg, mllg, mxlg, mylg,
} = {}) => css`
  ${screens.lg(css`
    ${mtlg && `margin-top: ${mtlg};`}
    ${mllg && `margin-left: ${mllg};`}
    ${mrlg && `margin-right: ${mrlg};`}
    ${mblg && `margin-bottom: ${mblg};`}
    ${mxlg && `margin: 0 ${mxlg};`}
    ${mylg && `margin: ${mylg} 0;`}
  `)}
`

export {
  setMargins,
  setMarginsXs,
  setMarginsMd,
  setMarginsLg
};