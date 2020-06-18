import Github from './icons/gh.svg'
import Fb from './icons/fb.svg'
import Insta from './icons/instagram.svg'
import Youtube from './icons/youtube.svg'
import Telegram from './icons/telegram.svg'

const Link = ({ as, href }) => {
  const Icon = as

  return (
    <a href={href} target="_blank" className="px-2 md:px-3">
      <Icon className="fill-current text-gray hover:text-green" height={30} />
    </a>
  )
}

export const SocialLinks = () => (
  <div className="flex">
    <Link as={Telegram} href="http://t.me/codarme" />
    <Link as={Youtube} href="http://youtube.com/codarme" />
    <Link as={Insta} href="http://instagram.com/codar.me" />
    <Link as={Fb} href="http://facebook.com/codarme" />
    <Link as={Github} href="http://github.com/codarme" />
  </div>
)
