import React, {useMemo,useState,useCallback,useRef,useEffect} from 'react'
import { GoogleMap,Marker,MarkerClusterer,
Circle,DirectionsRenderer } from '@react-google-maps/api';
import { useLoadScript } from "@react-google-maps/api";
import Places from '../Components/places';

const google = window.google // declared google as a global variable because it wasn't automatically accessible in the project 
const libraries = ["places"];

const Map = ({start=false,end=false,arrived=false,tripStatus}) => {
    const [dest,setDestination] = useState(false)
    const [userLocation,setUserLocation] = useState({})
    const [directions,setDirections] = useState({})
    const options = useMemo(() => ({
      disableDefaultUI : true,
      clickableIcons : false
    }), [])
    const mapRef = useRef()
    const onLoad = useCallback(
      (map) => {
        mapRef.current = map
      },
      [],
    )
 
    const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  let userCoordinates = {}
  const successCallback = (position) => {
    const {latitude, longitude} = position.coords
    userCoordinates.lat = latitude
    userCoordinates.lng = longitude
    setUserLocation({lat:userCoordinates.lat,lng:userCoordinates.lng})
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const center = useMemo(() => (userCoordinates) ,[])

const renderDirections =(userLocation) => {
if(!dest) return
console.log(userLocation)
const service = new google.maps.DirectionsService()
service.route({
    origin : userLocation,
    destination : dest,
    travelMode : google.maps.TravelMode.DRIVING
},
(result,status)=>{
    if(status === "OK" && result){
        setDirections(result)
        console.log(result)
    } 
})
}

useEffect(() => { renderDirections(userLocation)}, [dest])

const defaultOptions ={
    strokeOpacity : 1,
    strokeWeight : 1,
    clickable :false,
    draggable : false,
    editable : false,
    visible : true
}

const circleOptions = {
    ...defaultOptions,
    zIndex : 3,
    fillOpacity : 0.5,
    strokeStyle : "dashed",
    strokeColor : '#93c5fd',
    fillColor : 'transparent'
}

 useEffect(() => {
  if(start && end ){
    setUserLocation(start)
    setTimeout(()=>{
      setDestination(end)
        renderDirections(userLocation)
    },1000)
  }
 }, [end])
 
  return (
    <>
    <div className={start? 'w-full h-full' : 'lg:w-9/12 h-96 rounded-4xl shadow-md md:w-10/12 w-full'}>
    <div className='w-full h-full'>
        { !isLoaded ?  <div className='w-full flex items-center justify-center h-full '><p className='map-loader'>LOADING...</p></div> : <GoogleMap zoom={10} center={center}
      mapContainerClassName={start ? 'map-container-2' : 'map-container'}
      options={options}
      onLoad={onLoad}
      >
         {(dest && userLocation) && <>
         <Marker position={dest} map={mapRef.current}/>
         <Circle center={userLocation} radius={1000} options={circleOptions}/>
         <Circle center={userLocation} radius={2000} options={circleOptions}/>
         <Circle center={userLocation} radius={3000} options={circleOptions}/>

         </>  
         }
         
         {userLocation ? <Marker position={userLocation} map={mapRef.current}/> : ""}
        
         {(dest ? <DirectionsRenderer style={{display : directions ? "block" : "none"}} directions={directions}/> : '')}
         </GoogleMap>
        }
        </div>
    </div>
      <Places tripStatus={tripStatus} arrived={arrived} start={start} setLocation={(position)=>{
        setDestination(position)
        mapRef.current?.panTo(position)
    }}/>
    </>
  )
}


export default Map