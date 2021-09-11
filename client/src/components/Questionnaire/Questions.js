import './Questions.css';
import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

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
import beta from './beta.svg'

export class Questions extends React.Component {
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
        <HashRouter>
          <div className="form">
            <Switch>
            <Route exact path="/quiz/question_1">
                <form action='/question/1' method='POST' data-netlify="true" name="form_1" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                  <input type="hidden" name="form-name" value="form_1"/>
                  <p>At MyCure Fitness our Strength Programs are custom built with your input. Along with a few simple questions, this test will require a squat test so please have the space to complete that. Take the 4 minutes to provide us your details and we will be in touch in less than 24 hours. Stronger - Healthier - Happier is achievable.</p>
                  <input type="submit" value="GO!" name="submit_1"/>

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
                  <div data-netlify-recaptcha="true"></div>
                </form>
              </Route>

              <Route exact path="/quiz/question_2">
                <form action='/question/2' method='POST' data-netlify="true" name="form_2" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                  <input type="hidden" name="form-name" value="form_2"/>
                  <label>What is your age?</label><br/>
                  <input type="number" id="age" name="current_age" min="0" max="100"/><br/><br/>
                  <input type="submit" value="Submit" name="submit_2"/>
                  <div id="hexagons">
                      <div id="hex_1" className="chosen_one"></div>
                      <div id="hex_2"></div>
                      <div id="hex_3"></div>
                  </div>
                  <Link to="/quiz/question_1">
                      <button type="button" className="back_button">
                          ᐊ Back
                      </button>
                  </Link>
                  <div data-netlify-recaptcha="true"></div>
                </form>
              </Route>

              <Route exact path="/quiz/question_3">
                  <form action='/question/3' method='POST' data-netlify="true" name="form_3" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_3"/>
                    <label for="bio_sex">{question_1.question}</label><br/>
                    <select id="bio_sex" name={question_1.question}>
                      <option value="male" name="male">{answer_1[0]}</option>
                      <option value="female" name="female">{answer_1[1]}</option>
                      <option value="other" name="other">{answer_1[2]}</option>
                    </select><br/><br/>
                    <input type="submit" value="Submit" name="submit_3"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2"></div>
                        <div id="hex_3"></div>
                    </div>
                    <Link to="/quiz/question_2">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>
                
                <Route exact path="/quiz/question_4">
                  <form id='question4' action='/question/4' method='POST' data-netlify="true" name="form_4" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_4"/>
                    <label>What is your height in feet or centimeters?</label><br/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2"></div>
                        <div id="hex_3"></div>
                    </div>
                    <br></br>

                    <input type="checkbox" id="btnControl" name="ft_inch_input"/>
                    <label class="btn" for="btnControl">
                      <h2>Enter Feet and inches</h2>
                      <input type="number" id="ft_cms" name="feet" min="0" max="10" placeholder="feet"/>
                      <input type="number" id="ft_inches" name="feet_inches" min="0" max="11" placeholder="inches"/>
                    </label>
                    <br></br>
                    <input type="checkbox" id="btnControl_2" name="cms_input"/>
                    <label class="btn" for="btnControl_2">
                      <h2>Enter cms</h2>
                      <input type="number" id="cms" className="cms" name="cms" min="0" max="243" placeholder="cms"/>
                    </label>

                    <br></br>
                    <input type="submit" value="Submit" name="submit_4"/>
                    <br></br>
                    
                    <Link to="/quiz/question_3">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_5">
                  <form id='question5' action='/question/5' method='POST' data-netlify="true" name="form_5" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_5"/>
                    <label>What is your CURRENT weight or kilograms and pounds?</label><br/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>
                    <br></br>

                    <input type="checkbox" id="btnControl_3" name="kgs_input"/>
                    <label class="btn" for="btnControl_3">
                      <h2>Enter kgs</h2>
                      <input type="number" id="kgs" name="kgs" min="0" max="635" placeholder="kgs"/>
                    </label>
                    <br></br>
                    <input type="checkbox" id="btnControl_4" name="pounds_input"/>
                    <label class="btn" for="btnControl_4">
                      <h2>Enter pounds</h2>
                      <input type="number" id="pounds" name="pounds" min="0" max="1400" placeholder="pounds"/>
                    </label>

                    <br></br>
                    <input type="submit" value="Submit" name="submit_5"/>
                    <br></br>

                    <Link to="/quiz/question_4">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_6">
                  <form id='question6' action='/question/6' method='POST' data-netlify="true" name="form_6" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_6"/>
                    <label>What is your IDEAL weight in kilograms or pounds?</label><br/>
                    
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>
                    <br></br>

                    <input type="checkbox" id="btnControl_5" name="ideal_kgs_input"/>
                    <label class="btn" for="btnControl_5">
                      <h2>Enter Ideal kgs</h2>
                      <input type="number" id="ideal_kgs" name="ideal_kgs" min="0" max="635" placeholder="Ideal kgs"/>
                    </label>
                    <br></br>
                    <input type="checkbox" id="btnControl_6" name="ideal_pounds_input"/>
                    <label class="btn" for="btnControl_6">
                      <h2>Enter Ideal pounds</h2>
                      <input type="number" id="ideal_pounds" name="ideal_pounds" min="0" max="1400" placeholder="Ideal pounds"/>
                    </label>

                    <br></br>
                    <input type="submit" value="Submit" name="submit_6"/>
                    <br></br>

                    <Link to="/quiz/question_5">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_7">
                  <form action='/question/7' method='POST' data-netlify="true" name="form_7" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                      <input type="hidden" name="form-name" value="form_7"/>
                      <p id="mc_question">{question_2.question}</p>
                      <p>We want to custom plan for your specific goals.</p>
                      <div className="radio-buttons">
                        <label className="option">
                            <input type="checkbox" id='goal_1' name="What's your goal?" value='Muscle build and get stronger'/> 
                            <span>{answer_2[0]}</span>
                            <img src={muscle} alt="muscle" className="image"/>
                        </label>
                        <label className="option">
                            <input type="checkbox" id='goal_2' name="What's your goal?" value='Fat loss and get leaner'/> 
                            <span>{answer_2[1]}</span>
                            <img src={fatloss} alt="fatloss" className="image"/>
                        </label>
                        <label className="option">
                            <input type="checkbox" id='goal_3' name="What's your goal?" value='Athletic optimization (A protocol to support long + intense performance)'/> 
                            <span>{answer_2[2]}</span>
                            <img src={optimization} alt="optimization" className="image"/>
                        </label>
                        <label className="option">
                            <input type="checkbox" id='goal_4' name="What's your goal?" value='Sweat have fun and develop healthy eating lifestyle'/> 
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

                      <input type="submit" value="Submit" name="submit_7"/>
                      <br></br>
                      <Link to="/quiz/question_6">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_8">
                  <form action='/question/8' method='POST' data-netlify="true" name="form_8" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                      <input type="hidden" name="form-name" value="form_8"/>
                      <p id="mc_question">{question_3.question}</p>
                      <p>We can always make workouts more efficient, lets figure out where you are right now.</p>
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

                      <input type="submit" value="Submit" name="submit_8"/>
                      <br></br>
                      <Link to="/quiz/question_7">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_9">
                  <form action='/question/9' method='POST' data-netlify="true" name="form_9" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_9"/>
                    <p id="mc_question">Activity Level</p>
                    <label>How often did you work out last week?</label><br/>
                    <p>Including at the gym, at home, outside, or at a local studio.</p>
                    
                    <div className="radio-buttons">
                        <label className="option">
                            <input type="radio" id='activityLevel_1' name='What is your activity level?' value='0 - 1 days'/> 
                            <span>0 - 1 days</span>
                        </label>
                        <label className="option">
                            <input type="radio" id='activityLevel_2' name='What is your activity level?' value='2 - 3 days'/> 
                            <span>2 - 3 days</span>
                        </label>
                        <label className="option">
                            <input type="radio" id='activityLevel_3' name='What is your activity level?' value='4 - 5 days'/> 
                            <span>4 - 5 days</span>
                        </label>
                        <label className="option">
                            <input type="radio" id='activityLevel_4' name='What is your activity level?' value='6 - 7 days'/> 
                            <span>6 - 7 days</span>
                        </label>

                        <div className="hexagons">
                            <div id="hex_1" className="chosen_one"></div>
                            <div id="hex_2" className="chosen_one"></div>
                            <div id="hex_3"></div>
                        </div>
                    </div>
                    <input type="submit" value="Submit" name="submit_9"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>
                    <Link to="/quiz/question_8">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_10">
                  <form action='/question/10' method='POST' data-netlify="true" name="form_10" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                      <input type="hidden" name="form-name" value="form_10"/>
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
                      
                      <input type="submit" value="Submit" name="submit_10"/>
                      <br></br><br></br>
                      <Link to="/quiz/question_9">
                            <button type="button" className="back_button">
                                ᐊ Back
                            </button>
                      </Link>
                      <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_11">
                  <form action='/question/11' method='POST' data-netlify="true" name="form_11" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_11"/>
                    <p>It's time for a little foundational movement! Please do 30 seconds of squats for us (don’t worry we will keep the time). Press start to begin your countdown - and don’t forget to remember how many squats you did!</p>
                    <input type="submit" value="Start" name="submit_11"/>
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
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_12">
                  <form action='/question/12' method='POST' id="count_form" data-netlify="true" name="form_12" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_12"/>
                    <div className="hexagon"><span></span></div>
                    <h1 id="current_count">Current count: </h1> <br></br><p id="count">{count}</p>
                    <div id="example_hex"></div>
                    <br></br>
                    <label>Enter the amount of squats and please wait until the counter reaches 0.</label><br/>
                    <input type="number" id="squat_lvl" name="squat" min="0" max="100"/><br/><br/>
                    
                    {count > 0
                      ? <input type="submit" value="Submit" className="hexSubmit" name="submit_12_0"/>
                      : <input type="submit" value="Submit" name="submit_12_1"/>
                    }

                    
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3"></div>
                    </div>

                    <Link to="/quiz/question_11">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>

                <Route exact path="/quiz/question_13">
                  <form action='/question/13' method='POST' data-netlify="true" name="form_13" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_13"/>
                    <img src={beta} alt="beta" className="beta"/><br/>
                    <input type="submit" value="Proceed to last question" name="submit_13"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3" className="chosen_one"></div>
                    </div>
                    <Link to="/quiz/question_12">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>
                
                <Route exact path="/quiz/question_14">
                  <form action='/question/14' method='POST' data-netlify="true" name="form_14" encType="application/x-www-form-urlencoded" data-netlify-recaptcha="true">
                    <input type="hidden" name="form-name" value="form_14"/>
                    <label for="email">Let us connect with you for your unique information and one of our experts will contact you to get more detail about your goals!</label><br/>
                    <input type="text" id="user_email" name="email" placeholder="Enter email"/><br/><br/>
                    <input type="submit" value="Submit" name="submit_14"/>
                    <div className="hexagons">
                        <div id="hex_1" className="chosen_one"></div>
                        <div id="hex_2" className="chosen_one"></div>
                        <div id="hex_3" className="chosen_one"></div>
                    </div>
                    <Link to="/quiz/question_13">
                        <button type="button" className="back_button">
                            ᐊ Back
                        </button>
                    </Link>
                    <div data-netlify-recaptcha="true"></div>
                  </form>
                </Route>
            </Switch>
          </div>
        </HashRouter>
      </body>
    );
  }
}