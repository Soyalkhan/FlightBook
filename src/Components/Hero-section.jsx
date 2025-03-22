
import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, Calendar, Users, Map, Plane } from "lucide-react"
import bgImage from "../assets/background.jpg"

const HeroSection = () => {
    const [tripType, setTripType] = useState("round-trip")
    const [fromAirport, setFromAirport] = useState("")
    const [toAirport, setToAirport] = useState("")
    const [departureDate, setDepartureDate] = useState("")
    const [returnDate, setReturnDate] = useState("")
    const [passengers, setPassengers] = useState(1)
    const [showFromDropdown, setShowFromDropdown] = useState(false)
    const [showToDropdown, setShowToDropdown] = useState(false)

    const fromRef = useRef(null)
    const toRef = useRef(null)

    const airports = [
        { code: "JFK", name: "John F. Kennedy International Airport", city: "New York" },
        { code: "LAX", name: "Los Angeles International Airport", city: "Los Angeles" },
        { code: "LHR", name: "Heathrow Airport", city: "London" },
        { code: "CDG", name: "Charles de Gaulle Airport", city: "Paris" },
        { code: "DXB", name: "Dubai International Airport", city: "Dubai" },
        { code: "SYD", name: "Sydney Airport", city: "Sydney" },
        { code: "HND", name: "Haneda Airport", city: "Tokyo" },
        { code: "SIN", name: "Singapore Changi Airport", city: "Singapore" },
    ]



    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromRef.current && !fromRef.current.contains(event.target)) {
                setShowFromDropdown(false)
            }
            if (toRef.current && !toRef.current.contains(event.target)) {
                setShowToDropdown(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // Handle form submission
    //     console.log({
    //         tripType,
    //         fromAirport,
    //         toAirport,
    //         departureDate,
    //         returnDate,
    //         passengers,
    //     })
    // }


    const handleSubmit = (e) => {
        e.preventDefault()
    
        const formattedMessage = `
    *New Flight Enquiry*
    
    *Trip Type:* ${tripType}
    *From:* ${fromAirport}
    *To:* ${toAirport}
    *Departure Date:* ${departureDate}
    ${tripType === "round-trip" ? `*Return Date:* ${returnDate}\n` : ""}
    *Passengers:* ${passengers}
    *Date of Enquiry:* ${new Date().toLocaleString()}
        `.trim()
    
        const phoneNumber = "7535964612"
        const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`
    
        window.open(whatsappURL, "_blank")
    }
    


    return (
        <div className="pl-10 pr-10 pb-10">
        <div className="relative w-full h-screen min-h-[500px] overflow-hidden text-white font-sans ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-[-1]"
                style={{
                    backgroundImage: `url(${bgImage})`
                    ,borderRadius: "60px",
                    marginBottom: "30px"
                   
                }}
            ></div>


            {/* Navigation Arrows */}
            {/* <div className="absolute inset-0 flex justify-between items-center px-5 pointer-events-none">
                <button className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center cursor-pointer pointer-events-auto transition-colors hover:bg-white/50">
                    <ChevronLeft size={24} />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center cursor-pointer pointer-events-auto transition-colors hover:bg-white/50">
                    <ChevronRight size={24} />
                </button>
            </div> */}

            {/* Hero Content */}
            <div className="relative w-full h-full flex flex-col justify-center items-center p-5 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 drop-shadow-md mt-12">Welcome to Flyanza</h1>
                <div className="text-lg md:text-xl tracking-widest mb-12 relative px-8 drop-shadow-md before:content-[''] before:absolute before:top-1/2 before:left-[-30px] before:w-[50px] before:h-[1px] before:bg-white after:content-[''] after:absolute after:top-1/2 after:right-[-30px] after:w-[50px] after:h-[1px] after:bg-white">
                    FLIGHTS & TRAVEL
                </div>

                {/* Booking Form */}
                <form
                    className="bg-white/90 rounded-3xl p-5 md:p-6 w-[90%] max-w-[1200px] mt-auto mb-10 text-gray-800 shadow-lg"
                    onSubmit={handleSubmit}
                >
                    {/* Trip Type Row */}
                    <div className="flex flex-wrap gap-4 mb-4">
                        <div className="w-full">
                            <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Trip Type</label>
                            <div className="flex gap-2 md:gap-3">
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-3 border rounded-md transition-colors ${tripType === "round-trip" ? "bg-[#009488] text-white border-yellow-600" : "bg-gray-100 border-gray-300"
                                        }`}
                                    onClick={() => setTripType("round-trip")}
                                >
                                    Round Trip
                                </button>
                                <button
                                    type="button"
                                    className={`flex-1 py-2 px-3 border rounded-md transition-colors ${tripType === "one-way" ? "bg-[#009488] text-white border-yellow-600" : "bg-gray-100 border-gray-300"
                                        }`}
                                    onClick={() => setTripType("one-way")}
                                >
                                    One Way
                                </button>
                                {/* <button
                                    type="button"
                                    className={`flex-1 py-2 px-3 border rounded-md transition-colors ${tripType === "multi-city" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 border-gray-300"
                                        }`}
                                    onClick={() => setTripType("multi-city")}
                                >
                                    Multi-City
                                </button> */}
                            </div>
                        </div>
                    </div>

                    {/* From/To Row */}
<div className="flex flex-wrap gap-4 mb-4">
  {/* From Airport */}
  <div className="flex-1 min-w-[200px]">
    <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">From</label>
    <div className="relative" ref={fromRef}>
      <div className="flex items-center border border-gray-300 rounded-md bg-white">
        <Plane size={18} className="absolute left-3 text-gray-500" />
        <input
          type="text"
          value={fromAirport}
          onChange={(e) => {
            setFromAirport(e.target.value)
            setShowFromDropdown(true)
          }}
          onFocus={() => setShowFromDropdown(true)}
          placeholder="Type airport code, name or city"
          className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
        />
      </div>
      {showFromDropdown && (
        <div className="absolute top-full left-0 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-[9999]">
          {airports
            .filter((airport) =>
              `${airport.code} ${airport.city} ${airport.name}`
                .toLowerCase()
                .includes(fromAirport.toLowerCase())
            )
            .map((airport) => (
              <div
                key={airport.code}
                className="flex p-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50"
                onClick={() => {
                  setFromAirport(`${airport.city} (${airport.code})`)
                  setShowFromDropdown(false)
                }}
              >
                <div className="font-bold mr-4 text-blue-600">{airport.code}</div>
                <div className="flex-1">
                  <div>{airport.city}</div>
                  <div className="text-sm text-gray-500">{airport.name}</div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  </div>

  {/* To Airport */}
  <div className="flex-1 min-w-[200px]">
    <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">To</label>
    <div className="relative" ref={toRef}>
      <div className="flex items-center border border-gray-300 rounded-md bg-white">
        <Map size={18} className="absolute left-3 text-gray-500" />
        <input
          type="text"
          value={toAirport}
          onChange={(e) => {
            setToAirport(e.target.value)
            setShowToDropdown(true)
          }}
          onFocus={() => setShowToDropdown(true)}
          placeholder="Type airport code, name or city"
          className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
        />
      </div>
      {showToDropdown && (
        <div className="absolute top-full left-0 w-full max-h-[300px] overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg z-[9999]">
          {airports
            .filter((airport) =>
              `${airport.code} ${airport.city} ${airport.name}`
                .toLowerCase()
                .includes(toAirport.toLowerCase())
            )
            .map((airport) => (
              <div
                key={airport.code}
                className="flex p-3 cursor-pointer border-b border-gray-100 hover:bg-gray-50"
                onClick={() => {
                  setToAirport(`${airport.city} (${airport.code})`)
                  setShowToDropdown(false)
                }}
              >
                <div className="font-bold mr-4 text-blue-600">{airport.code}</div>
                <div className="flex-1">
                  <div>{airport.city}</div>
                  <div className="text-sm text-gray-500">{airport.name}</div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  </div>
</div>


                    {/* Dates and Passengers Row */}
                    <div className="flex flex-wrap gap-4">
                        {/* Departure Date */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Departure Date</label>
                            <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                                <Calendar size={18} className="absolute left-3 text-gray-500" />
                                <input
                                    type="date"
                                    value={departureDate}
                                    onChange={(e) => setDepartureDate(e.target.value)}
                                    className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Return Date - Only show if Round Trip is selected */}
                        {tripType === "round-trip" && (
                            <div className="flex-1 min-w-[200px]">
                                <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Return Date</label>
                                <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                                    <Calendar size={18} className="absolute left-3 text-gray-500" />
                                    <input
                                        type="date"
                                        value={returnDate}
                                        onChange={(e) => setReturnDate(e.target.value)}
                                        className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Passengers */}
                        <div className="flex-1 min-w-[200px]">
                            <label className="block mb-2 font-semibold text-gray-600 text-sm uppercase">Passengers</label>
                            <div className="relative flex items-center border border-gray-300 rounded-md bg-white">
                                <Users size={18} className="absolute left-3 text-gray-500" />
                                <input
                                    type="number"
                                    min="1"
                                    max="10"
                                    value={passengers}
                                    onChange={(e) => setPassengers(Number.parseInt(e.target.value))}
                                    className="w-full py-2 px-4 pl-10 rounded-md bg-transparent"
                                />
                            </div>
                        </div>

                        {/* Search Button */}
                        <div className="flex items-end w-full md:w-auto mt-4 md:mt-0">
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-[#009488] border-yellow-600 text-white font-bold py-3 px-6 rounded-md transition-colors tracking-wide min-w-[180px]"
                            >
                                Send Enquiry
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default HeroSection

