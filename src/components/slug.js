import iconRemove from '../assets/icon-remove.svg';

export const Slug = ({children, handleClick}) => {
    return (
        <span className="font-medium text-customDesaturatedCyan bg-customVeryLightCyan rounded-md px-3 pt-1 hover:bg-customDesaturatedCyan hover:text-customVeryLightCyan cursor-pointer" onClick={handleClick}>{children}</span>
    );
}

export const RemoveSlug = ({children, handleClick}) => (
    <div className="flex flex-row items-center bg-customVeryLightCyan">
        <span className="font-medium text-customDesaturatedCyan rounded-l-sm px-3 pt-1 ">{children}</span>
        <span className="text-customVeryLightCyan bg-customDesaturatedCyan hover:bg-customVeryDarkCyan rounded-r-sm p-2 cursor-pointer" onClick={handleClick}>
            <img className="w-3 h-3" src={iconRemove} alt="remove" />
        </span>
    </div>
);