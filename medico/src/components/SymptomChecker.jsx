// // SymptomChecker.jsx
// import React, { useState } from 'react';
// import axios from 'axios';
// import ResultCard from './ResultCard';

// const SymptomChecker = () => {
//     const [symptoms, setSymptoms] = useState('');
//     const [result, setResult] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setSymptoms(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms });
//             setResult(response.data);
//         } catch (error) {
//             console.error("There was an error fetching the data!", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div>
//             <h1>Symptom Checker</h1>
//             <form onSubmit={handleSubmit}>
//                 <textarea
//                     value={symptoms}
//                     onChange={handleInputChange}
//                     placeholder="Enter your symptoms separated by commas"
//                     rows="4"
//                     cols="50"
//                 />
//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Loading...' : 'Check Symptoms'}
//                 </button>
//             </form>
//             {result && <ResultCard data={result} />}
//         </div>
//     );
// };

// export default SymptomChecker;

// SymptomChecker.jsx
import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

const SymptomChecker = () => {
    const [symptoms, setSymptoms] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setSymptoms(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', { symptoms });
            setResult(response.data);
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3 text-center">
                Check Your Symptoms
            </h1>
            <p className="text-center text-gray-500 mb-8 max-w-2xl">
                Enter your symptoms below and our AI will analyze them to provide potential conditions and treatment recommendations.
            </p>

            <form 
                onSubmit={handleSubmit} 
                className="w-full max-w-2xl bg-white rounded-full shadow-md flex items-center px-6 py-3 border border-gray-200"
            >
                <input
                    type="text"
                    value={symptoms}
                    onChange={handleInputChange}
                    placeholder="Describe your symptoms (e.g., headache, fever, cough)"
                    className="flex-grow bg-transparent outline-none text-sm md:text-base placeholder-gray-400"
                />
                <button 
                    type="submit" 
                    disabled={loading}
                    className={`ml-4 w-10 h-10 flex items-center justify-center rounded-full ${loading ? 'bg-gray-400' : 'bg-teal-500 hover:bg-teal-600'} transition duration-200`}
                >
                    {!loading ? (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z" />
                        </svg>
                    ) : (
                        <div className="loader ease-linear rounded-full border-2 border-t-2 border-white w-4 h-4 animate-spin"></div>
                    )}
                </button>
            </form>

            {result && (
                <div className="mt-10 w-full max-w-2xl">
                    <ResultCard data={result} />
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;
