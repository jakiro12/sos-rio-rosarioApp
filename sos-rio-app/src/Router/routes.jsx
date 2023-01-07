import {createBrowserRouter} from 'react-router-dom'
import TicketDay from '../Components/dateAviable';
import FormValues from '../Components/formData';
import Paradores from '../Components/spotsRosario';
import BoatDraw from '../LogosInCss/boat';
import Home from '../Pages/Home'

export const router= createBrowserRouter([
       { path:"/",
         element:<Home/>,
    },
    {
        path:"/formdata",
        element:<FormValues/>
    },
    {
        path:"/logo",
        element:<BoatDraw/>
    },
    {
        path:"/paradores",
        element:<Paradores/>
    },
    {
        path:'/ticketoption',
        element:<TicketDay/>,
    }
]);
