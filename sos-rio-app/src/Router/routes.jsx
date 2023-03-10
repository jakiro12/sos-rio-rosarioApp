import {createBrowserRouter} from 'react-router-dom'
import TicketDay from '../Components/dateAviable';
import FormValues from '../Components/formData';
import DaysAndHoursGomon from '../Components/gomonTime';
import AllBoats from '../Components/navyPort';
import CallHelpers from '../Components/numberEmergency/callHelp';
import TimeAndDayTakeIt from '../Components/selectTime';
import Paradores from '../Components/spotsRosario';
import DaysAndHoursTracker from '../Components/trackerTimes';
import TerminalInfo from '../InfoAboutApp/aboutUs';
import ServiceOfPort from '../InfoAboutApp/services';
import InfoAboutSpots from '../InfoAboutApp/spotsInfo';
import WhenWeArrive from '../InfoAboutApp/whenWeStart';
import BoatDraw from '../LogosInCss/boat';
import Home from '../Pages/Home'
import MenuOption from '../Pages/Menu';

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
    },
    {
        path:'/options',
        element:<MenuOption/>
    },
    {
        path:'/shipping',
        element:<AllBoats/>
    },
    {
        path:'/checkturnspot',
        element:<TimeAndDayTakeIt/>
    },
    {
        path:'/checkturntracker',
        element:<DaysAndHoursTracker/>
    },
    {
        path:'/checkturngomon',
        element:<DaysAndHoursGomon/>  
    },
    {
        path:'/informacion',
        element:<TerminalInfo/>
    },
    {
        path:'/infoparadores',
        element:<InfoAboutSpots/>
    },
    {
        path:'/infoservicie',
        element:<ServiceOfPort/>
    },
    {
        path:'/infocuando',
        element:<WhenWeArrive/>
    },
    {
        path:'/atencion',
        element:<CallHelpers/>
    }
   
]);
