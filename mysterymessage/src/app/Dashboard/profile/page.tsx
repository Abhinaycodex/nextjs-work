import type { NextPage } from "next";
import { preloadtodos } from "../Todos/page";

const DashboardPage: NextPage= () =>{
    preloadtodos();
    return(
        <>
        <h1 className="text-4xl font-bold">Hello everyone this is profile page </h1>

        </>
    )
};

export default DashboardPage;