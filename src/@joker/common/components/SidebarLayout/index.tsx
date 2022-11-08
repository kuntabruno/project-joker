import { Fragment } from "react";
import SidebarContent from "../SidebarContent";

export default function SidebarLayout({ children }: { children: JSX.Element }) {
    return (
        <Fragment>
        <div className="flex flex-row flex-start justify-start w-100 h-screen">
        <div className="w-3/12 border-r-2">
            <div className="sm:pl-28 pl-2 mt-10">
                <SidebarContent/>
            </div>  
        </div>

        <div className="w-9/12 flex-col flex-center justify-center">
            {children}
        </div>
        </div>
        </Fragment>
    );
}