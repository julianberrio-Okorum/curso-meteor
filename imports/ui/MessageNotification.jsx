import React from "react";

export const MessageNotification = ({ type, message }) => {
    // const [styles, setStyles] = React.useState({});
    return (
        <div className={`p-4 rounded-md absolute top-0 right-0 m-4 transition-all duration-300 ease-in-out`}>
            {type === "success" && (
                <div className="bg-green-100 text-green-700 p-4 rounded-md">
                    Success
                    {message}
                </div>
            )}
            {type === "error" && (
                <div className="bg-red-100 text-red-700 p-4 rounded-md">
                    Error
                    {message}
                </div>
            )}
        </div>
    )
}