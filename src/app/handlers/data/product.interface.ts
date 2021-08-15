export interface ProductInterface {
  id: number | string
  title?: string
  description?: string
  brand?: string
  series?: string
  voltage?: string
  power?: string
  capacity?: string
  length?: string
  width?: string
  height?: string
  weight?: string
  output_type?: string
  pdf?: string
  url?: string
  date?: string
  isActive?: boolean
  technology: string
  lifeTimeMin: number
  lifeTimeMax: number
}
