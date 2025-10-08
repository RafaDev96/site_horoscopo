import React from "react";

function Mandala() {

    //astrologicalData seria um objeto retornado dos calculos, ex:
    // { sunSign: "Aries", moonSign: "Taurus", risingSign: "Gemini"

    const getSegmentColor = (sign) => {
        switch (sign) {
            case "Aries":
                return "#FF5733"; // Red
            case "Taurus":
                return "#33FF57"; // Green
            case "Gemini":
                return "#3357FF"; // Blue
            case "Cancer":
                return "#FF33A8"; // Pink
            case "Leo":
                return "#FFD133"; // Yellow
            case "Virgo":
                return "#33FFF5"; // Cyan
            case "Libra":
                return "#A833FF"; // Purple
            case "Scorpio":
                return "#FF8C33"; // Orange
            case "Sagittarius":
                return "#33FF8C"; // Light Green
            case "Capricorn":
                return "#8C33FF"; // Violet
            case "Aquarius":
                return "#338CFF"; // Light Blue
            case "Pisces":
                return "#FF3380"; // Magenta
            default: return "#CCCCCC"; // Grey for unknown signs
        }
    };

}
    return (
        <svg width="300" height="300" viewBox="0 0 300 300">
            <circle cx="150" cy="150" r="140" fill="#f0f0f0" stroke="#ccc" strokeWidth="2" />
            {/* Example segments */}
            <path d="M150,150 L150,10 A140,140 0 0,1 280,150 Z" fill={getSegmentColor("Aries")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L280,150 A140,140 0 0,1 150,290 Z" fill={getSegmentColor("Taurus")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L150,290 A140,140 0 0,1 20,150 Z" fill={getSegmentColor("Gemini")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L20,150 A140,140 0 0,1 150,10 Z" fill={getSegmentColor("Cancer")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L150,10 A140,140 0 0,1 280,150 Z" fill={getSegmentColor("Leo")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L280,150 A140,140 0 0,1 150,290 Z" fill={getSegmentColor("Virgo")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L150,290 A140,140 0 0,1 20,150 Z" fill={getSegmentColor("Libra")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L20,150 A140,140 0 0,1 150,10 Z" fill={getSegmentColor("Scorpio")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L150,10 A140,140 0 0,1 280,150 Z" fill={getSegmentColor("Sagittarius")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L280,150 A140,140 0 0,1 150,290 Z" fill={getSegmentColor("Capricorn")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L150,290 A140,140 0 0,1 20,150 Z" fill={getSegmentColor("Aquarius")} stroke="#fff" strokeWidth="1" />
            <path d="M150,150 L20,150 A140,140 0 0,1 150,10 Z" fill={getSegmentColor("Pisces")} stroke="#fff" strokeWidth="1" />
            {/* Add more segments for other signs */}
            <circle cx="150" cy="150" r="30" fill="#fff" stroke="#ccc" strokeWidth="2" />
        </svg>
    );

export default Mandala;