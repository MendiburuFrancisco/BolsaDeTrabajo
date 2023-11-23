import React, { createContext, useState, useContext, useCallback,useEffect } from 'react';
import { getJobFilterRequest } from '../api/jobs.request.js';
// Creación del contexto
const JobContext = createContext();

// Proveedor del contexto
export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const [sortBy, setSortBy] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [jobType, setJobType] = useState("");
    const [officials, setOfficials] = useState("");


    const fetchJobs = useCallback(() => {
        // Lógica para obtener trabajos basados en filtros y búsqueda
        const { id_tipo_trabajo, chequeado, page } = filters;
        const search = searchTerm
        const filterInRequest = search? { search , id_tipo_trabajo, chequeado, page }  : { id_tipo_trabajo, chequeado, page }
        
        getJobFilterRequest(filterInRequest)
            .then((res) => {
                setJobs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, [filters, searchTerm]);

    // Llamada al cargar y cuando cambien los filtros o términos de búsqueda
    useEffect(() => {
        fetchJobs();
    }, [fetchJobs]);

    const contextValue = {
        jobs,
        setFilters,
        setSearchTerm
    };

    return (
        <JobContext.Provider value={contextValue}>
            {children}
        </JobContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useJobContext = () => {
    return useContext(JobContext);
};
