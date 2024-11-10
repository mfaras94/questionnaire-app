import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

import QuestionPanel from "../componants/CustomCarousel/QuestionPanel"


test('renders question text correctly', () => {
    const question = "React testing is Esey" 
    render(<QuestionPanel question={question} animation="" />)
    
    const questionElement = screen.getByText(`${question}?`)
    expect(questionElement).toBeInTheDocument()
  
})



