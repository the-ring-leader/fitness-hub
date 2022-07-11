import React from 'react'


const HeroBanner = () => {
  return (
    <div>
      
      <section className="hero is-large is-link has-text-centered" style={{background: "url('hero.png')",backgroundSize: "cover",backgroundPosition: "center",backgroundBlendMode: "soft-light",backgroundColor: "rgb(0,0,0,0.5)"}}>
     
      <div className="hero-body has-text-centered">
        <section>
        <p className="title is-size-1 is-family-secondary"  >Welcome to Fitness Hub</p>
        <p className="subtitle is-italic ">"Begin Your <span className='has-text-weight-bold' style={{color: "red"}}>FAT</span> To <span className='has-text-weight-bold' style={{color: "green"}}>FIT</span> Journey With Us. "</p>
        </section>
       
      </div>
    </section>
    </div>
  )
}

export default HeroBanner