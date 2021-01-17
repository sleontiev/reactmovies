import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer grey darken-4 Footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text Footer">THE MOVIES</h5>
                <p className="grey-text text-lighten-4 Footer">Large collection of movies</p>
              </div>
              <div className="col l4 offset-l2 s12">
                
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © { new Date().getFullYear() } Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">git repo</a>
            </div>
          </div>
        </footer>
    )
}

export { Footer }