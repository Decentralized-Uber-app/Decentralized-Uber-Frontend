import React,{useState} from 'react'
import usePlacesAutocomplete,{getGeocode,getLatLng} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import {AiOutlineSearch} from "react-icons/ai"
import {FaCalendarAlt} from"react-icons/fa"

const Places = ({tripStatus,setLocation,arrived}) => {
    const [isSuggestionShowing, setIsSuggestionShowing] = useState(false)
    function selectSuggestions(e){
      if(e.code === "ArrowDown"){

      }
    }
    const kilometers200InMeters = 200 * 1000;

    const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 6.27,
        lng: () => 3.60
      },
      radius: kilometers200InMeters
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
        
        setLocation({lat,lng})
      });
    };
  window.addEventListener("keydown",()=>{

  })
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}
        className="cursor-pointer hover:bg-blue-400 px-2 py-1 hover:text-gray-100">
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <>
    <div className={arrived ? "hidden" : 'lg:w-9/12 w-full md:w-10/12 flex justify-between mt-3 mb-2 pl-2'}>
     <div  ref={ref}className='flex items-center border bg-white relative rounded-3xl w-4/5 pr-4'
          >
            <AiOutlineSearch  className='w-1/12 text-2xl'/>
            <input type="text" className='py-2.5 w-11/12 outline-none ' placeholder='Enter Destination' id='search-container'
            value={value}
        onChange={handleInput}
        disabled={!ready}
            />
        {status === "OK" && <ul className='absolute bg-white left-3 z-10 top-12 rounded-sm  py-1'>{renderSuggestions()}</ul>}
        </div>
        <div className='md:w-1/12 bg-white w-1/6 flex justify-center items-center rounded-3xl text-xl cursor-pointer'><FaCalendarAlt /></div>
    </div>
    <div  className={arrived ? 'lg:w-9/12 w-full md:w-10/12 flex justify-center bg-green-500 semi-circle bg-opacity-70 py-1 mt-3 mb-2 pl-2' : 'hidden'}>
     <p style={{ display: tripStatus === "start" ? "none" : "block" }} className='text-lg font-bold text-white'>Arrived Destination</p>
     <p style={{ display: tripStatus === "start" ? "block" : "none" }} className='text-lg font-bold text-white'>Arrived Location</p>
    </div>
    </>
  )
}

export default Places