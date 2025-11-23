// // ResultCard.jsx
// import React from 'react';

// const ResultCard = ({ data }) => {
//     const { predicted_disease, dis_desc, dis_pre, dis_die, dis_med, dis_wrkout } = data;

//     return (
//         <div className="result-card">
//             <h2>Predicted Disease: {predicted_disease}</h2>
//             <p><strong>Description:</strong> {dis_desc}</p>
//             <h3>Precautions:</h3>
//             <ul>
//                 {dis_pre.map((pre, index) => (
//                     <li key={index}>{pre}</li>
//                 ))}
//             </ul>
//             <h3>Medications:</h3>
//             <ul>
//                 {dis_med.map((med, index) => (
//                     <li key={index}>{med}</li>
//                 ))}
//             </ul>
//             <h3>Diet:</h3>
//             <ul>
//                 {dis_die.map((die, index) => (
//                     <li key={index}>{die}</li>
//                 ))}
//             </ul>
//             <h3>Recommended Workouts:</h3>
//             <ul>
//                 {dis_wrkout.map((workout, index) => (
//                     <li key={index}>{workout}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default ResultCard;

// ResultCard.jsx
import React from 'react';

const ResultCard = ({ data }) => {
    const { predicted_disease, dis_desc, dis_pre, dis_die, dis_med, dis_wrkout } = data;

    const cardStyles = [
        "bg-gradient-to-r from-cyan-100 to-cyan-300",
        "bg-gradient-to-r from-amber-100 to-amber-300",
        "bg-gradient-to-r from-emerald-100 to-emerald-300",
        "bg-gradient-to-r from-pink-100 to-pink-300",
        "bg-gradient-to-r from-lime-100 to-lime-300",
        "bg-gradient-to-r from-violet-100 to-violet-300",
    ];

    const cardBase = "p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300";

    const headingStyle = "text-xl font-semibold text-gray-800 mb-3";
    const textStyle = "text-gray-700 text-sm";
    const listStyle = "list-disc list-inside text-gray-700 space-y-1";

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Predicted Disease Card */}
            <div className={`${cardBase} ${cardStyles[0]}`}>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Predicted Disease</h2>
                <p className="text-lg text-gray-900">{predicted_disease}</p>
            </div>

            {/* Description Card */}
            <div className={`${cardBase} ${cardStyles[1]}`}>
                <h3 className={headingStyle}>Description</h3>
                <p className={textStyle}>{dis_desc}</p>
            </div>

            {/* Precautions Card */}
            <div className={`${cardBase} ${cardStyles[2]}`}>
                <h3 className={headingStyle}>Precautions</h3>
                <ul className={listStyle}>
                    {dis_pre.map((pre, index) => (
                        <li key={index}>{pre}</li>
                    ))}
                </ul>
            </div>

            {/* Medications Card */}
            <div className={`${cardBase} ${cardStyles[3]}`}>
                <h3 className={headingStyle}>Medications</h3>
                <ul className={listStyle}>
                    {dis_med.map((med, index) => (
                        <li key={index}>{med}</li>
                    ))}
                </ul>
            </div>

            {/* Diet Card */}
            <div className={`${cardBase} ${cardStyles[4]}`}>
                <h3 className={headingStyle}>Diet</h3>
                <ul className={listStyle}>
                    {dis_die.map((die, index) => (
                        <li key={index}>{die}</li>
                    ))}
                </ul>
            </div>

            {/* Recommended Workouts Card */}
            <div className={`${cardBase} ${cardStyles[5]}`}>
                <h3 className={headingStyle}>Recommended Workouts</h3>
                <ul className={listStyle}>
                    {dis_wrkout.map((workout, index) => (
                        <li key={index}>{workout}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResultCard;
