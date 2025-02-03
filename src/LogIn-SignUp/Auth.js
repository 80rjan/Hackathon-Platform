import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./Auth.css";
import { Link } from "react-router-dom";
import Select from "react-select";
import Creatable from "react-select/creatable";


export default function Auth() {
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    const pageVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <motion.div
            id="auth"
            className="arcadeFont"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6 }}
            variants={pageVariants}
        >
            <motion.div
                id="auth-formWrapper"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, y:10 }}
                    animate={{ opacity: 1, y:0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {isLoggingIn ? "Log In" : "Sign Up"}
                </motion.h1>
                {isLoggingIn ? <LogInForm /> : <SignUpForm />}
                <motion.div
                    style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <AuthBtnWrapper isLoggingIn={isLoggingIn} setIsLoggingIn={setIsLoggingIn} />
                    <Link to="/main" style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>Enter as guest</Link>
                </motion.div>
            </motion.div>
            <div style={{ flex: 1 }}></div>
            <motion.div
                id="auth-footerWrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                <Link to="">Privacy Policy</Link>
                <Link to="">Terms of Service</Link>
                <Link to="">Contact Us</Link>
            </motion.div>
        </motion.div>
    );
}

function InputSelect() {
    const programmingLanguage = [
        {value: "Java", label: "Java"},
        {value: "C#", label: "C#"},
        {value: "JavaScript", label: "JavaScript"},
        {value: "Python", label: "Python"},
        {value: "SQL", label: "SQL"},
    ]
    const [selectedLanguage, setSelectedLanguage] = useState([]);
    const handleChangeLanguage = (language) => {
        setSelectedLanguage(language)
    }
    const speciality = [
        {value: "Front End", label: "Front End"},
        {value: "Back End", label: "Back End"},
        {value: "Full Stack", label: "Full Stack"},
        {value: "Databases", label: "Databases"},
        {value: "Game Development", label: "Game Development"},
    ]
    const [selectedSpeciality, setSelectedSpeciality] = useState([]);
    const handleChangeSpeciality = (speciality) => {
        setSelectedSpeciality(speciality)
    }
    const typeOfUser = [
        {value: "Programmer", label: "Programmer"},
        {value: "Organizator", label: "Organizator"}
    ]
    const [selectedUser, setSelectedUser] = useState([]);
    const handleChangeUser = (user) => {
        setSelectedUser(user)
    }

    const customStylesLanguage = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "rgba(0,0,0,0.2)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            boxShadow: "none",
            fontSize: "0.8rem",
            textAlign: "center",
            "&:hover": {
                borderColor: "#fff",
            },
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#3c3a55",
            color: "#fff",
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: "0.8rem",
            backgroundColor: state.isSelected ? "#e74c3c" : state.isFocused ? "#34495e" : "transparent",
            color: state.isSelected ? "#fff" : "#ecf0f1",
            "&:hover": {
                backgroundColor: "#2c3e50",
                color: "#fff",
            },
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "rgba(255,255,255,0.3)",
            color: "#fff",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#fff",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#fff",
            "&:hover": {
                backgroundColor: "#c0392b",
                color: "white",
            },
        }),
    };

    const customStylesUser = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "rgba(0,0,0,0.2)",
            border: "none",
            borderRadius: "8px",
            color: "white",
            boxShadow: "none",
            fontSize: "0.8rem",
            textAlign: "center",
            "&:hover": {
                borderColor: "#fff",
            },
        }),
        menu: (provided) => ({
            ...provided,
            fontSize: "0.8rem",
            backgroundColor: "#3c3a55",
            color: "#fff",
        }),
        option: (provided, state) => ({
            ...provided,
            fontSize: "0.8rem",
            backgroundColor: state.isSelected ? "transparent" : state.isFocused ? "#34495e" : "transparent",
            color: state.isSelected ? "#fff" : "#ecf0f1",
            "&:hover": {
                backgroundColor: "#2c3e50",
                color: "#fff",
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#888',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',  // Dark color for the selected value
        }),
    };


    return (
        <>
            <Select
                options={programmingLanguage}
                value={selectedLanguage}
                onChange={handleChangeLanguage}
                isMulti={true}
                styles={customStylesLanguage}
                closeMenuOnSelect={false}
                placeholder="Programming Language"
            />
            <Select
                options={speciality}
                value={selectedSpeciality}
                onChange={handleChangeSpeciality}
                isMulti={true}
                styles={customStylesLanguage}
                closeMenuOnSelect={false}
                placeholder="Speciality of Work"
            />
            <Creatable
                options={typeOfUser}
                value={selectedUser}
                onChange={handleChangeUser}
                styles={customStylesUser}
                closeMenuOnSelect={true}
                placeholder="Type of User"
            />
        </>
);
}

function LogInForm() {
    return (
        <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <input type="text" name="username" placeholder="Username" required />
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "center" }}>
                <input type="password" name="password" placeholder="Password" required />
                <Link to="">Forgot Password</Link>
            </div>
        </motion.form>
    );
}


function SignUpForm() {
    const [languages, setLanguages] = useState([<InputSelect key={0} />]);

    const addNewLanguage = () => {
        setLanguages((prev) => [...prev, <InputSelect key={prev.length} />]);
    };

    return (
        <motion.form
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <input type="text" name="username" placeholder="Username" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
            <input type="text" name="description" placeholder="Description" required />
            <InputSelect />
        </motion.form>
    );
}


function AuthBtnWrapper({isLoggingIn, setIsLoggingIn}) {
    return (
        <div className="buttonWrapper arcadeFont">
            <motion.div
                id="activeBtnBackground"
                animate={{x: isLoggingIn ? 0 : "100%"}}
                transition={{duration: 0.4, ease: "easeIn"}}
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "50%",
                    background: "var(--red)",
                    borderRadius: "inherit"
                }}
            />
            {isLoggingIn ? (
                <>
                    <Link to="/main">
                        <button className="btnActive">Log In</button>
                    </Link>
                    <button onClick={() => setIsLoggingIn(false)}>Sign Up</button>
                </>
            ) : (
                <>
                    <button onClick={() => setIsLoggingIn(true)}>Log In</button>
                    <Link to="/main">
                        <button className="btnActive">Sign Up</button>
                    </Link>
                </>
            )}
        </div>
    );
}
