import './StackSelector.scss'

import { Squares2X2Icon } from '@heroicons/react/24/outline'

function StackSelector() {
    // State to manage the selected option and visibility of radio buttons
    const [selectedOption, setSelectedOption] = useState(1)
    const [isDropdownVisible, setDropdownVisible] = useState(false)

    // Options for items per page
    const options = [1, 2, 3, 4]

    // Toggle visibility of the dropdown (radio buttons)
    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev)
    }

    // Handle selection of a radio button
    const handleSelection = (value) => {
        setSelectedOption(value)
        setDropdownVisible(false) // Hide the radio buttons after selection
    }

    return (
        <div className="StackSelector">
            <button onClick={toggleDropdown} title={selectedOption}>
                <Squares2X2Icon />
            </button>

            {/* Radio Button Dropdown */}
            {isDropdownVisible && (
                <div className="drop-down">
                    {options.map((option) => (
                        <label
                            key={option}
                            style={{ display: 'block', marginBottom: '5px' }}
                        >
                            <input
                                type="radio"
                                name="itemsPerPage"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleSelection(option)}
                                style={{ marginRight: '5px' }}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            )}
        </div>
    )
}
