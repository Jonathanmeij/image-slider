export default function Arrow(props) {
    const style = props.orientation === "right" ? "rotate-180" : "";

    return (
        <div
            onClick={props.action}
            className={
                style +
                " flex items-center justify-center w-20 h-full cursor-pointer opacity-40 bg-gradient-to-r from-black to-transparent hover:opacity-75"
            }
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
            >
                <path
                    fill="#FFFFFF"
                    d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                />
            </svg>
        </div>
    );
}

//&lt
//&gt
