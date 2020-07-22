import React from 'react'

export default () => {
  // const height = document.height
  return (
    <div style={{ backgroundColor: "rgba(29,29,29, 0.7)", position: "fixed", zIndex: 1000, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "40%", minHeight: "200px", background: "linear-gradient(#136a8a, #267871)", borderRadius: "20px" }}>
        <div style={{ width: "60%", margin: "0 auto", textAlign: "center", marginTop: "15px", fontSize: 18, color: "#fff", fontWeight: 200, borderBottom: "1px solid #fff" }}>
          Alert
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center" }}>
          <div style={{ minHeight: "100px", width: "80%", paddingTop: "10px", paddingBottom: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff" }}>
              Test
          </div>

          <button style={{ height: "40px", width: "60%", marginBottom: "15px", backgroundColor: "#F88E00" }}>
            OK
          </button>
        </div>
      </div>
    </div>
  )
}