import React from 'react'

export default () => {
  // const height = document.height
  return (
    <div style={{ backgroundColor: "rgba(29,29,29, 0.7)", position: "fixed", zIndex: 1000, height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "40%", minHeight: "200px", background: "linear-gradient(#136a8a, #267871)", borderRadius: "20px" }}>
        <div style={{ width: "60%", margin: "0 auto", textAlign: "center", marginTop: "20px", fontSize: 18, color: "#fff", fontWeight: 200, borderBottom: "1px solid #fff" }}>
          Alert
        </div>

        <div>
          Text
        </div>

        <div>
          button
        </div>
      </div>
    </div>
  )
}