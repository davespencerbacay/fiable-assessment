export const APP_FONT_FAMILY = "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif"

export const GRID_TABLE_SIZE = 5
export const GRID_CELL_SIZE = 90
export const GRID_Y_AXIS_COLUMN_WIDTH = 24
export const GRID_Y_AXIS_TO_TABLE_GAP = 12

export const GRID_X_LABEL = 'POSITION X'
export const GRID_Y_LABEL = 'POSITION Y'
export const GRID_ERROR_MESSAGE = 'INVALID'
export const GRID_VALID_CARD_TITLE = 'Valid Position'
export const GRID_VALID_CARD_DESCRIPTION = 'Valid position x, position y and direction values'
export const GRID_SELECTED_CARD_TITLE = 'Selected Position'
export const GRID_SELECTED_CARD_DESCRIPTION = 'Selected position x, position y and direction values'

export const DIRECTION_VALUES = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const
export const DEFAULT_DIRECTION = DIRECTION_VALUES[0]

export const DEFAULT_PLAYGROUND_INPUT = '2, 2, NORTH'
export const PLAYGROUND_INPUT_LABEL = 'Position format'
export const PLAYGROUND_BUTTON_LABEL = 'Apply'
export const PLAYGROUND_VALIDATION_TITLE = 'Validation error'
export const PLAYGROUND_SECTION_LABEL = 'Playground input'
export const PLAYGROUND_SECTION_TITLE = 'Enter the position and direction'
export const PLAYGROUND_ACCEPTED_FORMAT_TEXT =
    'Accepted format: Position X, Position Y ,direction (e.g., 2,3,NORTH). Position X and Y must be integers between 0 and'

export const DIRECTION_OPTIONS_TEXT = DIRECTION_VALUES.join(', ')

export const VALIDATION_MESSAGES = {
    format: 'Invalid input format. Use: Position X, Position Y, Direction',
    requiredFields: 'Invalid input format. All three values are required: Position X, Position Y, Direction',
    xNumeric: 'Position X must be numeric.',
    xMin: 'Position X must be greater than or equal to 0.',
    xWhole: 'Position X must be a whole number.',
    yNumeric: 'Position Y must be numeric.',
    yMin: 'Position Y must be greater than or equal to 0.',
    yWhole: 'Position Y must be a whole number.',
    direction: `Direction must be one of: ${DIRECTION_VALUES.join(', ')}.`,
} as const
