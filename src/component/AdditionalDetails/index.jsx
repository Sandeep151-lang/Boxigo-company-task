import React from 'react'
import Furnitor from '../Furnitor/Furnitor'
import {
      Accordion,
      AccordionItem,
      AccordionItemButton,
      AccordionItemHeading,
      AccordionItemPanel
    } from "react-accessible-accordion";
import DropdownIcon from '../../icons/Dropdown';

const AdditionDetails = ({data}) => {
      

   
  return (
            <>
                <div className='additional-details'>
                <p className='main-head'>Additional Information</p>
                <button className='edit-additional-button'>Edit Additional Information</button>
                </div>

                <p>Test Data</p>
                <div className='additional-details'>
                <p className='main-head'>House Details</p>
                <button className='edit-additional-button'>Edit House Details</button>
                </div>
                
                <h5 className='house-header'>Existing House Details</h5>
                <div className='house-detail'>
                <div className=''>
                      <p className='main-head'>Floor No.</p>
                      <p className='main-para'>{data?.old_floor_no}</p>
                </div>
                <div className=''>
                      <p className='main-head'>Elevator Available</p>
                      <p className='main-para'>{data?.old_elevator_availability}</p>
                </div>
                <div className=''>
                      <p className='main-head'>Distance from elevator/Staircase to truck</p>
                      <p className='main-para'>{data?.old_parking_distance}</p>
                </div>
                </div>

                <h5 className='house-header'>New House Details</h5>
                <div className='house-detail'>
                <div className=''>
                      <p className='main-head'>Floor No.</p>
                      <p className='main-para'>{data?.new_floor_no}</p>
                </div>
                <div className=''>
                      <p className='main-head'>Elevator Available</p>
                      <p className='main-para'>{data?.new_elevator_availability}</p>
                </div>
                <div className=''>
                      <p className='main-head'>Distance from elevator/Staircase to truck</p>
                      <p className='main-para'>{data?.new_parking_distance}</p>
                </div>
                </div>
                <br/>
                
                <div className='additional-details'>
                <p className='main-head'>Inventory Details</p>
                <button className='edit-additional-button'>Edit Inventory</button>
                </div>
                <div>

                {data?.items?.inventory.map((list)=>(
                    <div  className='category-list'>
            <Accordion allowZeroExpanded="true">
                <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h5 className='inventory-header' >{list?.displayName}
                             <span className='inventory-category'>{list?.category?.length}</span>
                             <span className='icon-drop' >
                              <DropdownIcon/>
                             </span>
                        </h5>
                </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                                <Furnitor list={list}/>             
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
                  </div>
                ))}
                </div>
               
            </>
  )
}

export default AdditionDetails   