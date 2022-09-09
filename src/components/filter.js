export const Filter = ({children, handleClick}) => {
    return (
        <div className="flex flex-row items-center bg-white rounded-md shadow-md px-8 py-4">
            <div className="flex flex-row flex-wrap gap-2">
                {children}
            </div>
            <span className="text-customDesaturatedCyan hover:underline ml-auto cursor-pointer py-[2px]" onClick={handleClick}>Clear</span>
        </div>
    );
}