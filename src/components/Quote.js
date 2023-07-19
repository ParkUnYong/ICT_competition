import React from 'react'
import { BlockQuote, QuoteH1, QuoteH4, Wrapper } from './Styles/Header/LectureQuote.style'

export const Quote = () => {
  return (
    <Wrapper>
        <BlockQuote>
            <QuoteH1></QuoteH1>
            <QuoteH4></QuoteH4>
        </BlockQuote>
    </Wrapper>
  )
}
