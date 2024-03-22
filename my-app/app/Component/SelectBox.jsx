import React, { useState } from 'react'
import Select from 'react-select'
import styles from './SelectBox.module.css'
import { Icon } from './icon'
import { SvgRightTick } from './RightTickSvg'

export const SelectBox = ({
	options,
	placeholder,
	id,
	classname,
	onChange,
	width = '200px',
	boxStyle,
	placeholderStyle,
	name,
	onBlurInput,
	defaultInputValue,
	outerDivStyle,
	selectBoxBGColor,
}) => {
	const [selectedOption, setSelectedOption] = useState(null)
	//Style of dropdown
	const selectStyle = {
		option: (styles, { isFocused, isSelected, isDisabled }) => ({
			...styles,
			cursor: 'pointer',
			backgroundColor: isFocused ? '#333' : '',
			color: isSelected ? 'white' : isDisabled ? '#A0A0A0' : '#E2E2E2', // Change color for disabled options
		}),
		menu: (styles) => ({
			...styles,
			marginTop: '6px',
			zIndex: 2,
			backgroundColor: '#1F1F1F',
			fontSize: '12px',

		}),
		control: (styles) => ({
			...styles,
			backgroundColor: selectBoxBGColor ? selectBoxBGColor : '#333',
		}),
		singleValue: (styles) => ({
			...styles,
			color: 'white',
		}),
	}

	//  check if an option is selected
	const isSelectedOption = (option) => {
		return selectedOption && selectedOption.value === option.value // Check if selectedOption exists and its value matches the option
	}


	//Customised Options
	const updatedOptions = options.map((option) => ({
		value: option.value,
		label: (
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<div className='absolute mr-[20px]'>
					{isSelectedOption(option) && <SvgRightTick />}
				</div>
				<div className='flex w-full ml-[20px]'>

					{option.icon}
					<span style={{ marginLeft: '5px' }}>{option.label}</span>
				</div>
			</div>
		),
		isDisabled: option.disabled, // Set isDisabled property based on the 'disabled' property of the option
	}))

	return (
		<div
			className={`react-select mdMax:!w-full ${outerDivStyle}`}
			style={{
				width: `${width}`,
			}}
		>
			<Select
				id={id}
				value={selectedOption}
				onChange={(selectedOption) => {
					setSelectedOption(selectedOption)
					onChange && onChange(selectedOption)
				}}
				options={updatedOptions}
				styles={selectStyle}
				placeholder={<div className={`${placeholderStyle}`}>{placeholder}</div>}
				className={`${boxStyle && boxStyle} border-website-[#CBCBCB] font-MontserratMedium w-full ${styles.selectContainerViewPoints} ${classname && classname}`}
				name={name}
				onBlur={onBlurInput}
				defaultInputValue={defaultInputValue}
				menuPlacement='auto'
				isSearchable={true}
			/>
		</div>
	)
}
