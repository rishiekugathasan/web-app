import React from 'react'
import {CardDeck, Container} from 'react-bootstrap'
import ReviewCardLanding from './ReviewCardLanding'

export default function ReviewsLanding() {  
        const reviews = [
            {author: 'Rubini - mom of 2 teenagers', review: 'I was training for a little over a year total when the pandemic struck. For someone who’s an after work gym goer it was hard to restructure by fitness training. I was referred by my friend Lucky to train with the MyCure Fitness team and honestly making the switch to a virtual based program under James has helped me regain my fitness lifestyle through the pandemic and can say that I’ve set and broken new weight-loss targets while moving better and getting stronger.'},
            {author: 'Mit-30 entrepreneur', review: 'My love for running lead me to feel a lot of unwanted knee pain and my long hours of  working on my laptop started to make my shoulders hurt more and more. The MyCure Fitness team and their Physio included strength program got me managing my pain better and made me realize I was able to do a lot more than I thought I could in terms of my resistance training. '},
            // {author: 'reivew 03', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis commodo magna, vitae tristique quam. Mauris non lacus felis. Vivamus vel metus pulvinar, ullamcorper mauris non, maximus lectus. Proin porta est velit, eget lobortis sapien pulvinar vitae. Nulla facilisi. Nam hendrerit, ex eget dignissim consectetur, arcu mauris accumsan eros, eget condimentum ex urna sit amet erat. Donec egestas convallis rhoncus. Nam volutpat eu purus eget consequat. Nullam quis ex metus. Etiam sagittis sit amet libero sollicitudin imperdiet. Nulla eu faucibus purus, eget tempor enim.'}
        ]
        const renderReview = (card, index) => {
            return(
              <ReviewCardLanding key={index}
                    author={card.author}
                    txt={card.review}
              />
            ) 
          }
    return (
        <Container className="reviewContainer d-flex justify-content-center" >
          <CardDeck className="d-flex reviewDeck" > 
          {/* use flex wrap */}
              {reviews.map(renderReview)}
          </CardDeck>
      </Container>
    )
}
