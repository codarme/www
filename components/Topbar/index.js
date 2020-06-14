import { Logo } from '~/components/Logo'
import { SocialLinks } from '~/components/SocialLinks'

export const Topbar = () => (
  <div className="max-w-5xl container p-2 md:p-8 flex justify-between items-center">
    <Logo className="md:hidden" color="#FFF" height={50} icon />
    <Logo className="hidden md:block" color="#FFF" height={50} />
    <SocialLinks />
  </div>
)
