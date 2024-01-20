import "./home.css"
import {userData} from '../../dummyData'

import { FeaturedInfo,Chart, WidgetSm, WidgetLg } from "../../components"
export const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    <div className="homeWidgets">
      <WidgetSm/>
      <WidgetLg/>
    </div>
    </div>
  )
}

 
