export interface OfficeActionMenuItem {
    readonly id: string;
    readonly label: string;
    readonly description?: string | undefined;
    readonly disabled?: boolean | undefined;
    readonly danger?: boolean | undefined;
    readonly onSelect: () => void;
}
export interface OfficeActionMenuProps {
    readonly label: string;
    readonly icon: 'export' | 'more';
    readonly variant?: 'text' | 'icon' | undefined;
    readonly disabled?: boolean | undefined;
    readonly items: readonly OfficeActionMenuItem[];
}
/** Shared DSH-like action menu used by editor headers and delivery cards. */
export declare function OfficeActionMenu({ label, icon, variant, disabled, items, }: OfficeActionMenuProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=OfficeActionMenu.d.ts.map