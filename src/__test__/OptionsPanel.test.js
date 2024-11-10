import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import OptionsPanel from "../componants/CustomCarousel/OptionsPanel"

test('renders question text correctly', () => {
    const onOptionSelect = jest.fn()

    render(<OptionsPanel
        options={["Option1","Option2","Option3"]}
        onOptionSelect={onOptionSelect}
        selectedOption="Option2"
        animation=""
      />)
    
        const option1 = screen.getByText("Option1")
        const option2 = screen.getByText("Option2")
        const option3 = screen.getByText("Option3")
        
        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
        expect(option3).toBeInTheDocument()

        fireEvent.click(option2)

        expect(onOptionSelect).toHaveBeenCalledWith("Option2")
  
})


