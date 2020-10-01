class ScrollPercentager {
  private parentElement: HTMLElement | null
  constructor (private id: string) {
    this.parentElement = document.getElementById(this.id)
  }
  
  /**
   * Return the percentage of scrolls in the specified area.
   * 
   * @returns The percentage of scrolls
   */
  getCurrentPercentage(): number {
    if (this.parentElement == null) return 0
    const numerator = this.parentElement.scrollTop
    const denominator = (this.parentElement.scrollHeight - this.parentElement.clientHeight)
    if (denominator === 0) return 100
    return Math.round(numerator / denominator * 100)
  }
}

export type { ScrollPercentager }

/**
 * Bind elements to ScrollPercentager.
 * 
 * @param id - The ID as selector of target Element
 * @returns A ScrollPercentager instance
 */
export function bind(id: string): ScrollPercentager {
  return new ScrollPercentager(id)
}