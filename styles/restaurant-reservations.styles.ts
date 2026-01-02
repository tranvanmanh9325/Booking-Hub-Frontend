/**
 * Styles and Scripts for Restaurant Reservations Page
 * This file combines styles from part1 and part2 files for backward compatibility
 */

import { restaurantReservationsStylesPart1 } from './restaurant-reservations.styles.part1'
import { restaurantReservationsStylesPart2, restaurantReservationsScript } from './restaurant-reservations.styles.part2'

// Combine both style parts into a single export for backward compatibility
export const restaurantReservationsStyles = restaurantReservationsStylesPart1 + restaurantReservationsStylesPart2

// Re-export the script
export { restaurantReservationsScript }