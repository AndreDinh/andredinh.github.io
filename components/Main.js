import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Welcome to my website. I been doing web developing since the earlier 2000s but got serious in Front-End Development 2015. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/att.png" alt="" /></span>
          <p>Currently maintaining <a href="https://www.att.com/">att.com</a><br></br> <strong>Buy-Flow</strong>
          <br />
            Managed on high-profile, customer-facing marketing projects for AT&T. Collaborated $2M recovery and redesign project supporting 60k+ users. Worked with product owner, business analyst, and UX design on <a href="https://www.att.com/">att.com</a>
            <br />
            Some other pages I worked on:
            <br />
            <a href="https://www.att.com/">https://www.att.com/</a> <br />
            <a href=" https://www.att.com/deals/"> https://www.att.com/deals/</a> <br />
            <a href="https://www.att.com/wireless/">https://www.att.com/wireless/</a> <br />
            <a href="https://www.att.com/buy/phones/apple-iphone-xs-max-64gb-silver.html">https://www.att.com/buy/phones/apple-iphone-xs-max-64gb-silver.html</a> <br />
            <a href="https://www.att.com/plans/connected-car/honda.html">https://www.att.com/plans/connected-car/honda.html</a>

          </p>

          <p>Stack using
            <ul>
              <li>
                AEM(6.1 and 6.4) and Adobe CQ
              </li>
              <li>
                HTML (HTML5)
              </li>
              <li>
                CSS (Responsive web design)
              </li>
              <li>
                JavaScript(Vanilla, Angular, and React)
              </li>

            </ul>
          </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/profile.png" alt="" /></span>
          <h3>Web Development</h3>
          <p>I started programing in during the myspace era making profiles and custom curster usinging inline html and css
          I found passion in coding during jonur year of high school. I made it a goal to become a programer and soon after I went to Bellevue College to be Computer Science major
          Once I graduated college I realized I love web-develment more than just programing. I went back to school to become a Front-End Develop. Where I spend 3 months intense programing to land my first Front-End developer job
          I now love what I am doing and love to problem solve new challanges in the technology world
          </p>
          <h3> Hobbies</h3>
          <p>I am a photographer working with friends and family on holidays and events.</p>
          <span className="image main"><img src="/static/images/pic04.jpg" alt="" /></span>
          <p>I been a powerlifter for 1 year serious training. Competed and got second in my weight class with over 100 entrance in compention.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            {/* <li><a href="#">
            <FontAwesomeIcon icon={faTwitter} />
          </a></li> */}
            {/* <li><a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a></li> */}
            {/* <li><a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a></li> */}
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main