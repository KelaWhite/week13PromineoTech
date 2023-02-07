import React from 'react';

export default function LogIn() {
    return (
    <div className="outer">
        <form>
            <div className="form-inner">
                <h3>Sign in to find your next feline friend</h3>
                <div className="form-group">
                    <label htmlFor="name">User Name:</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    </div>
    )
}
