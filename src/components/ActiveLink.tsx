import Link from "next/link"
import { useRouter } from "next/router"
import { CSSProperties, FC } from "react"

type Props={
  text:string,
  href: string
}

const styleLink : CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
}

export const ActiveLink: FC<Props> = ({text, href}) => {
  const {asPath} = useRouter()

  return (
    <Link style={asPath === href ? styleLink : undefined } href={href}>
      {text}
    </Link>
  )
}
