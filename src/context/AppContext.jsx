import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [inquiries, setInquiries] = useState([]);

    console.log("inquiries==>>>>", inquiries);

    const [vendorQuotes, setVendorQuotes] = useState([]);
    const addInquiry = (inquiry) => {
        setInquiries((prev) => [...prev, { ...inquiry, id: Date.now() }]);
    };

    // VENDOR QUOTE FUNCTIONS
    const addVendorQuote = (quote) => {
        setVendorQuotes((prev) => [
            ...prev,
            { ...quote, id: Date.now() }
        ]);
    };

    // ✅ USERS
    const [users, setUsers] = useState([]);

    const addUser = (user) => {
        setUsers((prev) => [
            ...prev,
            { ...user, id: Date.now() }
        ]);
    };

    const [roles, setRoles] = useState([]);

    const addRole = (role) => {
        setRoles((prev) => [
            ...prev,
            { ...role, id: Date.now() }
        ]);
    };
    const deleteRole = (id) => {
        setRoles((prev) => prev.filter((role) => role.id !== id));
    };


    return (
        <AppContext.Provider
            value={{
                users,
                roles,
                inquiries,
                vendorQuotes,
                addUser,
                addRole,
                addInquiry,
                deleteRole,
                addVendorQuote,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook
export const useAppContext = () => useContext(AppContext);