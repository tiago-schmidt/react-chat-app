export const flex = {
  display: 'flex'
}

export const row = {
  ...flex,
  flexDirection: 'row'
}

export const column = {
  ...flex,
  flexDirection: 'column'
}

export const centered = {
  alignItems: 'center',
  justifyContent: 'center'
}

export const centeredRow = {
  ...flex,
  ...centered,
  ...row
}

export const centeredColumn = {
  ...flex,
  ...centered,
  ...column
}

export const noBorder = {
  border: 'none',
}

export const rounded = {
  borderRadius: '15px',
}

export const lightRounded = {
  borderRadius: '3px',
}