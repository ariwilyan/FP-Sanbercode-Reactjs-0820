import React from "react"

class About extends React.Component {
    render() {
        return (
            <>
                <div style={{padding: "10px", border: "1px solid #ccc"}}>
                    <h1 style={{textAlign: "center"}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
                    <ol>
                        <li><strong style={{width: "100px"}}>Nama:</strong> Ari Wilyan Ramadhelza</li> 
                        <li><strong style={{width: "100px"}}>Email:</strong> ariwilyan@gmail.com</li> 
                        <li><strong style={{width: "100px"}}>Sistem Operasi yang digunakan:</strong> Windows 10</li>
                        <li><strong style={{width: "100px"}}>Akun Github:</strong> ariwilyan</li> 
                        <li><strong style={{width: "100px"}}>Akun Telegram:</strong> @ariwilyan</li> 
                    </ol>
                </div>
            </>
        )
    }
}

export default About