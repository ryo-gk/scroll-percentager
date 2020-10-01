declare class ScrollPercentager {
    private id;
    private parentElement;
    constructor(id: string);
    /**
     * Return the percentage of scrolls in the specified area.
     *
     * @returns The percentage of scrolls
     */
    getCurrentPercentage(): number;
}
export type { ScrollPercentager };
/**
 * Bind elements to ScrollPercentager.
 *
 * @param id - The ID as selector of target Element
 * @returns A ScrollPercentager instance
 */
export declare function bind(id: string): ScrollPercentager;
