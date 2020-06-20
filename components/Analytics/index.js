import { GATag } from './ga-tag'
import { FBPixel } from './fb-pixel'

export const Analytics = ({ children }) => (
  <>
    <GATag code={process.env.GA_TAG} />
    <FBPixel codes={process.env.FB_PIXEL_IDS.split(',')} />
  </>
)
