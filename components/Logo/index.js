import IconLogo from './icon.svg'
import FullLogo from './logo.svg'

export const Logo = ({ icon, color, ...props }) =>
  (icon && <IconLogo {...props} fill={color} />) || (
    <FullLogo {...props} fill={color} />
  )
