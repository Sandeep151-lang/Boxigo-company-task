import  { useEffect, useState } from 'react'
import axios from 'axios'


const useDetails = () => {
    const [loading,setLoading] = useState(false)
   const [data,setData]= useState([])
    const getList = async()=>{
        setLoading(true)
        try {
            const resp = await axios.post(`http://test.api.boxigo.in/sample-data/`)
            if(resp){
                setLoading(false)
                setData(resp?.data?.Customer_Estimate_Flow)
            }
        } catch (error) {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getList()
    },[])
  return {
    setData,
    data,
    loading
  }
}

export default useDetails