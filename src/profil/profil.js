import PropTypes from "prop-types";
export default function Profil (props) {
    const styeObject={color:"rgb(91, 28, 110)", paddingTop:"50px", fontSize:"40px"}
    const styeObject1={fontSize:"20px", paddingLeft:"80px", paddingRight:"80px"}
    const styeBtn={fontSize:"20px" , borderRadius:"5px", padding:"10px", color:"rgb(91, 28, 110)", backgroundColor:"pink" }
    return (
        <>
        {props.children}
        <div>
        <h1 style={styeObject}>{props.nm}</h1>
        <h2>{props.pf}</h2>
        <img src="./photo/photoamal.jpg" alt='im' width="200px"/>
        <p style={styeObject1}>
            Je suis <b>{props.nm}</b> , <b>{props.bio}</b> 
            spécialisée en conception mécanique des articles statiques (articles de sport, déco...)
            durant 7 ans, dans notre société familliale de construction métallique "TWEMMAN".
            J'ai pris mon diplome de l'école nationale des ingénieurs de sfax avec une mention "trés bien". 
       </p>
        </div>

        <button style={styeBtn} onClick={()=>props.al(`Hello ${props.nm}`)}>
          Submit
        </button>
        </>
      );
    };
    Profil.defultProps={
        nm:"default full name",  pf:"default profil"

    }
    Profil.propTypes = {
        nm : PropTypes.string,
        pf : PropTypes.string,
        bio:PropTypes.string
    }
