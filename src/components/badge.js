const styles = {
    new: "bg-customDesaturatedCyan",
    featured: "bg-customVeryDarkCyan"
}

export const Badge = ({children, isNew, isFeatured}) => (
    // if isNew is false dark bg, if new is true light bg
    <span className={`${isNew ? styles.new : ""} ${isFeatured ? styles.featured : ""} uppercase font-medium text-xs text-customVeryLightCyan rounded-full px-2 pt-[3px]`}>{children}</span>
);