
import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Carpets from '../Components/Carpets/Carpets';
import Rugs from '../Components/Rugs/Rugs';
import ForBathroom from '../Components/ForBathroom/ForBathroom';
import Runners from '../Components/Runners/Runners';
import SpecialCarpets from '../Components/SpecialCarpets/SpecialCarpets';
import HelpCenter from '../Components/HelpCenter/HelpCenter';
import Contacts from '../Components/Contacts/Contacts';
import Glavnaya from '../Components/Glavnaya/Glavnaya';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [  
        {
                path: "/",
                element: <Glavnaya/>,
        }, {
            path: "/carpets",
            element: <Carpets/>,
        }, 
        {
            path: "/rugs",
            element: <Rugs/>
        },
        {
            path: "/forbathroom",
            element: <ForBathroom/>,
        },
        {
            path: "/runners",
            element: <Runners/>,

        },
        {
            path:"/specialcarpets",
            element :<SpecialCarpets/>
        },
        {
            path:"/helpcenter",
            element :<HelpCenter/>
        },
        {
            path:"/contacts",
            element :<Contacts/>
        }
    ]

    }
 

])
export default router