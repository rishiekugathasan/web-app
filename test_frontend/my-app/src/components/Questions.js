import './Questions.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import muscle from './muscle.svg'
import fatloss from './fatloss.svg'
import optimization from './optimization.svg'
import healthy from './healthy.svg'
import easy_2 from './easy_2.svg'
import tough_2 from './tough_2.svg'
import busy_2 from './busy_2.svg'
import lock_3 from './lock_3.svg'
import vegan_3 from './vegan_3.svg'
import paleoKeto_3 from './paleoKeto_3.svg'
import mediterranean_3 from './mediterranean_3.svg'
import other_3 from './other_3.svg'

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 30,
      data: [],
      question_1: {},
      question_2: {},
      question_3: {},
      question_4: {},
      answer_1: [],
      answer_2: [],
      answer_3: [],
      answer_4: []
    };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      if (this.state.count === 0) {
        this.componentWillUnmount();
        return;
      }
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }, 1000);
    fetch('/sendQuestions')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            data: result,
            question_1: result[0],
            question_2: result[1],
            question_3: result[2],
            question_4: result[3],
            answer_1: result[0].answers,
            answer_2: result[1].answers,
            answer_3: result[2].answers,
            answer_4: result[3].answers    
          });
        }
      )
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  /*
  clicked() {
    const { count } = this.state;
    return (
        <h1>Current count: {count}</h1>
    )
  }
  */

  render() {
    const { question_1 } = this.state;
    const { answer_1 } = this.state;
    const { question_2 } = this.state;
    const { answer_2 } = this.state;
    const { question_3 } = this.state;
    const { answer_3 } = this.state;
    const { question_4 } = this.state;
    const { answer_4 } = this.state;
    const { count } = this.state;

    return (
      <body className="questionnaire">
        <Router>
          <div className="form">
            <Switch>
              <Route exact path="/quiz/question_1">
                <form action='/question/1' method='POST'>
                  <label>What is your age?</label><br/>
                  <input type="number" id="age" name="current_age" min="0" max="100"/><br/><br/>
                  <input type="submit" value="Submit"/>
                  <div id="hexagons">
                      <div id="hex_1" className="chosen_one"></div>
                      <div id="hex_2"></div>
                      <div id="hex_3"></div>
                  </div>
                  <Link to="/">
                      <button type="button" className="back_button">
                          ᐊ Back
                      </button>
                  </Link>
                </form>
              </Route>

              <Route exact path="/quiz/question_2">
                  <form action='/question/2' method='POST'>
                    <label for="bio_sex">{question_1.question}</label><br/>
                    <select id="bio_sex" name={question_1.question}>
                      <option value="male">{answer_1[0]}</option>
                      <option value="female">{answer_1[1]}</option>
                      <option value="other">{answer_1[2]}</option>
                    </select><br/><br/>
                    <input type="submit" value="Submit"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2"></div>
                        <div id="hex_3"></div>
                    </div>
                    <Link to="/quiz/question_1">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>
                
                <Route exact path="/quiz/question_3">
                  <form id='question3' action='/question/3' method='POST'>
                    <label>What is your height in feet or centimeters?</label><br/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2"></div>
                        <div id="hex_3"></div>
                    </div>
                    <br></br>
                    <label for="btnControl" id="feet_text" className="ft_txt"> FEET </label>
                    <input type="checkbox" id="btnControl"/>
                    <label className="btn" for="btnControl_2" id="cms_text"> CMS
                        <br></br>
                        <input type="number" id="ft_cms" name="feet" min="0" max="10" placeholder="feet"/>
                        <input type="number" id="ft_inches" name="feet_inches" min="0" max="10" placeholder="inches"/>
                    </label>
                    <br></br>
                    <input type="checkbox" id="btnControl_2"/>
                    <label className="btn" for="btnControl_2" id="disappear">
                        <input type="number" id="ft_cms" className="cms" name="cms" min="0" max="10" placeholder="cms"/>
                    </label>
                    <br></br>

                    <input type="submit" value="Submit"/>
                    <br></br>
                    
                    <Link to="/quiz/question_2">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_4">
                  <form id='question4' action='/question/4' method='POST'>
                    <label>What is your CURRENT weight or kilograms and pounds?</label><br/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>
                    
                    <br></br>
                    <label className="btn" id="kgs_text" for="btnControl_3"> KGS </label>
                    <input type="checkbox" id="btnControl_3"/>
                    <label className="btn" for="btnControl_4" id="pounds_text"> POUNDS
                        <br></br>
                        <input type="number" id="kgs" name="kgs" min="0" max="10" placeholder="kgs"/>
                        <br></br>
                    </label>
                    <input type="checkbox" id="btnControl_4"/>
                    <label className="btn" for="btnControl_4">
                        <input type="number" id="pounds" name="pounds" min="0" max="10" placeholder="pounds"/>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit"/>
                    <br></br>

                    <Link to="/quiz/question_3">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_5">
                  <form id='question5' action='/question/5' method='POST'>
                    <label>What is your IDEAL weight in kilograms or pounds?</label><br/>
                    
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>

                    <br></br>
                    <label className="btn" id="ideal_kgs_text" for="btnControl_5"> IDEAL KGS </label>
                    <input type="checkbox" id="btnControl_5"/>
                    <label className="btn" for="btnControl_6" id="ideal_pounds_text"> IDEAL IBS
                        <br></br>
                        <input type="number" id="ideal_kgs" name="ideal_kgs" min="0" max="10" placeholder="Ideal kgs"/>
                        <br></br>
                    </label>
                    <input type="checkbox" id="btnControl_6"/>
                    <label className="btn" for="btnControl_6">
                        <input type="number" id="ideal_pounds" name="ideal_pounds" min="0" max="10" placeholder="Ideal lbs"/>
                    </label>
                    <br></br>
                    <input type="submit" value="Submit"/>
                    <br></br>

                    <Link to="/quiz/question_4">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_6">
                  <form action='/question/6' method='POST'>
                      <p id="mc_question">{question_2.question}</p>
                      <div className="radio-buttons">
                        <label className="option">
                            <input type="radio" id='goal_1' name="What's your goal?" value='Muscle build and get stronger'/> 
                            <span>{answer_2[0]}</span>
                            <img src={muscle} alt="muscle" className="image"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='goal_2' name="What's your goal?" value='Fat loss and get leaner'/> 
                            <span>{answer_2[1]}</span>
                            <img src={fatloss} alt="fatloss" className="image"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='goal_3' name="What's your goal?" value='Athletic optimization (A protocol to support long + intense performance)'/> 
                            <span>{answer_2[2]}</span>
                            <img src={optimization} alt="optimization" className="image"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='goal_4' name="What's your goal?" value='Sweat have fun and develop healthy eating lifestyle'/> 
                            <span>{answer_2[3]}</span>
                            <img src={healthy} alt="healthy" className="image"/>
                        </label>
                        <br></br><br></br>

                        <div className="hexagons">
                            <div id="hex_1" className="chosen_one"></div>
                            <div id="hex_2" className="chosen_one"></div>
                            <div id="hex_3"></div>
                        </div>

                      </div>

                      <input type="submit" value="Submit"/>
                      <br></br>
                      <Link to="/quiz/question_5">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      
                  </form>
                </Route>

                <Route exact path="/quiz/question_7">
                  <form action='/question/7' method='POST'>
                      <p id="mc_question">{question_3.question}</p>
                      <div className="radio-buttons">
                        <label className="option">
                            <input type="radio" id='time_1' name='Making time for exercise + workout is...' value='Easy for me to do'/> 
                            <span>{answer_3[0]}</span><br></br><br></br>
                            <img src={easy_2} alt="easy_2" className="image_2"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='time_2' name='Making time for exercise + workout is...' value='Has been tough so far'/> 
                            <span>{answer_3[1]}</span><br></br><br></br>
                            <img src={tough_2} alt="tough_2" className="image_2"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='time_3' name='Making time for exercise + workout is...' value="I'm very busy, but I will make time"/> 
                            <span>{answer_3[2]}<br></br><br></br></span>
                            <img src={busy_2} alt="busy_2" className="image_2"/>
                        </label>

                        <div className="hexagons">
                            <div id="hex_1" className="chosen_one"></div>
                            <div id="hex_2" className="chosen_one"></div>
                            <div id="hex_3"></div>
                        </div>
                      </div>

                      <input type="submit" value="Submit"/>
                      <br></br>
                      <Link to="/quiz/question_6">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      
                  </form>
                </Route>

                <Route exact path="/quiz/question_8">
                  <form action='/question/8' method='POST'>
                    <label>What is your activity level? (From 0-10)</label><br/>
                    <input type="number" id="activity_lvl" name="activity" min="0" max="10"/><br/><br/>
                    <input type="submit" value="Submit"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>
                    <Link to="/quiz/question_7">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_9">
                  <form action='/question/9' method='POST'>
                      <p id="mc_question">{question_4.question}</p>
                      <div className="radio-buttons">
                        <label className="option">
                            <input type="radio" id='diet_1' name='What best describes your diet?' value='No restriction'/> 
                            <span>{answer_4[0]}</span><br></br><br></br>
                            <img src={lock_3} alt="lock_3" className="image_3"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='diet_2' name='What best describes your diet?' value='Vegan or vegetarian'/> 
                            <span>{answer_4[1]}</span><br></br><br></br>
                            <img src={vegan_3} alt="vegan_3" className="image_3"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='diet_3' name='What best describes your diet?' value='Paleo-keto'/> 
                            <span>{answer_4[2]}<br></br><br></br></span>
                            <img src={paleoKeto_3} alt="paleoKeto_3" className="image_3"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='diet_4' name='What best describes your diet?' value='Mediterranean'/> 
                            <span>{answer_4[3]}<br></br><br></br></span>
                            <img src={mediterranean_3} alt="mediterranean_3" className="image_3"/>
                        </label>
                        <label className="option">
                            <input type="radio" id='diet_5' name='What best describes your diet?' value='Other'/> 
                            <span>{answer_4[4]}<br></br><br></br></span>
                            <img src={other_3} alt="other_3" className="image_3"/>
                        </label>
                        
                        <div className="hexagons">
                            <div id="hex_1" className="chosen_one"></div>
                            <div id="hex_2" className="chosen_one"></div>
                            <div id="hex_3"></div>
                        </div>
                      </div>
                      
                      <input type="submit" value="Submit"/>
                      <br></br><br></br>
                      <Link to="/quiz/question_8">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      
                  </form>
                </Route>

                <Route exact path="/quiz/question_10">
                  <form action='/question/10' method='POST'>
                    <p>Do as many squats as you can for 30 seconds. Press start to begin!"</p>
                    <input type="submit" value="Start"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>

                    <Link to="/quiz/question_9">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_11">
                  <form action='/question/11' method='POST'>
                    <h1 id="current_count">Current count: </h1> <br></br><p id="count">{count}</p>
                    <div className="hexagon"><span></span></div>
                    <label>Enter the amount of squats.</label><br/>
                    <input type="number" id="squat_lvl" name="squat" min="0" max="100"/><br/><br/>
                    <input type="submit" value="Submit"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>

                    <Link to="/quiz/question_10">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_12">
                  <form action='/question/12' method='POST'>
                    <label for="email">Please enter your email: </label><br/>
                    <input type="text" id="user_email" name="email" placeholder="Enter email"/><br/><br/>
                    <input type="submit" value="Submit"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3" className="chosen_one"></div>
                    </div>
                    <Link to="/quiz/question_11">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                  </form>
                </Route>

                <Route exact path="/quiz/question_13">
                    <button onClick={() => {alert('tits > ass');}}>try me when popup is open</button>
                </Route>
            </Switch>
          </div>
        </Router>
      </body>
    );
  }
}

export default Questions;