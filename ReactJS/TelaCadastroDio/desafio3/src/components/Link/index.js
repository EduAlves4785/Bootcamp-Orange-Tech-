import React from 'react'
import {LinkText,SpanText} from './styles'

export default function Link({text1,text2}) {
  return (
        <LinkText>
            <b>{text1}</b>
            <SpanText><b>{text2}</b></SpanText>
        </LinkText>
  )
}
