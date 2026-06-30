'use client'

import { useState, useRef, useEffect } from 'react'

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
  name?: string // For native form submissions
  className?: string
  align?: 'left' | 'right'
}

export function Select({
  value,
  onChange,
  options,
  name,
  className = '',
  align = 'left',
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const selectedOption = options.find(o => o.value === value) || options[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      setIsOpen(false)
      triggerRef.current?.focus()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      } else {
        const currentIndex = options.findIndex(o => o.value === value)
        const nextIndex = (currentIndex + 1) % options.length
        onChange(options[nextIndex].value)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      } else {
        const currentIndex = options.findIndex(o => o.value === value)
        const nextIndex = (currentIndex - 1 + options.length) % options.length
        onChange(options[nextIndex].value)
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen(o => !o)
    }
  }

  function handleOptionClick(optionValue: string) {
    onChange(optionValue)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div
      ref={wrapperRef}
      className={`custom-select-wrapper ${className}`}
      data-open={isOpen}
      onKeyDown={handleKeyDown}
    >
      {/* Hidden input for standard HTML form submission */}
      {name && <input type="hidden" name={name} value={value} />}

      <button
        ref={triggerRef}
        type="button"
        className="custom-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(o => !o)}
      >
        <span>{selectedOption?.label}</span>
        <svg
          className="custom-select-arrow"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <ul
        className={`custom-select-options ${
          align === 'right' ? 'custom-select-options--right' : ''
        }`}
        role="listbox"
        tabIndex={-1}
      >
        {options.map(option => (
          <li
            key={option.value}
            role="option"
            aria-selected={option.value === value}
            tabIndex={0}
            className="custom-select-option"
            onClick={() => handleOptionClick(option.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOptionClick(option.value)
              }
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}
