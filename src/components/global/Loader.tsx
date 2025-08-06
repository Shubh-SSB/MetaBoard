import { type FC } from "react";

const Loader: FC<{ isVisible: boolean }> = ({ isVisible }) => {
    return (<>
        {
            isVisible &&
            <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-500 bg-opacity-40 backdrop-blur-[2px]  z-[999]">
                <div className="spinner"></div>
            </div>
        }
    </>);
}
export default Loader;