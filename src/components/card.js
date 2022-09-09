export const Card = ({children, isNew}) => {
    return (
        <article className={`relative md:flex md:flex-row md:items-center bg-white border-l-8 ${isNew ? "border-customDesaturatedCyan" : "border-customDarkCyan"} rounded-md shadow-md px-4 pt-8 md:py-4 mt-10 md:mt-5 first:mt-14 md:first:mt-10 last:mb-10`}>
            {children}
        </article>
    );
}

export const Logo = ({src, alt}) => (
    <div className="absolute md:static -top-[25px] left-[16px] w-[50px] h-[50px] md:w-auto md:h-auto md:mr-4">
        <img src={src} alt={alt} />
    </div>
)

export const Company = ({children}) => (
    <h2 className="font-medium text-customDesaturatedCyan">{children}</h2>
);

export const Title = ({children}) => (
    <h1 className="font-bold text-customVeryDarkCyan hover:text-customDesaturatedCyan cursor-pointer">{children}</h1>
);

export const Info = ({children}) => (
    <span className="text-customDarkCyan">{children}</span>
);