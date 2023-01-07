import {createBrowserRouter} from 'react-router-dom'
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
    }
]);
