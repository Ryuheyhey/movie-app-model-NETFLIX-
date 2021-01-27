import { useEffect, useState } from 'react'
import 'styles/Nav.scss'

// type Props = {
//   className?: string
// }

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleShow = () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    // 画面をスクロールしたらhandleShowを呼び出す
    window.addEventListener('scroll', handleShow)

    // レンダー時にはEvent外す＝showはfalseになる
    return () => {
      window.removeEventListener('scroll', handleShow)
    }
  }, [])

  console.log(show)

  return (
    <div className={`Nav ${show && 'Nav-black'}`}>
      <img
        className="Nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="NETFLIX LOGO"
      />
      <img
        className="Nav-avater"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  )
}

export default Nav
