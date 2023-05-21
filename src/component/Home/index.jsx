import React from 'react'
import useDetails from './hooks/useDetails'
import Sidebar from '../Sidebar'
import Arrow from '../../icons/Arrow'
import HomeIcon from '../../icons/Home'
import BuildingIcon from '../../icons/Building'
import NavigateIcon from '../../icons/Navigate'
import CalendarIcon from '../../icons/Calendar'
import EditIcon from '../../icons/Edit'
import CheckboxIcon from '../../icons/CheckboxIcon'
import AdditionDetails from '../AdditionalDetails'
import Loader from '../../shared/Loader'
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

const Home = () => {

  const {data,loading} =   useDetails()

  return (
    <>
    <div className='apps'>
       <Sidebar/>
   
          <div className='main'>
              <h5>My Moves</h5>
              {loading && <Loader/>}
              {data.map((item)=>(
                
                <>
              <div className='main-header'>
                  <div>
                    <p className='main-head'>From</p>
                    <p className='main-para'>{item?.moving_from}</p>
                  </div>
                  <div>
                    <Arrow />
                  </div>
                  <div>
                    <p className='main-head'>To</p>
                    <p className='main-para'>{item?.moving_to}</p>
                  </div>
                  <div>
                    <p className='main-head'>Request#</p>
                    <p className='main-para-text'>{item?.estimate_id}</p>
                  </div>
                {/* <Section ---- Header> */}
                </div>
                <div className='section-header'>
                    <div className='home-header'>
                      <HomeIcon />
                      <p className='main-para'>{item?.property_size}</p>
                    </div>
                    <div className='home-header'>
                      <BuildingIcon />
                      <p className='main-para'>{item?.total_items}</p>
                    </div>
                    <div className='home-header'>
                      <NavigateIcon />
                      <p className='main-para'>{item?.distance}</p>
                    </div>
                    <div className='home-header'>
                      <CalendarIcon />
                      <p className='main-para'>{ item?.moving_on}</p>
                      <EditIcon />
                    </div>
                    <div className='home-header'>
                      <CheckboxIcon />
                      <p className='main-para'>flexible</p>
                    </div>
                    
             
                                
                  {/* <div className='home-header'>
                      <button className='view-button'  
                     onClick={()=>addDetails(item)}
                          >View Move Details</button>
                      <button className='awaiting-button'>Quotes Awaiting</button>
                    </div> */}
                </div> 

               {/* ...........accordian */}


               <Accordion allowZeroExpanded="true">
                <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <div className='home-header'>
                      <button className='view-button'  
                          >View Move Details</button>
                      <button className='awaiting-button'>Quotes Awaiting</button>
                    </div>
                
                </AccordionItemButton>
                </AccordionItemHeading>
                <div>
                <AccordionItemPanel>
                     <AdditionDetails data={item}/>
                </AccordionItemPanel>
                </div>
            </AccordionItem>
        </Accordion>
                  <hr />
                  <br/>
                  </> 
              ))}
          </div>
         
        </div>
       

       
    </>
  )
}

export default Home