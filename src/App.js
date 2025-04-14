import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTypography
} from "mdb-react-ui-kit";

import './index.css'




function App() {
  return (
    <MDBContainer fluid className="p-3">
      {/* Header with light purple background */}
      <MDBNavbar light style={{ backgroundColor: "#4b433a" }} className="mb-4">
        <MDBNavbarBrand
          className="ms-auto"
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
            marginRight: '20px'
          }}
        >
          DEVC11 Bonus Activity
        </MDBNavbarBrand>
      </MDBNavbar>


      <MDBRow className="mb-2">
        <MDBCol
          md="12"
          style={{
            height: '32vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start', // or 'center' if you want horizontal centering too
          }}
        >
          <MDBCardBody>
            <MDBCardTitle style={{ marginLeft: '20px', fontSize: '3.5rem', fontWeight: 'bolder', marginBottom: '-10px', color: '#4b433a' }}>
              GOOD DAY, MA'AM TERE
            </MDBCardTitle>
            <MDBCardText style={{ marginLeft: '20px', fontSize: '2rem', fontWeight: 'bold', color: '#4b433a' }}>
              I am <span style={{color: '#afaa6f'}}>Sean Concepcion</span> and this is my reflection.
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>



      {/* Swipe Below Text */}
      <MDBRow className="mb-5">
        <MDBCol md="12" className="text-center">
          <div style={{ fontWeight: "bold", fontSize: "1.2rem", opacity: '0.7' }}>
            SCROLL BELOW
            <div style={{ fontSize: "1.5rem", lineHeight: "1", marginTop: '-5px'}} >
              ▼
            </div>
          </div>
        </MDBCol>
      </MDBRow>


      {/* Cards in one row */}
      <MDBRow className="g-2 mt-3 mb-2">


        <MDBCol md="4">
          <div className="flip-card" style={{height: '65vh'}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <MDBCard className="text-white h-100" style={{backgroundColor:"#a19688"}}>
                  <MDBCardBody>
                    <MDBCardTitle>Question</MDBCardTitle>
                    <MDBCardText>What was the most surprising or eye-opening thing you learned while gathering information for this exercise? Why did it stand out to you?</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="flip-card-back">
                <MDBCard className="bg-dark text-white h-100">
                  <MDBCardBody>
                    <MDBCardTitle>Answer</MDBCardTitle>
                    <MDBCardText>The most eye-opening information that I have learned is, without a doubt, the idea that it is not the AI that will replace the people, but rather those that are proficient with using AI. This particular statement by Ivory Hua of OffShorly changed my very perspective on the growing AI trend and threat. It made me realize that AI, regardless if it is for good or bad, is bound to change the world, so it is simply up to us to prepare for the inevitable.</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </MDBCol>


        <MDBCol md="4">
        <div className="flip-card" style={{height: '65vh'}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <MDBCard className="text-white h-100" style={{backgroundColor:"#ccc3b6"}}>
                  <MDBCardBody>
                    <MDBCardTitle>Question</MDBCardTitle>
                    <MDBCardText>What did you find most challenging about rewriting unclear sentences? How would you approach fixing them?</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="flip-card-back">
              <MDBCard className="bg-dark text-white h-100">  
                  <MDBCardBody>
                    <MDBCardTitle>Answer</MDBCardTitle>
                    <MDBCardText>The part that I find most challenging about rewriting unclear sentences is finding the correct error or missing information to make it clear. A great example of this is the last item regarding the burning building where my instinct tells me that the correct thing to do is to fill up the missing information, but in doing so, failing to recognize the other errors in the sentences. And to fix this, it boils down to critical thinking and being open-minded to see the other more appropriate error/s.</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </MDBCol>


        <MDBCol md="4">
        <div className="flip-card" style={{height: '65vh'}}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <MDBCard className="text-white h-100" style={{backgroundColor: "#afaa6f"}}>
                  <MDBCardBody>
                    <MDBCardTitle>Question</MDBCardTitle>
                    <MDBCardText>Which part of the exercise made you think the most - choosing the key details for the summary lead or deciding how to engage the reader in the alternative lead creatively? Reflecting on your work, which lead felt more natural for you to write and why?</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className="flip-card-back">
                <MDBCard className="bg-dark text-white h-100">
                  <MDBCardBody>
                    <MDBCardTitle>Answer</MDBCardTitle>
                    <MDBCardText>Choosing the key details is definitely the part that exhausted my mental capacity as fitting the information to a particular angle brought hardship to me. Regardless, writing the summary lead felt more natural as once you find the proper angle, you can properly filter the details to include in the lead, thus putting myself in the 'zone' and the words just kept flowing naturally.</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </div>
        </MDBCol>


      </MDBRow>


      <MDBTypography className="text-center mt-5" style={{opacity: '0.7'}}>- END -</MDBTypography>



      
    </MDBContainer>
  );
}

export default App;
