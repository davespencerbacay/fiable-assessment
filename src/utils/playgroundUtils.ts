import {
    DEFAULT_DIRECTION,
    DIRECTION_VALUES,
    GRID_TABLE_SIZE,
    VALIDATION_MESSAGES,
} from '../constants/constants'
import type { GridTableDirection } from '../components/GridTable/GridTable.types'

export interface ParsedPositionInput {
    x: number
    y: number
    direction: GridTableDirection
}

export const parsePositionInput = (value: string): ParsedPositionInput | null => {
    const parts = value.split(',').map((part) => part.trim())

    if (parts.length !== 3) {
        return null
    }

    const [xPart, yPart, directionPart] = parts
    const x = Number(xPart)
    const y = Number(yPart)
    const direction = directionPart.toUpperCase() as GridTableDirection
    const maxIndex = GRID_TABLE_SIZE - 1
    const isValidDirection = DIRECTION_VALUES.includes(direction as (typeof DIRECTION_VALUES)[number])

    if (!Number.isInteger(x) || x < 0 || x > maxIndex) {
        return null
    }

    if (!Number.isInteger(y) || y < 0 || y > maxIndex) {
        return null
    }

    if (!isValidDirection) {
        return null
    }

    return { x, y, direction }
}

export const validatePositionInput = (value: string): string[] => {
    const errors: string[] = []
    const parts = value.split(',').map((part) => part.trim())

    if (parts.length !== 3) {
        errors.push(VALIDATION_MESSAGES.format)
        return errors
    }

    const [xPart, yPart, directionPart] = parts
    const maxIndex = GRID_TABLE_SIZE - 1

    if (xPart.length === 0 || yPart.length === 0 || directionPart.length === 0) {
        errors.push(VALIDATION_MESSAGES.requiredFields)
    }

    const x = Number(xPart)
    const y = Number(yPart)
    const direction = directionPart.toUpperCase()

    if (!Number.isFinite(x) || Number.isNaN(x)) {
        errors.push(VALIDATION_MESSAGES.xNumeric)
    } else {
        if (x < 0) {
            errors.push(VALIDATION_MESSAGES.xMin)
        }

        if (x > maxIndex) {
            errors.push(`Position X must be less than or equal to ${maxIndex}.`)
        }

        if (!Number.isInteger(x)) {
            errors.push(VALIDATION_MESSAGES.xWhole)
        }
    }

    if (!Number.isFinite(y) || Number.isNaN(y)) {
        errors.push(VALIDATION_MESSAGES.yNumeric)
    } else {
        if (y < 0) {
            errors.push(VALIDATION_MESSAGES.yMin)
        }

        if (y > maxIndex) {
            errors.push(`Position Y must be less than or equal to ${maxIndex}.`)
        }

        if (!Number.isInteger(y)) {
            errors.push(VALIDATION_MESSAGES.yWhole)
        }
    }

    if (!DIRECTION_VALUES.includes(direction as (typeof DIRECTION_VALUES)[number])) {
        errors.push(VALIDATION_MESSAGES.direction)
    }

    return errors
}

export const capitalizeText = (value?: string) => {
    if (!value) {
        return ''
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}

export const getParsedDirectionOrDefault = (direction?: GridTableDirection) => direction ?? DEFAULT_DIRECTION
