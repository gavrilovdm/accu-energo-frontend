export interface ParamInterface {
  id?: number

  /* for description */
  title?: string
  description?: string

  /* for external data */
  image?: string
  images?: string[]
  files: {
    title: string,
    path: string
  }[]

  /* for states */
  isNumber?: boolean // numeric data, then {id of param, numeric value}
  isString?: boolean // string data, then {id of param, string value}
  isShowAtFilterBlock?: boolean
  isProductFeature?: boolean
  isLinkToDownload?: boolean //ex.: attach image and file

  /*
  * Parent - is a category above this category
  * ex.: this category will be shown only if parent category is shown
  * */
  parentIds?: number[]
  tags?: string[] // it unions params by equal group
}
