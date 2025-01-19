import React from 'react';

export function NextArrow(props) {
  return (
    <div 
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(0, 0, 0, 0.9)",  // Darker background (more opaque)
        color: "white",                         // White arrow color (if needed)
        borderRadius: "50%",                    // Circular shape
        padding: "15px",                        // Increase padding for a larger circle
        cursor: "pointer",                     // Pointer cursor on hover
        zIndex: 100,                            // Ensure visibility over other content
        display: "flex",                        // Centering the content
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        marginRight: "-12px",                       // Larger size for better visibility
      }}
      onClick={props.onClick}
    >
    </div>
  );
}

export function PrevArrow(props) {
  return (
    <div 
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: "rgba(0, 0, 0, 0.9)",  // Darker background (more opaque)
        color: "white",                         // White arrow color (if needed)
        borderRadius: "50%",                    // Circular shape
        padding: "15px",                        // Increase padding for a larger circle
        cursor: "pointer",                     // Pointer cursor on hover
        zIndex: 100,                            // Ensure visibility over other content
        display: "flex",                        // Centering the content
        alignItems: "center",
        justifyContent: "center",
        fontSize: "28px",
        marginLeft: "-20px",                       // Larger size for better visibility
      }}
      onClick={props.onClick}
    >
    </div>
  );
}
